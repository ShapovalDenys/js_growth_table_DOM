parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".container"),t=document.querySelector("tbody"),r=e.querySelector(".append-row"),n=e.querySelector(".remove-row"),l=e.querySelector(".append-column"),c=e.querySelector(".remove-column");function o(e){var o=t.querySelectorAll("tr");if(e.target.closest("button")){switch(e.target){case r:for(var d=document.createElement("tr"),u=t.lastElementChild.querySelectorAll("td").length,i=0;i<u;i++)d.insertAdjacentElement("beforeend",document.createElement("td"));t.insertAdjacentElement("beforeend",d);break;case n:t.lastElementChild.remove();break;case l:var m=document.createElement("td");o.forEach(function(e){return e.append(m.cloneNode())});break;case c:o.forEach(function(e){return e.lastElementChild.remove()})}a()}}function a(){var e=t.querySelectorAll("tr").length,o=t.firstElementChild.querySelectorAll("td").length;r.disabled=e>=10,n.disabled=e<=2,l.disabled=o>=10,c.disabled=o<=2}e.addEventListener("click",function(e){return o(e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4ee21ed3.js.map