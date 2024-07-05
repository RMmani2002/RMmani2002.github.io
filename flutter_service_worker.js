'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "68dd4a3f34ceb9942ea67b2c30c8819d",
".git/config": "e9b832f6abc476a471f9d95a04c8c8b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "29255ce6a6582617d980b3c6b6d864c4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "96d5631e603314686d1d91c3f500a7dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ba8645d1279913fb5933e132574fc37",
".git/logs/refs/heads/main": "4ba8645d1279913fb5933e132574fc37",
".git/logs/refs/remotes/origin/main": "c1245b0c8eced6c655bd9ecfe1dab8ef",
".git/objects/04/223a40d28b7767e2de3f587845279aef9f894e": "69912a74d62b56e464d3589c8cbb236a",
".git/objects/09/58d2c0a1a19899f9749fc71203b9f4fc85e0f1": "5d61c5740898e963595c0d517e4ed1ca",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/2fdd7875f504eae7967f8c646bcf4335b6dd46": "e94823fb534a91883ac47cdb84b4e19a",
".git/objects/16/96eb2a6e65589c639b19739c15fce41b48c663": "5e7b84417a4625cf0e11df9b84c1d4d2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/997f93bd51178dd5b9c81877052923e98fb287": "06923acae4ba149fa1d7d321b84db1d8",
".git/objects/1d/4ffd411211ad6eebe28c08340d706ef81877dd": "105ac09f421a6c98502bfb4b34d1c9bb",
".git/objects/1d/794293ea0aff5dd797c68ebbbb1b5f0aba0bdb": "06b7d31d75a0574423a7177dd683f09c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/c65901cdb71c637882edbe5b5900e78e98dd24": "13a83dc94a390d9913bc1fc04b0e15f7",
".git/objects/27/7bfac0874b8138bc923216b5aa9d7e3a6bc226": "bc27defa66a1d99f2884e1501cbf9dca",
".git/objects/29/ff5058ae3abb8dd57e39b0c8c0981acd6cb67d": "2a298986ad79c188969e8d2f578fc52c",
".git/objects/2a/d4f8e93f4ef017db29a4e07408c212881b50bc": "dd8b70f641a81937a5acda19d30e3cf9",
".git/objects/2b/86192de9c6a5b299997d8e4a265dc8742e51cf": "5dc3e6043a11784d24750bebcc6607b6",
".git/objects/34/42497bf3a915fa3b4f2b73cab6ea9e0db1537f": "afdb684044465cdfb0d775ac014dbf92",
".git/objects/36/e11fa0f1358dc43d0f1e2921aa86ec45cf3cb4": "9c7fb8cfd12c52bda0a5e2fa71d873f0",
".git/objects/38/a60471844a4e5fe378e61ee89452f6a03fc706": "7accb0a5637071235cbe1944f950e85b",
".git/objects/43/3fba01872a08d8facd6df82f03251a7acd7504": "2614a97f3d88b805fb9c8881f01ea6be",
".git/objects/45/3de4c88a1da0294ab8c191ad263ce2f66266d1": "00d4e1f1e798e97200a8b2ad85b1450a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/d85581ecad6deb8c7a9ecfe998edaadb1d1d56": "65731aa5ea37d7a86d272ebc535d5a2f",
".git/objects/50/eff143440933de3a41143d876e4a11b01047d1": "e9195ce8f96412afbfd7951096178c5f",
".git/objects/53/4c591bed1ec306390b27cccd86078f1b40fcb7": "7937aafb0cf0f1a90e17b4339a25f6b6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/1ea1e295ed9d4dcb90d531d3f706975eef5c3c": "05947bcb7cc05c3b390305e887ffad54",
".git/objects/58/1f9fadfb25723247999a09016119c9b20549a1": "5cd0550596a263f4871b8b25adfbd06a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/e70cae145a628ba8c4eb4a271f58a7ce16007d": "755763dfc5d46d086938ef719704bc9c",
".git/objects/5c/dac9ca591a2705844030915ac2b727141fa287": "85ca7297faab300642e4466cd150fa22",
".git/objects/5f/40e905be9239dea94009560af92f4ea2731199": "7c6919b4262a8b0f3c0b78b1ee309c7b",
".git/objects/62/3de9d12a05e2fe444b5160770de42f56c20072": "731252ac97c15bc59b2c2465ae5ae24a",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/a075b964c8577905ff159a6699bab0590ab69f": "45aa99f9479102a3eadda5af5301e2f0",
".git/objects/6b/d39b0db19f0d6f9ff7378dd2cf1d06c4dcbce1": "6e69ca65a8e85cf543a6cf506ce0cdce",
".git/objects/6e/012b263262b334de499b357c57521b170b129b": "ab36162e74f7b3c6a5d31d002ff44bd8",
".git/objects/70/b1108869a3cff2509d474749470afb85299cad": "4d6467412527758709298bcff12b6379",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/09ee374a81776fb6179393b37f5ee9e9f3d425": "59ed23374c70207f14f0498ce63d5cab",
".git/objects/78/6a7ca11acd7d1106c2d19d5513fbbb7b86317e": "e281930b6c2d04b76712e9b8c6bc0130",
".git/objects/80/6f560942e54f72ea97010d1e34294bdc81227d": "4fee40aaf213207dca99251ff1755588",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/701570d49f64c50484c4361bb0dcda1fba83e5": "78a9c5ecc54d5c022a88fbe1b2d73284",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f81bdbca78042ef36b1a4009eb4e2e6f2a2d60": "f1e9f7df7cd0c0ca733e03164c57fa1b",
".git/objects/91/517f20f51f0d065a5b059d426dc16927dc7a47": "dada1c2e3600f94b5949116f14b7932b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/aa849b97baaa231e15a7782f3766185a56dc39": "3b30cc864c29b38a6fb6e7a2e43a3d8e",
".git/objects/97/b0c5355170bbd60977f02af5928a7e05b982e6": "7ea8bc7070e0d1d3766852187a09f535",
".git/objects/9d/56a59a89a599f187acf30d3826dbb17ada7429": "eddfbaf388bea410bc77ce9307b6a7de",
".git/objects/a3/78c9eeddbbac7a2d6af43d56c2316f4930d9a1": "e48ff94bedf116a3d3d7ce74707c9b64",
".git/objects/a9/99676f5db155339cd0c7818a5186f42204c082": "ac3f598918a5b7dd3b7fd78f833e813a",
".git/objects/ae/72e83ae90a1a86b937a1de49ace0b1b4a4d50c": "8a38560832c1af6929a611a2feedd260",
".git/objects/b2/a25a905d20e9a8a6120d1ea15716e0facca005": "2543d99c3f1323dc4d355eb8d8bd17be",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/2da96dc0fedbf715552b8eb1f1bb6154bd7dab": "71cb78cefc9bff262dc3114624615fc4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/7cfba6137c84397432feb9eae49f4d68622c68": "55a3b4bf275ae5d29d07aa92e88a6f7f",
".git/objects/c7/244afa5f8c57e323e61142a08ad4c9f11a7017": "b71f19ff6ebe9b1b14abc0993bbf6de4",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/34ed9e5fd8939fb0c7e3f88d590d56a3e950bd": "5e133401c22227931d5ae7d49838da08",
".git/objects/ce/0148197e5d4552ae9a26cf2583b553a5495349": "b007ffc340c31eb820330e1308fa7921",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/1950c08a60029aad00b0fd0ac752dde6d43b0d": "248cbf662aafac8e68f3e730879b57d1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/3447cf9ab0e5b636f21bb4a3c05989eded794a": "9543577df9e14ae77849c0a92e9b7ce5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/934e857bdcdf61a4eb0302a5a94de0ee642396": "df2e84859e5b1479f31f6b445b6b803c",
".git/objects/d8/ce64645f338fde9f31f73ea8416db463a60082": "0cd7cca4e7e58add1012bc6b1853ca4d",
".git/objects/da/884e909e09ff3eb025fe53d54f1546087e190b": "3cf3bb500ebb5008bb5a0649f5c35ae7",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/1db11669b1ea3faa53999e30a899bc37bb6c8e": "68978c6ef1fd088dbbc0189e72eeda11",
".git/objects/e4/5835ed0a93dd294dc747cc69dfc51675c9c28d": "cd8398c7794ad524d8a13702e1f7f014",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e67d386ec9fe3b847540ce2ee5cefcc1864582": "d22807967ce7577d73bee1feae2ac961",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/ddd6e86462d19b38269517e02af34f369ee936": "e425f46766a7ca40fdfae13889fcf943",
".git/objects/fe/b636633faff9630bfebb810d0069c9af6ecc3e": "d5093d94425c3f18620252453549d5cd",
".git/objects/pack/pack-8a74816f13a046e2257c7084d0015ec426c0c518.idx": "ff868bf20aba48cccdbebef4e9e1dfe9",
".git/objects/pack/pack-8a74816f13a046e2257c7084d0015ec426c0c518.pack": "3d389fe7fe21b3c8ee09157483c9756a",
".git/ORIG_HEAD": "54c66c417c194358e047ff6c1cceed11",
".git/refs/heads/main": "659991a54be4ebe991fd832340251a0f",
".git/refs/remotes/origin/main": "659991a54be4ebe991fd832340251a0f",
"assets/AssetManifest.bin": "c8cddeeb90324c34d1f06e41bb580e0b",
"assets/AssetManifest.bin.json": "6306c33e56065f07172032175aadaac8",
"assets/AssetManifest.json": "cb0ce909a1f111ebd60dbff443b13214",
"assets/FontManifest.json": "2d16a2d6944ddc4b14163c2f0bfffe91",
"assets/fonts/MaterialIcons-Regular.otf": "2ef8c7351f4745c7ec8c0a8117db8e23",
"assets/fonts/Times%2520New%2520Roman.ttf": "e2f6bf4ef7c6443cbb0ae33f1c1a9ccc",
"assets/lib/images/android.png": "7dc1b34c160c57eef7f19e7fde430ce0",
"assets/lib/images/Ani.json": "e186d5a45bcae79b012b9cdfe59998a2",
"assets/lib/images/c++.png": "e5ccee60ad47459471f5ec1eb08054dc",
"assets/lib/images/c.png": "5100ddc9286f2d212688aab5972573cb",
"assets/lib/images/ep.png": "f628e01e93467dfc1c21069ebf665f36",
"assets/lib/images/fire.png": "e0381390c3a64ca30c14f7c5811fc285",
"assets/lib/images/flutter.png": "a813b29c2ab0e6209e445c223f85e6d5",
"assets/lib/images/git.png": "1bf0c82bd52be8ec51aa03dadf2bc09b",
"assets/lib/images/imag2.jpg": "39d498873518db3cd7e4d8afe7eb1640",
"assets/lib/images/image1.png": "574f5d318313df59a7b2fee11ffa1f13",
"assets/lib/images/image12.png": "c7c64f48d112d32c37ee4b0434bd5a5f",
"assets/lib/images/image2.jpg": "920a08bcceddc5a8547ae51089ae7514",
"assets/lib/images/image3.png": "190409d80645951009b93141a2ea04ee",
"assets/lib/images/insta.png": "915e691dda3583cc4ba64567298da6f6",
"assets/lib/images/java.png": "a3c754084043c837f72c84204b0b595c",
"assets/lib/images/line.png": "4c7c44eea8cf6815ee82fe7dab8657e1",
"assets/lib/images/linkedin.png": "e303076fe73b8773622dfcc624c0bac3",
"assets/lib/images/rj.png": "f1bd16f6a063a4579d89bb6acc05dccb",
"assets/lib/images/sih.png": "7baeccfe107208980f25641a0e6b05c0",
"assets/lib/images/temp.png": "4de8d6c55e6b7279d3f1a97282733780",
"assets/lib/images/traffic.png": "9aa63e59d1ee115d25ff2bc602e54dfb",
"assets/lib/images/vs.png": "f4190136acc3870217e91b6fbea276aa",
"assets/NOTICES": "65621b8dc39ecfea26418b6d2be335a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7555adc653e5ef9710da6bc1dffa1526",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0eb774efdbea0da564bbe045bf3c33bf",
"/": "0eb774efdbea0da564bbe045bf3c33bf",
"main.dart.js": "da5258a75f542812c5e58a2c41193526",
"manifest.json": "c5d377551ec176cf4a1e09c170cd4e5c",
"version.json": "a54f822aa71cdf6ad7c781fd3df5e7f1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
