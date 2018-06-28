importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
        'temp.html ',
        'lenght.html ',
        'volume.html',
        'weight.html',
        'resources/js/javaScript.js',
        'resources/css/style.css',
     ]);
   })
 );
});