var CACHE_NAME = 'canyon-v3';
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
  '/assets/images/parallax.jpg',
  '/assets/images/mtb.jpg',
  '/assets/images/gravel.jpg',
  '/assets/images/electric.jpg',
  '/assets/images/aeroad-cf-slx.jpg',
  '/assets/images/ultimate-cf-sl.jpg',
  '/assets/images/endurace-cf.jpg',
  '/assets/images/aeroad-cfr.jpg',
  '/assets/images/ultimate-cfr-evo.jpg',
  '/assets/images/endurace-cfr.jpg',
  '/assets/images/spectral-cf.jpg',
  '/assets/images/torque-cf.jpg',
  '/assets/images/neuron-cf.jpg',
  '/assets/images/spectral-125-cf.jpg',
  '/assets/images/strive-on-cfr.jpg',
  '/assets/images/torque-on.jpg',
  '/assets/images/grizl-cf-sl.jpg',
  '/assets/images/grail-cf-sl.jpg',
  '/assets/images/grizl-on.jpg',
  '/assets/images/grail-cfr.jpg',
  '/assets/images/grizl-cf-sl-7.jpg',
  '/assets/images/precede-on.jpg',
  '/assets/images/commuter-on.jpg',
  '/assets/images/precede-on-cfr.jpg',
  '/assets/images/pathlite-on.jpg',
  '/assets/images/ucf-7.jpg',
  '/assets/images/roadlite.jpg',
  '/assets/images/commuter-6.jpg',
  '/assets/images/roadlite-cf.jpg',
  '/assets/images/commuter-5.jpg',
  '/assets/images/precede-cf.jpg',
  '/assets/images/aeroad-cf-slx-outlet.jpg',
  '/assets/images/spectral-cf-outlet.jpg',
  '/assets/images/endurace-cf-outlet.jpg',
  '/assets/images/grail-cf-sl-outlet.jpg',
  '/assets/images/neuron-cf-outlet.jpg'
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
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
