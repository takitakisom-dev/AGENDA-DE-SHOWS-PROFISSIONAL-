const CACHE_NAME = 'agenda-do-dia-v3-exato';
const urlsToCache = ['./','./agenda-shows.html','./manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ns=>Promise.all(ns.filter(n=>n!==CACHE_NAME).map(n=>caches.delete(n)))));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).catch(()=>caches.match('./agenda-shows.html')))
  );
});
