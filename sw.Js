const CACHE='v6-FINAL-ULTRA-STABLE';
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./agenda-shows.html','./icon-192.png','./icon-512.png'])));
  self.skipWaiting();
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
