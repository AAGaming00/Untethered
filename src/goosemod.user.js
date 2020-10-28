// ==UserScript==
// @name         GooseMod Loader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  GooseMod is a tethered (temporary, only lasts until Discord closure), unmodifying (doesn't modify the client's files or code directly) modification / addition to the Discord client.
// @match        *://*.discord.com/*
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @connect      goosemod-api.netlify.app
// @connect      raw.githubusercontent.com
// @connect      *
// @require      https://raw.githubusercontent.com/AAGaming00/fetch-polyfill-userscript/main/fetch.js?bruh=stupid-cache
// @noframes
// ==/UserScript==

unsafeWindow.goosemod_noCSPFetch = self.GM_fetch

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
(async ()=>{
     await sleep(2000);
     const window = unsafeWindow
     GM.xmlHttpRequest({
             method : "GET",
             url : "https://raw.githubusercontent.com/AAGaming00/Injector/master/dist/index.js",
             onload : (e) => {
                 console.log(e)
                 unsafeWindow.eval(e.responseText);
             }
         });
})();
