if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const f=e=>n(e,s),d={module:{uri:s},exports:o,require:f};i[s]=Promise.all(c.map((e=>d[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"31b6fcc6da3675f9a2e7b9554642db02"},{url:"assets/index-5kUOX4mc.css",revision:null},{url:"assets/index-BdSR7NS4.js",revision:null},{url:"egg.png",revision:"393d5eb3a17d8432883ca17467c09e92"},{url:"favicon.ico",revision:"f76f9ffe3a154e955b6a0852553f0e15"},{url:"favicon.svg",revision:"c23dbc3fa77f506cdd8118e146fe5f3b"},{url:"index.html",revision:"d65848f0c198b5c45b1f015fdc81a16e"},{url:"maskable-icon-512x512.png",revision:"ca17c89188b046326f6ad549a23146b5"},{url:"pwa-192x192.png",revision:"a01ecdf5d06b75da475f8bc0eec88bdb"},{url:"pwa-512x512.png",revision:"c67996a5fa6f3cb386ab61e29772fc82"},{url:"pwa-64x64.png",revision:"c048b685e0c21c9b27aa2c4594b8383b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"4149ca0f53b04c4b085113d1e7090ca4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
