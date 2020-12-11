(()=>{"use strict";var t={614:(t,e,i)=>{i.r(e),i.d(e,{NIL:()=>B,parse:()=>f,stringify:()=>h,v1:()=>u,v3:()=>S,v4:()=>L,v5:()=>P,validate:()=>a,version:()=>T});var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function s(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(t){return"string"==typeof t&&o.test(t)};for(var d=[],c=0;c<256;++c)d.push((c+256).toString(16).substr(1));const h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]).toLowerCase();if(!a(i))throw TypeError("Stringified UUID is invalid");return i};var l,p,m=0,v=0;const u=function(t,e,i){var n=e&&i||0,r=e||new Array(16),o=(t=t||{}).node||l,a=void 0!==t.clockseq?t.clockseq:p;if(null==o||null==a){var d=t.random||(t.rng||s)();null==o&&(o=l=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==a&&(a=p=16383&(d[6]<<8|d[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),u=void 0!==t.nsecs?t.nsecs:v+1,f=c-m+(u-v)/1e4;if(f<0&&void 0===t.clockseq&&(a=a+1&16383),(f<0||c>m)&&void 0===t.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");m=c,v=u,p=a;var D=(1e4*(268435455&(c+=122192928e5))+u)%4294967296;r[n++]=D>>>24&255,r[n++]=D>>>16&255,r[n++]=D>>>8&255,r[n++]=255&D;var C=c/4294967296*1e4&268435455;r[n++]=C>>>8&255,r[n++]=255&C,r[n++]=C>>>24&15|16,r[n++]=C>>>16&255,r[n++]=a>>>8|128,r[n++]=255&a;for(var g=0;g<6;++g)r[n+g]=o[g];return e||h(r)},f=function(t){if(!a(t))throw TypeError("Invalid UUID");var e,i=new Uint8Array(16);return i[0]=(e=parseInt(t.slice(0,8),16))>>>24,i[1]=e>>>16&255,i[2]=e>>>8&255,i[3]=255&e,i[4]=(e=parseInt(t.slice(9,13),16))>>>8,i[5]=255&e,i[6]=(e=parseInt(t.slice(14,18),16))>>>8,i[7]=255&e,i[8]=(e=parseInt(t.slice(19,23),16))>>>8,i[9]=255&e,i[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,i[11]=e/4294967296&255,i[12]=e>>>24&255,i[13]=e>>>16&255,i[14]=e>>>8&255,i[15]=255&e,i};function D(t,e,i){function n(t,n,r,s){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof n&&(n=f(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+t.length);if(o.set(n),o.set(t,n.length),(o=i(o))[6]=15&o[6]|e,o[8]=63&o[8]|128,r){s=s||0;for(var a=0;a<16;++a)r[s+a]=o[a];return r}return h(o)}try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function C(t){return 14+(t+64>>>9<<4)+1}function g(t,e){var i=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(i>>16)<<16|65535&i}function y(t,e,i,n,r,s){return g((o=g(g(e,t),g(n,s)))<<(a=r)|o>>>32-a,i);var o,a}function I(t,e,i,n,r,s,o){return y(e&i|~e&n,t,e,r,s,o)}function E(t,e,i,n,r,s,o){return y(e&n|i&~n,t,e,r,s,o)}function j(t,e,i,n,r,s,o){return y(e^i^n,t,e,r,s,o)}function b(t,e,i,n,r,s,o){return y(i^(e|~n),t,e,r,s,o)}const S=D("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(t){for(var e=[],i=32*t.length,n="0123456789abcdef",r=0;r<i;r+=8){var s=t[r>>5]>>>r%32&255,o=parseInt(n.charAt(s>>>4&15)+n.charAt(15&s),16);e.push(o)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[C(e)-1]=e;for(var i=1732584193,n=-271733879,r=-1732584194,s=271733878,o=0;o<t.length;o+=16){var a=i,d=n,c=r,h=s;i=I(i,n,r,s,t[o],7,-680876936),s=I(s,i,n,r,t[o+1],12,-389564586),r=I(r,s,i,n,t[o+2],17,606105819),n=I(n,r,s,i,t[o+3],22,-1044525330),i=I(i,n,r,s,t[o+4],7,-176418897),s=I(s,i,n,r,t[o+5],12,1200080426),r=I(r,s,i,n,t[o+6],17,-1473231341),n=I(n,r,s,i,t[o+7],22,-45705983),i=I(i,n,r,s,t[o+8],7,1770035416),s=I(s,i,n,r,t[o+9],12,-1958414417),r=I(r,s,i,n,t[o+10],17,-42063),n=I(n,r,s,i,t[o+11],22,-1990404162),i=I(i,n,r,s,t[o+12],7,1804603682),s=I(s,i,n,r,t[o+13],12,-40341101),r=I(r,s,i,n,t[o+14],17,-1502002290),i=E(i,n=I(n,r,s,i,t[o+15],22,1236535329),r,s,t[o+1],5,-165796510),s=E(s,i,n,r,t[o+6],9,-1069501632),r=E(r,s,i,n,t[o+11],14,643717713),n=E(n,r,s,i,t[o],20,-373897302),i=E(i,n,r,s,t[o+5],5,-701558691),s=E(s,i,n,r,t[o+10],9,38016083),r=E(r,s,i,n,t[o+15],14,-660478335),n=E(n,r,s,i,t[o+4],20,-405537848),i=E(i,n,r,s,t[o+9],5,568446438),s=E(s,i,n,r,t[o+14],9,-1019803690),r=E(r,s,i,n,t[o+3],14,-187363961),n=E(n,r,s,i,t[o+8],20,1163531501),i=E(i,n,r,s,t[o+13],5,-1444681467),s=E(s,i,n,r,t[o+2],9,-51403784),r=E(r,s,i,n,t[o+7],14,1735328473),i=j(i,n=E(n,r,s,i,t[o+12],20,-1926607734),r,s,t[o+5],4,-378558),s=j(s,i,n,r,t[o+8],11,-2022574463),r=j(r,s,i,n,t[o+11],16,1839030562),n=j(n,r,s,i,t[o+14],23,-35309556),i=j(i,n,r,s,t[o+1],4,-1530992060),s=j(s,i,n,r,t[o+4],11,1272893353),r=j(r,s,i,n,t[o+7],16,-155497632),n=j(n,r,s,i,t[o+10],23,-1094730640),i=j(i,n,r,s,t[o+13],4,681279174),s=j(s,i,n,r,t[o],11,-358537222),r=j(r,s,i,n,t[o+3],16,-722521979),n=j(n,r,s,i,t[o+6],23,76029189),i=j(i,n,r,s,t[o+9],4,-640364487),s=j(s,i,n,r,t[o+12],11,-421815835),r=j(r,s,i,n,t[o+15],16,530742520),i=b(i,n=j(n,r,s,i,t[o+2],23,-995338651),r,s,t[o],6,-198630844),s=b(s,i,n,r,t[o+7],10,1126891415),r=b(r,s,i,n,t[o+14],15,-1416354905),n=b(n,r,s,i,t[o+5],21,-57434055),i=b(i,n,r,s,t[o+12],6,1700485571),s=b(s,i,n,r,t[o+3],10,-1894986606),r=b(r,s,i,n,t[o+10],15,-1051523),n=b(n,r,s,i,t[o+1],21,-2054922799),i=b(i,n,r,s,t[o+8],6,1873313359),s=b(s,i,n,r,t[o+15],10,-30611744),r=b(r,s,i,n,t[o+6],15,-1560198380),n=b(n,r,s,i,t[o+13],21,1309151649),i=b(i,n,r,s,t[o+4],6,-145523070),s=b(s,i,n,r,t[o+11],10,-1120210379),r=b(r,s,i,n,t[o+2],15,718787259),n=b(n,r,s,i,t[o+9],21,-343485551),i=g(i,a),n=g(n,d),r=g(r,c),s=g(s,h)}return[i,n,r,s]}(function(t){if(0===t.length)return[];for(var e=8*t.length,i=new Uint32Array(C(e)),n=0;n<e;n+=8)i[n>>5]|=(255&t[n/8])<<n%32;return i}(t),8*t.length))})),L=function(t,e,i){var n=(t=t||{}).random||(t.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){i=i||0;for(var r=0;r<16;++r)e[i+r]=n[r];return e}return h(n)};function w(t,e,i,n){switch(t){case 0:return e&i^~e&n;case 1:return e^i^n;case 2:return e&i^e&n^i&n;case 3:return e^i^n}}function O(t,e){return t<<e|t>>>32-e}const P=D("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var r=0;r<n.length;++r)t.push(n.charCodeAt(r))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var s=t.length/4+2,o=Math.ceil(s/16),a=new Array(o),d=0;d<o;++d){for(var c=new Uint32Array(16),h=0;h<16;++h)c[h]=t[64*d+4*h]<<24|t[64*d+4*h+1]<<16|t[64*d+4*h+2]<<8|t[64*d+4*h+3];a[d]=c}a[o-1][14]=8*(t.length-1)/Math.pow(2,32),a[o-1][14]=Math.floor(a[o-1][14]),a[o-1][15]=8*(t.length-1)&4294967295;for(var l=0;l<o;++l){for(var p=new Uint32Array(80),m=0;m<16;++m)p[m]=a[l][m];for(var v=16;v<80;++v)p[v]=O(p[v-3]^p[v-8]^p[v-14]^p[v-16],1);for(var u=i[0],f=i[1],D=i[2],C=i[3],g=i[4],y=0;y<80;++y){var I=Math.floor(y/20),E=O(u,5)+w(I,f,D,C)+g+e[I]+p[y]>>>0;g=C,C=D,D=O(f,30)>>>0,f=u,u=E}i[0]=i[0]+u>>>0,i[1]=i[1]+f>>>0,i[2]=i[2]+D>>>0,i[3]=i[3]+C>>>0,i[4]=i[4]+g>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]})),B="00000000-0000-0000-0000-000000000000",T=function(t){if(!a(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}},e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{v4:t}=i(614),e=class{constructor(){this.projects=JSON.parse(localStorage.getItem("projects"))||[]}createProject(e){const i=new class{constructor(e,i=[]){this.id=t(),this.title=e,this.todos=i}grabId(){return this.id}}(e);this.projects.push(i),localStorage.setItem("projects",JSON.stringify(this.projects))}addItem(t,e,i,r,s,o){let a=new class{constructor(t,e,i,n,r=!1){this.title=t,this.dueDate=e,this.description=i,this.priority=n,this.completionStatus=r}}(t,e,i,r,s);this.projects.find((t=>t.id===o)).todos.push(a),localStorage.setItem("projects",JSON.stringify(this.projects)),new n}},n=class{constructor(){this.appDiv=document.getElementById("app"),this.containerDiv=document.createElement("div"),this.containerDiv.id="container",this.contentDiv=document.createElement("div"),this.contentDiv.id="content",this.appDiv.appendChild(this.containerDiv),this.createSidebar()}createSidebar(){this.sidebarDiv=document.createElement("div"),this.logoDiv=document.createElement("div"),this.logoImage=document.createElement("i"),this.logoHR=document.createElement("hr"),this.sidebarContainerDiv=document.createElement("div"),this.sidebarHR=document.createElement("hr"),this.userProjectsUl=document.createElement("ul"),this.addProjectBtn=document.createElement("BUTTON"),this.addProjectIco=document.createElement("i"),this.projectBtnSpan=document.createElement("span"),this.sidebarDiv.id="sidebar",this.logoDiv.classList.add("logo"),this.logoImage.classList.add("logo-icon","fas","fa-th-list","fa-2x"),this.sidebarContainerDiv.id="sidebar-container",this.sidebarHR.classList.add("sidebar-container-hr"),this.userProjectsUl.classList.add("user-projects"),this.addProjectBtn.classList.add("add-project-btn"),this.addProjectIco.classList.add("fas","fa-plus","project-btn"),this.projectBtnSpan.classList.add("add-task-text"),this.containerDiv.appendChild(this.sidebarDiv),this.sidebarDiv.appendChild(this.logoDiv),this.logoDiv.appendChild(this.logoImage),this.logoDiv.appendChild(this.logoHR),this.sidebarDiv.appendChild(this.sidebarContainerDiv),this.sidebarContainerDiv.appendChild(this.userProjectsUl),this.sidebarContainerDiv.appendChild(this.addProjectBtn),this.addProjectBtn.appendChild(this.addProjectIco),this.addProjectBtn.appendChild(this.projectBtnSpan),this.projectBtnSpan.innerText="Add Project";let t=JSON.parse(localStorage.getItem("projects"));this.renderProjectList(t),this.addProjectBtn.addEventListener("click",(()=>{let t=new e,i=prompt("Project Title: ");t.createProject(i),this.refreshDOM("sidebar")})),document.querySelectorAll(".project").forEach((t=>{t.addEventListener("click",(t=>{console.log(t.target.dataset.id),this.renderProject(t.target.dataset.id)}))}))}renderProjectList(t){if(t)for(let e=0;e<t.length;e++)this.projectLi=document.createElement("li"),this.projectLi.classList.add("project"),this.projectLi.setAttribute("data-id",t[e].id),this.projectLi.textContent=t[e].title,this.userProjectsUl.appendChild(this.projectLi)}renderProject(t){let e=JSON.parse(localStorage.getItem("projects"));e.find((e=>e.id===t)).todos,this.clearChildNodes("content"),this.contentContainerDiv=document.createElement("div"),this.contentHeaderDiv=document.createElement("div"),this.currentTitleSpan=document.createElement("span"),this.projectSettingsIcon=document.createElement("i"),this.contentBodyDiv=document.createElement("div"),this.itemDiv=document.createElement("div"),this.addItemBtnDiv=document.createElement("div"),this.addItemIco=document.createElement("i"),this.addItemSpan=document.createElement("span"),this.contentContainerDiv.id="content-container",this.contentHeaderDiv.classList.add("content-header"),this.currentTitleSpan.classList.add("current-project-title"),this.projectSettingsIcon.classList.add("fas","fa-ellipsis-h","fa-lg","settings-icon"),this.contentBodyDiv.classList.add("content-body"),this.itemDiv.classList.add("items"),this.addItemBtnDiv.classList.add("add-item-btn"),this.addItemIco.classList.add("fas","fa-plus","item-btn"),this.addItemSpan.classList.add("add-item-text"),this.currentTitleSpan.innerText=e.find((e=>e.id===t)).title,this.currentTitleSpan.setAttribute("data-proj-id",t),this.containerDiv.appendChild(this.contentDiv),this.contentDiv.appendChild(this.contentContainerDiv),this.contentContainerDiv.appendChild(this.contentHeaderDiv),this.contentHeaderDiv.appendChild(this.currentTitleSpan),this.contentHeaderDiv.appendChild(this.projectSettingsIcon),this.contentContainerDiv.appendChild(this.contentBodyDiv),this.addItemBtnDiv.addEventListener("click",(()=>{this.addItemEvent(t)})),this.renderItems(t),this.contentBodyDiv.appendChild(this.addItemBtnDiv),this.addItemBtnDiv.appendChild(this.addItemIco),this.addItemSpan.innerText="Add Item",this.addItemBtnDiv.appendChild(this.addItemSpan)}renderItems(t){let e=JSON.parse(localStorage.getItem("projects")).find((e=>e.id===t)).todos;e.length>0&&e.forEach((t=>{this.itemContainerDiv=document.createElement("div"),this.itemContainerDiv.classList.add("items-container"),this.item=document.createElement("div"),this.item.classList.add("item"),this.itemOptionsDiv=document.createElement("div"),this.itemOptionsDiv.classList.add("item-options"),this.editIconOnHover=document.createElement("i"),this.editIconOnHover.classList.add("far","fa-edit"),this.itemSettingsOnHover=document.createElement("i"),this.itemSettingsOnHover.classList.add("fas","fa-ellipsis-h"),this.itemTitleDiv=document.createElement("div"),this.itemTitleDiv.classList.add("item-title"),this.itemTitleDiv.innerText=t.title,this.itemRowBr=document.createElement("br"),this.dueDateDiv=document.createElement("div"),this.dueDateDiv.classList.add("due-date"),this.dueDateDiv.innerText=t.dueDate,this.itemHr=document.createElement("hr"),this.contentBodyDiv.appendChild(this.itemContainerDiv),this.itemContainerDiv.appendChild(this.item),this.item.appendChild(this.itemOptionsDiv),this.itemOptionsDiv.appendChild(this.editIconOnHover),this.itemOptionsDiv.appendChild(this.itemSettingsOnHover),this.item.appendChild(this.itemTitleDiv),this.item.appendChild(this.itemRowBr),this.item.appendChild(this.dueDateDiv),this.itemContainerDiv.appendChild(this.itemHr)}))}addItemEvent(t){let i=new e,n=prompt("Item Title: "),r=prompt("Due Date (dd-MMM): "),s=prompt("Desdcription: "),o=prompt("Priority (High, Medium, Low): "),a=prompt("Completed? (yes or no): ");i.addItem(n,r,s,o,a,t),this.clearChildNodes("content"),this.renderProject(t)}clearChildNodes(t){if("content"===t){for(;this.contentDiv.firstElementChild;)this.contentDiv.removeChild(this.contentDiv.firstElementChild);"content"===this.containerDiv.lastElementChild.id&&this.containerDiv.removeChild(this.contentDiv)}else if("items"===t){for(;this.itemOptionsDiv.firstElementChild;)this.itemOptionsDiv.removeChild(this.itemOptionsDiv.firstElementChild);for(;this.item.firstElementChild;)this.item.removeChild(this.item.firstElementChild);for(;this.itemContainerDiv.firstElementChild;)this.itemContainerDiv.removeChild(this.itemContainerDiv.firstElementChild)}else if("sidebar"===t)for(;this.sidebarDiv.firstElementChild;)this.sidebarDiv.removeChild(this.sidebarDiv.firstElementChild);else if("all"===t)for(;this.containerDiv.firstElementChild;)this.containerDiv.removeChild(this.containerDiv.firstElementChild)}};window.displayController=new n})()})();