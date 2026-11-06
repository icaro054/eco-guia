const CACHE_NAME = 'diverde-app-v2';
const APP_SHELL = [
  '/',
  '/index.html',
  '/public/manifest.json',
  '/public/icons/icon.svg',
  '/src/main.js',
  '/src/services/api.js',
  '/src/components/Icon.js',
  '/src/components/Header.js',
  '/src/components/CategoryCard.js',
  '/src/components/SearchBar.js',
  '/src/components/MapContainer.js',
  '/src/pages/Home.js',
  '/src/pages/Search.js',
  '/src/pages/CategoryDetail.js',
  '/src/styles/global.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith('diverde-') && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
