const CACHE='v13-1-PARTE';self.addEventListener('install',e=>{self.skipWaiting();});self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
