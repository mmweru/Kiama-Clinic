// Installation
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          'index.html',
          'style.css',
          'about.html',
          'about.css',
          'tips.html',
          'tips.css',
          'contact.html',
          'contact.css',
          'askme.html',
          'askme.css'
        ]);
      })
    );
  });
  
  // Fetching
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
  // Activation
  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== 'my-cache') {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  