"use strict";var precacheConfig=[["/index.html","51394eece99d00298a0a4cd89b8c989c"],["/static/css/main.53d26a62.css","a45f6518e034375843a994fce2a42111"],["/static/js/main.bd9f10a4.js","44277faf6c6e2c742c2f087029de3728"],["/static/media/1.24a9ccdd.jpg","24a9ccdd2b7f008d82b9a2e17f0f36b9"],["/static/media/10.82a35738.jpg","82a35738c12fabb7e0495138d7a68239"],["/static/media/11.af86718e.jpg","af86718ebf7e4100d67066004bdb0df6"],["/static/media/12.c5895611.jpg","c58956119430fa5aa912ee815b7b637f"],["/static/media/13.2f2c0663.jpg","2f2c0663c2f12a962bd827d4c87c674e"],["/static/media/2.a693cdc9.jpg","a693cdc94ce8b4c315ca66266af8c794"],["/static/media/3.d5717417.jpg","d57174174ae947448313a7af3cb1cb5d"],["/static/media/4.e639f0ae.jpg","e639f0ae306284e9f2e775f65f2e6a32"],["/static/media/5.2c8e7bff.jpg","2c8e7bff683a9ecee8d34b6c1c15a151"],["/static/media/6.a02a28c4.jpg","a02a28c4b25ce5f577be0698cec36167"],["/static/media/7.3f046ae4.jpg","3f046ae4e5000461e643ac0f9f81fa1c"],["/static/media/8.b538096d.jpg","b538096d444a4d1ae24e97ce173187b3"],["/static/media/9.f485f87a.jpg","f485f87a45e3c0640482fd736d7dbd5b"],["/static/media/Artboard_0-50.09a8d55b.gif","09a8d55b85675c78c339df9ea3a98efc"],["/static/media/Womby-Regular.7c595d40.ttf","7c595d400e1a54f8bf7f210bb9b99c19"],["/static/media/hackCWRU_Title.a9c12bfd.png","a9c12bfd47dbab4e0f47e32fb3c0d7f8"],["/static/media/thing.d5f96a13.png","d5f96a13050a15344f3f2834a563c2df"],["/static/media/thing2.25bb32ae.png","25bb32ae9b427bade7fd12445eb7ff05"],["/static/media/thing3.f466b6b7.png","f466b6b73151ce95bd31d8af9dd3f754"],["/static/media/track_civic.95eeae42.png","95eeae421bec395fb762b21f71511d8c"],["/static/media/track_fin1.ac8ea1e5.png","ac8ea1e5c2393bd4d621feef784a47f7"],["/static/media/track_maker.79d55261.png","79d5526154d1218e2b058c5b5b59447b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});