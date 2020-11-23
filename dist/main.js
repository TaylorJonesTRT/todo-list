(()=>{"use strict";var t={614:(t,e,r)=>{r.r(e),r.d(e,{NIL:()=>A,parse:()=>g,stringify:()=>l,v1:()=>v,v3:()=>U,v4:()=>E,v5:()=>P,validate:()=>s,version:()=>O});var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),i=new Uint8Array(16);function o(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,s=function(t){return"string"==typeof t&&a.test(t)};for(var c=[],d=0;d<256;++d)c.push((d+256).toString(16).substr(1));const l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!s(r))throw TypeError("Stringified UUID is invalid");return r};var h,u,p=0,f=0;const v=function(t,e,r){var n=e&&r||0,i=e||new Array(16),a=(t=t||{}).node||h,s=void 0!==t.clockseq?t.clockseq:u;if(null==a||null==s){var c=t.random||(t.rng||o)();null==a&&(a=h=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==s&&(s=u=16383&(c[6]<<8|c[7]))}var d=void 0!==t.msecs?t.msecs:Date.now(),v=void 0!==t.nsecs?t.nsecs:f+1,g=d-p+(v-f)/1e4;if(g<0&&void 0===t.clockseq&&(s=s+1&16383),(g<0||d>p)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=d,f=v,u=s;var m=(1e4*(268435455&(d+=122192928e5))+v)%4294967296;i[n++]=m>>>24&255,i[n++]=m>>>16&255,i[n++]=m>>>8&255,i[n++]=255&m;var y=d/4294967296*1e4&268435455;i[n++]=y>>>8&255,i[n++]=255&y,i[n++]=y>>>24&15|16,i[n++]=y>>>16&255,i[n++]=s>>>8|128,i[n++]=255&s;for(var b=0;b<6;++b)i[n+b]=a[b];return e||l(i)},g=function(t){if(!s(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};function m(t,e,r){function n(t,n,i,o){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof n&&(n=g(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+t.length);if(a.set(n),a.set(t,n.length),(a=r(a))[6]=15&a[6]|e,a[8]=63&a[8]|128,i){o=o||0;for(var s=0;s<16;++s)i[o+s]=a[s];return i}return l(a)}try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function y(t){return 14+(t+64>>>9<<4)+1}function b(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function C(t,e,r,n,i,o){return b((a=b(b(e,t),b(n,o)))<<(s=i)|a>>>32-s,r);var a,s}function j(t,e,r,n,i,o,a){return C(e&r|~e&n,t,e,i,o,a)}function D(t,e,r,n,i,o,a){return C(e&n|r&~n,t,e,i,o,a)}function w(t,e,r,n,i,o,a){return C(e^r^n,t,e,i,o,a)}function I(t,e,r,n,i,o,a){return C(r^(e|~n),t,e,i,o,a)}const U=m("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var r=0;r<e.length;++r)t[r]=e.charCodeAt(r)}return function(t){for(var e=[],r=32*t.length,n="0123456789abcdef",i=0;i<r;i+=8){var o=t[i>>5]>>>i%32&255,a=parseInt(n.charAt(o>>>4&15)+n.charAt(15&o),16);e.push(a)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[y(e)-1]=e;for(var r=1732584193,n=-271733879,i=-1732584194,o=271733878,a=0;a<t.length;a+=16){var s=r,c=n,d=i,l=o;r=j(r,n,i,o,t[a],7,-680876936),o=j(o,r,n,i,t[a+1],12,-389564586),i=j(i,o,r,n,t[a+2],17,606105819),n=j(n,i,o,r,t[a+3],22,-1044525330),r=j(r,n,i,o,t[a+4],7,-176418897),o=j(o,r,n,i,t[a+5],12,1200080426),i=j(i,o,r,n,t[a+6],17,-1473231341),n=j(n,i,o,r,t[a+7],22,-45705983),r=j(r,n,i,o,t[a+8],7,1770035416),o=j(o,r,n,i,t[a+9],12,-1958414417),i=j(i,o,r,n,t[a+10],17,-42063),n=j(n,i,o,r,t[a+11],22,-1990404162),r=j(r,n,i,o,t[a+12],7,1804603682),o=j(o,r,n,i,t[a+13],12,-40341101),i=j(i,o,r,n,t[a+14],17,-1502002290),r=D(r,n=j(n,i,o,r,t[a+15],22,1236535329),i,o,t[a+1],5,-165796510),o=D(o,r,n,i,t[a+6],9,-1069501632),i=D(i,o,r,n,t[a+11],14,643717713),n=D(n,i,o,r,t[a],20,-373897302),r=D(r,n,i,o,t[a+5],5,-701558691),o=D(o,r,n,i,t[a+10],9,38016083),i=D(i,o,r,n,t[a+15],14,-660478335),n=D(n,i,o,r,t[a+4],20,-405537848),r=D(r,n,i,o,t[a+9],5,568446438),o=D(o,r,n,i,t[a+14],9,-1019803690),i=D(i,o,r,n,t[a+3],14,-187363961),n=D(n,i,o,r,t[a+8],20,1163531501),r=D(r,n,i,o,t[a+13],5,-1444681467),o=D(o,r,n,i,t[a+2],9,-51403784),i=D(i,o,r,n,t[a+7],14,1735328473),r=w(r,n=D(n,i,o,r,t[a+12],20,-1926607734),i,o,t[a+5],4,-378558),o=w(o,r,n,i,t[a+8],11,-2022574463),i=w(i,o,r,n,t[a+11],16,1839030562),n=w(n,i,o,r,t[a+14],23,-35309556),r=w(r,n,i,o,t[a+1],4,-1530992060),o=w(o,r,n,i,t[a+4],11,1272893353),i=w(i,o,r,n,t[a+7],16,-155497632),n=w(n,i,o,r,t[a+10],23,-1094730640),r=w(r,n,i,o,t[a+13],4,681279174),o=w(o,r,n,i,t[a],11,-358537222),i=w(i,o,r,n,t[a+3],16,-722521979),n=w(n,i,o,r,t[a+6],23,76029189),r=w(r,n,i,o,t[a+9],4,-640364487),o=w(o,r,n,i,t[a+12],11,-421815835),i=w(i,o,r,n,t[a+15],16,530742520),r=I(r,n=w(n,i,o,r,t[a+2],23,-995338651),i,o,t[a],6,-198630844),o=I(o,r,n,i,t[a+7],10,1126891415),i=I(i,o,r,n,t[a+14],15,-1416354905),n=I(n,i,o,r,t[a+5],21,-57434055),r=I(r,n,i,o,t[a+12],6,1700485571),o=I(o,r,n,i,t[a+3],10,-1894986606),i=I(i,o,r,n,t[a+10],15,-1051523),n=I(n,i,o,r,t[a+1],21,-2054922799),r=I(r,n,i,o,t[a+8],6,1873313359),o=I(o,r,n,i,t[a+15],10,-30611744),i=I(i,o,r,n,t[a+6],15,-1560198380),n=I(n,i,o,r,t[a+13],21,1309151649),r=I(r,n,i,o,t[a+4],6,-145523070),o=I(o,r,n,i,t[a+11],10,-1120210379),i=I(i,o,r,n,t[a+2],15,718787259),n=I(n,i,o,r,t[a+9],21,-343485551),r=b(r,s),n=b(n,c),i=b(i,d),o=b(o,l)}return[r,n,i,o]}(function(t){if(0===t.length)return[];for(var e=8*t.length,r=new Uint32Array(y(e)),n=0;n<e;n+=8)r[n>>5]|=(255&t[n/8])<<n%32;return r}(t),8*t.length))})),E=function(t,e,r){var n=(t=t||{}).random||(t.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=n[i];return e}return l(n)};function L(t,e,r,n){switch(t){case 0:return e&r^~e&n;case 1:return e^r^n;case 2:return e&r^e&n^r&n;case 3:return e^r^n}}function S(t,e){return t<<e|t>>>32-e}const P=m("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var i=0;i<n.length;++i)t.push(n.charCodeAt(i))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var o=t.length/4+2,a=Math.ceil(o/16),s=new Array(a),c=0;c<a;++c){for(var d=new Uint32Array(16),l=0;l<16;++l)d[l]=t[64*c+4*l]<<24|t[64*c+4*l+1]<<16|t[64*c+4*l+2]<<8|t[64*c+4*l+3];s[c]=d}s[a-1][14]=8*(t.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(t.length-1)&4294967295;for(var h=0;h<a;++h){for(var u=new Uint32Array(80),p=0;p<16;++p)u[p]=s[h][p];for(var f=16;f<80;++f)u[f]=S(u[f-3]^u[f-8]^u[f-14]^u[f-16],1);for(var v=r[0],g=r[1],m=r[2],y=r[3],b=r[4],C=0;C<80;++C){var j=Math.floor(C/20),D=S(v,5)+L(j,g,m,y)+b+e[j]+u[C]>>>0;b=y,y=m,m=S(g,30)>>>0,g=v,v=D}r[0]=r[0]+v>>>0,r[1]=r[1]+g>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+y>>>0,r[4]=r[4]+b>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]})),A="00000000-0000-0000-0000-000000000000",O=function(t){if(!s(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}},e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{v4:t}=r(614);class e{constructor(){this.appDiv=document.getElementById("app"),this.containerDiv=document.createElement("div"),this.sidebarDiv=document.createElement("div"),this.logoDiv=document.createElement("div"),this.logoImage=document.createElement("i"),this.logoHR=document.createElement("hr"),this.sidebarContainerDiv=document.createElement("div"),this.favoritesUL=document.createElement("ul"),this.sidebarHR=document.createElement("hr"),this.userProjectsUl=document.createElement("ul"),this.addProjectBtn=document.createElement("BUTTON"),this.addProjectIco=document.createElement("i"),this.projectBtnSpan=document.createElement("span"),this.containerDiv.id="container",this.sidebarDiv.id="sidebar",this.logoDiv.classList.add("logo"),this.logoImage.classList.add("logo-icon","fas","fa-th-list","fa-2x"),this.sidebarContainerDiv.id="sidebar-container",this.favoritesUL.classList.add("favorites"),this.sidebarHR.classList.add("sidebar-container-hr"),this.userProjectsUl.classList.add("user-projects"),this.addProjectBtn.classList.add("add-project-btn"),this.addProjectIco.classList.add("fas","fa-plus","project-btn"),this.projectBtnSpan.classList.add("add-task-text"),this.appDiv.appendChild(this.containerDiv),this.containerDiv.appendChild(this.sidebarDiv),this.sidebarDiv.appendChild(this.logoDiv),this.logoDiv.appendChild(this.logoImage),this.logoDiv.appendChild(this.logoHR),this.sidebarDiv.appendChild(this.sidebarContainerDiv),this.sidebarContainerDiv.appendChild(this.favoritesUL),this.sidebarContainerDiv.appendChild(this.sidebarHR),this.sidebarContainerDiv.appendChild(this.userProjectsUl),this.sidebarContainerDiv.appendChild(this.addProjectBtn),this.addProjectBtn.appendChild(this.addProjectIco),this.addProjectBtn.appendChild(this.projectBtnSpan),this.projectBtnSpan.innerText="Add Project",this.projCont=JSON.parse(localStorage.getItem("projects")),this.renderFavorites(this.projCont),this.addProjectBtn.addEventListener("click",(function(){let e=new class{constructor(){this.projects=JSON.parse(localStorage.getItem("projects"))||[]}createProject(e){const r=new class{constructor(e,r=[]){this.id=t,this.title=e,this.todos=r}}(e),i=new n;this.projects.push(r),localStorage.setItem("projects",JSON.stringify(this.projects)),i.refreshDOM()}},r=prompt("Project Title: ");e.createProject(r)}))}refreshDOM(){this.clearDOM(),new e}clearDOM(){const t=document.getElementById("app");for(;t.firstChild;)t.removeChild(t.lastChild)}pageRender(){let t=JSON.parse(localStorage.getItem("projects"));this.clearDOM(),this.renderFavorites(t)}renderFavorites(t){if(t)for(let e=0;e<t.length;e++)this.favoritesLi=document.createElement("li"),this.favoritesLi.classList.add("project"),this.favoritesLi.textContent=t[e].title,this.favoritesUL.appendChild(this.favoritesLi)}}const n=e;window.displayController=new n})()})();