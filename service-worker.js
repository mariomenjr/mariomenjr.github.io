!function(){"use strict";const e=1616123881230,t=`cache${e}`,c=["client/client.df0d42df.js","client/index.c3fb0073.js","client/contacto.bdbe3326.js","client/acerca.908c34f1.js","client/index.b3fa91d9.js","client/[...slug].d3c2209e.js"].concat(["service-worker-index.html","favicon.ico"]),n=new Set(c);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(c))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&n.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open(`offline${e}`).then((async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const n=await e.match(t.request);if(n)return n;throw c}})))))}))}();
