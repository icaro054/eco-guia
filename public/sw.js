// frontend/public/sw.js
const CACHE_NAME = 'diverde-pwa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/src/styles/global.css',
  '/src/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});