var CACHE_NAME = 'canyon-v1';
var URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/data.js',
  '/js/cart.js',
  '/js/app.js',
  '/Canyon_logo.svg',
  '/manifest.json',
  '/assets/images/hero.jpg',
  '/assets/images/road.jpg',
  '/assets/images/mtb.jpg',
  '/assets/images/gravel.jpg',
  '/assets/images/parallax.jpg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.filter(function (n) { return n !== CACHE_NAME; }).map(function (n) { return caches.delete(n); })
      );
    })
  );
});
