'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a3155fca76168042f8326db20dc559a6",
".git/config": "94ccce534a7fc85468eb2b24e28a2872",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed6b377beeee24d08a76f33c04768ff8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21bd72b4f06f269cba65da444daaba05",
".git/logs/refs/heads/master": "21bd72b4f06f269cba65da444daaba05",
".git/logs/refs/remotes/origin/master": "946c0c223f658a69d99e97fff22d82f5",
".git/objects/03/1744db1e02fa799e450c269a87fe50171e0b18": "db3e9213146089692f044670df3c2dd8",
".git/objects/04/77f0d587f3551179be66c673549736e90011b7": "59c9286730779527b5bd3dcfafde4c67",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/6d789165d28d8f8af328e63f12d0a8f42bd733": "b0f492627c523c6c59f92ad64f55c4c6",
".git/objects/10/d3e43461fda323e685967e086d8546cc5096a0": "e3a36afae50ec842394965fa322d38fa",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/f1b0cef620648db2b07b943a10e82f48112e45": "44f06b5f274a4c595b7dbfa143aea060",
".git/objects/2c/86494565399a5c511ce097c5893b4d001194dc": "d9a671d2d4dd555fefaa8efdd133bca7",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/3ffeeea1f276b5ff23089d8430cf0645042b43": "e957f273b10b22efdf9eb4e28387ec81",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/281399d1ba962cf6b3ad9c99762516f2a4e9ff": "1740457209c0d1eb3a0af61812e31e55",
".git/objects/32/bf65cec35a1f10770daef82bfbdfda6a1effb4": "fe6bcf9c60d04c96a85e4c5889e15966",
".git/objects/34/298ea6c3c4a491d027a77d41160ec28d6d9f03": "e8a6d7489900ae6345a98f62fa415980",
".git/objects/3a/06a3c1fbee30d6bcf81e69106c990a03d74e2a": "f44f1d729e47eecb6c6f2ee1bf5d71ff",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5a/4352f1dc1f05749f9d117d70516b736d1daa7c": "e77117a743cdd5a48670036061d27e01",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6c/8e0d361b08196962d806fc362c57f59a967d48": "4d9cd6b4c40a3cd600b7051d76f25e4b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/9ddd20645392e8639923110abb92f103aa6487": "aef489be008d0d921bb8e34963566ca1",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/85/a7e02c666f59a667fd608cb43da54fb82ff758": "0754c2d97e3a42923c7ca87c0f0a0784",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/324ba1c01df5615b6c536f47193c4d4aba7c92": "fa28845d5c3fc30333baa4dea8f1ee4a",
".git/objects/9c/a64f3f8f3963174ccf06e845280a82b118e06e": "376d28d9b289ae8764d5c1f9e476bcb1",
".git/objects/9f/0ac4d9ba076c0f47e91be4318b1c962f37f457": "71aa3c4f944b853c6fb7796e5fb4c899",
".git/objects/9f/76531aa12b4c5d3e25dcd4a9c677220e140c70": "6e41adce6a7ebe8c2d6be4d253a9c9bc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/af/ff0a56ce607ecfaee065b43b878ee96598b506": "61fea14399ec0925d6b0bf0ea3faf04b",
".git/objects/b1/a4cd0bae230040c71c2c8322e28a86dd8002c6": "e70a2f5a8fb59b8603f596514e550207",
".git/objects/b2/8f4ee15230ac8cc6e3fdaaf8ec9ca32ce3ec44": "6ae1e09c7a818112125c7571cb291be0",
".git/objects/b4/1f80f0a18d69daba77f31e98904ddf8cb242cb": "fead7d497476456e440e3a66a1e89af0",
".git/objects/b5/0e460e64925519be9010a22d19e65ba2b06340": "156778bb9f519bf7f972c11ee1c63c01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/066ea5d211c6c498aca8d5afe402dd488ed216": "68be77c54884cc520271aac1dae4432c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/a335bb9cbfa9525accce67d3e4fc3402ae3d32": "5036a87ae2a0e8c6e269ed3f66cda508",
".git/objects/c7/c2f33552ab9eac68e65ba7fb6bbd9fe290eef5": "8c6ef2fc117aa7e5765beb07fca2b241",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c5d999b83c71b59e104dcffb0a2fabc6957b81": "942832df585f9c2d4185cd07479a9ae2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b9aa949c26aa1d59d3301b8fb0695332325a0f": "694374eca2f7f714fd7f569d51485447",
".git/objects/e6/b957ee86bde74b4129a85848506813d3d9324f": "71037377c378fe9125e24238eba0f890",
".git/objects/e6/e2c00fbfe4319b4f69eb707c7696e8d4c99329": "53b1d3609d2a8608ede3611b995fa7fb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/93b00e0757d8266db356b995966a1de971afb8": "f16040e722b882c481590411a13cccb0",
".git/refs/heads/master": "c0de985eb3550b9717475ada578648d8",
".git/refs/remotes/origin/master": "9be84a4252fdd41ad54b3a077c345438",
"assets/AssetManifest.json": "9fe5d79ac5ae5f67a760c52230de5431",
"assets/assets/fonts/LeckerliOne-Regular.ttf": "ca23379cb3144c5096ec92d77b47d92c",
"assets/assets/images/album.jpg": "8446358e29315572bb6a8606ce8d6b40",
"assets/assets/images/bardak.jpg": "7b10ec0f3ad4800e32640735b32fc5bb",
"assets/assets/images/behance.png": "9ecbc85623b7ee834dd309403983d915",
"assets/assets/images/facebook.png": "5ab06ae7529cd6c529dcadf23d9d388f",
"assets/assets/images/instagram.png": "795645c597e9065bef77b23c5cf343a5",
"assets/assets/images/kisisel.jpg": "36a0dfb72736d14e47a3079a23f379e3",
"assets/assets/images/mce.png": "2f681dd584b7eb05a155943f676e0385",
"assets/assets/images/mce4.png": "b563ab5bfe922e83c82b73aeda134e64",
"assets/assets/images/okaliptus.jpg": "10017fab67c08c7bdfe4ffd076dee404",
"assets/FontManifest.json": "bc608f31e69a80a549540884d3252b74",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "540ee4bf5e4a7e7f64b81dac3a4efffb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7ff6b95e8cd70309c7a89f68d41836ab",
"/": "7ff6b95e8cd70309c7a89f68d41836ab",
"main.dart.js": "94cef527d0567c9213eee312b46cdea7",
"manifest.json": "2f8ebb2f09b9d3c205ad9a922470ba90",
"version.json": "49048f20046e31ffec5a102ba6d9a813"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
