const CACHE_NAME = 'neofont-cache-v2';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './assets/gifuct.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
