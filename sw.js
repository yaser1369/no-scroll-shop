const CACHE = "no-scroll-shop-v1";
const ASSETS = ["./","index.html","styles.css","app.js","admin.html","admin.css","admin.js","manifest.webmanifest"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
