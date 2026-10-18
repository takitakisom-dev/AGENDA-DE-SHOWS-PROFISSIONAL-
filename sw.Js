const CACHE='v3.4-cadastro-separado';
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./agenda-shows.html'])));
  self.skipWaiting();
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
