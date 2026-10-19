const CACHE='v14-COM-FINANCEIRO';self.addEventListener('install',e=>{self.skipWaiting();});self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
