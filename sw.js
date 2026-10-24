// 전시장 와이파이가 끊겨도 동작하도록 모든 파일을 기기에 저장
const CACHE = 'jeomjang-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest',
  'assets/ad.png', 'assets/av_doyun.png', 'assets/av_father.png', 'assets/av_gs25.png', 'assets/av_haeun.png',
  'assets/av_minjun.png', 'assets/av_seoyeon.png', 'assets/byulmuri.png', 'assets/subri.png', 'assets/woosang.png',
  'assets/icon-180.png', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/ringtone.m4a', 'assets/voice.m4a'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request))); });
