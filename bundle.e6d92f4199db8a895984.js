(()=>{var t={335:(t,r,e)=>{var n={"./at_at.svg":403,"./c3po.svg":166,"./darth_vader.svg":477,"./death_star.svg":118,"./falcon.svg":745,"./r2d2.svg":568,"./stormtrooper.svg":822,"./tie_ln.svg":350,"./yoda.svg":559};function o(t){var r=i(t);return e(r)}function i(t){if(!e.o(n,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=335},403:(t,r,e)=>{"use strict";t.exports=e.p+"0379613a4269155f45b3.svg"},166:(t,r,e)=>{"use strict";t.exports=e.p+"92e4eecf1c83293e3395.svg"},477:(t,r,e)=>{"use strict";t.exports=e.p+"9ae79499243776a4de6e.svg"},118:(t,r,e)=>{"use strict";t.exports=e.p+"3392ebef20e51148368e.svg"},745:(t,r,e)=>{"use strict";t.exports=e.p+"b33cd68d7fb870c59309.svg"},568:(t,r,e)=>{"use strict";t.exports=e.p+"a97a2e9fa184dcab972b.svg"},822:(t,r,e)=>{"use strict";t.exports=e.p+"61e5b40f641dff097d3f.svg"},350:(t,r,e)=>{"use strict";t.exports=e.p+"7d600c80a7f5f31bc337.svg"},559:(t,r,e)=>{"use strict";t.exports=e.p+"4c0ad8f5f10199effb77.svg"}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(r,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,e){if("object"!==t(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n={},o=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.random();!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r,n[r]?this.img=n[r].cloneNode():(this.img=new Image,this.img.src=e(335)("./".concat(r,".svg")),n[r]=this.img)}var o,i;return o=t,i=[{key:"preload",value:function(){t.symbols.forEach((function(r){return new t(r)}))}},{key:"symbols",get:function(){return["at_at","c3po","darth_vader","death_star","falcon","r2d2","stormtrooper","tie_ln","yoda"]}},{key:"random",value:function(){return this.symbols[Math.floor(Math.random()*this.symbols.length)]}}],null&&r(o.prototype,null),i&&r(o,i),Object.defineProperty(o,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var s=function(){function t(r,e,n){var i=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.reelContainer=r,this.idx=e,this.symbolContainer=document.createElement("div"),this.symbolContainer.classList.add("icons"),this.reelContainer.appendChild(this.symbolContainer),this.animation=this.symbolContainer.animate([{top:0,filter:"blur(0)"},{filter:"blur(2px)",offset:.5},{top:"calc((".concat(10*Math.floor(this.factor)," / 3) * -100% - (").concat(10*Math.floor(this.factor)," * 3px))"),filter:"blur(0)"}],{duration:1e3*this.factor,easing:"ease-in-out"}),this.animation.cancel(),n.forEach((function(t){return i.symbolContainer.appendChild(new o(t).img)}))}var r,e;return r=t,(e=[{key:"factor",get:function(){return 1+Math.pow(this.idx/2,2)}},{key:"renderSymbols",value:function(t){for(var r=document.createDocumentFragment(),e=3;e<3+10*Math.floor(this.factor);e++){var n=new o(e>=10*Math.floor(this.factor)-2?t[e-10*Math.floor(this.factor)]:void 0);r.appendChild(n.img)}this.symbolContainer.appendChild(r)}},{key:"spin",value:function(){var t=this,r=new Promise((function(r){return t.animation.onfinish=r})),e=new Promise((function(r){return setTimeout(r,1e3*t.factor)}));return this.animation.cancel(),this.animation.play(),Promise.race([r,e]).then((function(){"finished"!==t.animation.playState&&t.animation.finish();for(var r=t.symbolContainer.children.length-3,e=0;e<r;e++)t.symbolContainer.firstChild.remove()}))}}])&&a(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==c(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var u=function(){function t(r){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),o.preload(),this.currentSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.nextSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.container=r,this.reels=Array.from(this.container.getElementsByClassName("reel")).map((function(t,r){return new s(t,r,e.currentSymbols[r])})),this.spinButton=document.getElementById("spin"),this.spinButton.addEventListener("click",(function(){return e.spin()})),this.autoPlayCheckbox=document.getElementById("autoplay"),n.inverted&&this.container.classList.add("inverted"),this.config=n}var r,e;return r=t,(e=[{key:"spin",value:function(){var t=this;return this.currentSymbols=this.nextSymbols,this.nextSymbols=[[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()]],this.onSpinStart(this.nextSymbols),Promise.all(this.reels.map((function(r){return r.renderSymbols(t.nextSymbols[r.idx]),r.spin()}))).then((function(){return t.onSpinEnd(t.nextSymbols)}))}},{key:"onSpinStart",value:function(t){var r,e;this.spinButton.disabled=!0,null===(r=(e=this.config).onSpinStart)||void 0===r||r.call(e,t)}},{key:"onSpinEnd",value:function(t){var r,e,n=this;if(this.spinButton.disabled=!1,null===(r=(e=this.config).onSpinEnd)||void 0===r||r.call(e,t),this.autoPlayCheckbox.checked)return window.setTimeout((function(){return n.spin()}),200)}}])&&l(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}(),f={inverted:!1,onSpinStart:function(t){console.log("onSpinStart",t)},onSpinEnd:function(t){console.log("onSpinEnd",t)}};new u(document.getElementById("slot"),f)})()})();