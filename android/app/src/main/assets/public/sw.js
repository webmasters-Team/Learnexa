const CACHE_NAME = 'learnexa-pwa-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Safely cache core assets without failing if one asset fails
      return Promise.allSettled([
        cache.add('/'),
        cache.add('/manifest.json')
      ]);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests for http/https
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  
  // Skip API requests or dev server WebSocket/HMR requests
  if (url.pathname.startsWith('/api/') || url.pathname.includes('/@vite/') || url.pathname.includes('/node_modules/')) {
    return;
  }

  // Handle SPA navigation requests: always fallback to index '/' if network fails
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/') || caches.match('/index.html');
      })
    );
    return;
  }

  // Network first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
