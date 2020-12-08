(()=>{"use strict";var t={614:(t,e,i)=>{i.r(e),i.d(e,{NIL:()=>H,parse:()=>f,stringify:()=>h,v1:()=>u,v3:()=>E,v4:()=>B,v5:()=>w,validate:()=>a,version:()=>U});var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),n=new Uint8Array(16);function s(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(t){return"string"==typeof t&&o.test(t)};for(var d=[],c=0;c<256;++c)d.push((c+256).toString(16).substr(1));const h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]).toLowerCase();if(!a(i))throw TypeError("Stringified UUID is invalid");return i};var l,p,v=0,m=0;const u=function(t,e,i){var r=e&&i||0,n=e||new Array(16),o=(t=t||{}).node||l,a=void 0!==t.clockseq?t.clockseq:p;if(null==o||null==a){var d=t.random||(t.rng||s)();null==o&&(o=l=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==a&&(a=p=16383&(d[6]<<8|d[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),u=void 0!==t.nsecs?t.nsecs:m+1,f=c-v+(u-m)/1e4;if(f<0&&void 0===t.clockseq&&(a=a+1&16383),(f<0||c>v)&&void 0===t.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=c,m=u,p=a;var D=(1e4*(268435455&(c+=122192928e5))+u)%4294967296;n[r++]=D>>>24&255,n[r++]=D>>>16&255,n[r++]=D>>>8&255,n[r++]=255&D;var C=c/4294967296*1e4&268435455;n[r++]=C>>>8&255,n[r++]=255&C,n[r++]=C>>>24&15|16,n[r++]=C>>>16&255,n[r++]=a>>>8|128,n[r++]=255&a;for(var g=0;g<6;++g)n[r+g]=o[g];return e||h(n)},f=function(t){if(!a(t))throw TypeError("Invalid UUID");var e,i=new Uint8Array(16);return i[0]=(e=parseInt(t.slice(0,8),16))>>>24,i[1]=e>>>16&255,i[2]=e>>>8&255,i[3]=255&e,i[4]=(e=parseInt(t.slice(9,13),16))>>>8,i[5]=255&e,i[6]=(e=parseInt(t.slice(14,18),16))>>>8,i[7]=255&e,i[8]=(e=parseInt(t.slice(19,23),16))>>>8,i[9]=255&e,i[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,i[11]=e/4294967296&255,i[12]=e>>>24&255,i[13]=e>>>16&255,i[14]=e>>>8&255,i[15]=255&e,i};function D(t,e,i){function r(t,r,n,s){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof r&&(r=f(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+t.length);if(o.set(r),o.set(t,r.length),(o=i(o))[6]=15&o[6]|e,o[8]=63&o[8]|128,n){s=s||0;for(var a=0;a<16;++a)n[s+a]=o[a];return n}return h(o)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function C(t){return 14+(t+64>>>9<<4)+1}function g(t,e){var i=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(i>>16)<<16|65535&i}function y(t,e,i,r,n,s){return g((o=g(g(e,t),g(r,s)))<<(a=n)|o>>>32-a,i);var o,a}function j(t,e,i,r,n,s,o){return y(e&i|~e&r,t,e,n,s,o)}function b(t,e,i,r,n,s,o){return y(e&r|i&~r,t,e,n,s,o)}function I(t,e,i,r,n,s,o){return y(e^i^r,t,e,n,s,o)}function S(t,e,i,r,n,s,o){return y(i^(e|~r),t,e,n,s,o)}const E=D("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(t){for(var e=[],i=32*t.length,r="0123456789abcdef",n=0;n<i;n+=8){var s=t[n>>5]>>>n%32&255,o=parseInt(r.charAt(s>>>4&15)+r.charAt(15&s),16);e.push(o)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[C(e)-1]=e;for(var i=1732584193,r=-271733879,n=-1732584194,s=271733878,o=0;o<t.length;o+=16){var a=i,d=r,c=n,h=s;i=j(i,r,n,s,t[o],7,-680876936),s=j(s,i,r,n,t[o+1],12,-389564586),n=j(n,s,i,r,t[o+2],17,606105819),r=j(r,n,s,i,t[o+3],22,-1044525330),i=j(i,r,n,s,t[o+4],7,-176418897),s=j(s,i,r,n,t[o+5],12,1200080426),n=j(n,s,i,r,t[o+6],17,-1473231341),r=j(r,n,s,i,t[o+7],22,-45705983),i=j(i,r,n,s,t[o+8],7,1770035416),s=j(s,i,r,n,t[o+9],12,-1958414417),n=j(n,s,i,r,t[o+10],17,-42063),r=j(r,n,s,i,t[o+11],22,-1990404162),i=j(i,r,n,s,t[o+12],7,1804603682),s=j(s,i,r,n,t[o+13],12,-40341101),n=j(n,s,i,r,t[o+14],17,-1502002290),i=b(i,r=j(r,n,s,i,t[o+15],22,1236535329),n,s,t[o+1],5,-165796510),s=b(s,i,r,n,t[o+6],9,-1069501632),n=b(n,s,i,r,t[o+11],14,643717713),r=b(r,n,s,i,t[o],20,-373897302),i=b(i,r,n,s,t[o+5],5,-701558691),s=b(s,i,r,n,t[o+10],9,38016083),n=b(n,s,i,r,t[o+15],14,-660478335),r=b(r,n,s,i,t[o+4],20,-405537848),i=b(i,r,n,s,t[o+9],5,568446438),s=b(s,i,r,n,t[o+14],9,-1019803690),n=b(n,s,i,r,t[o+3],14,-187363961),r=b(r,n,s,i,t[o+8],20,1163531501),i=b(i,r,n,s,t[o+13],5,-1444681467),s=b(s,i,r,n,t[o+2],9,-51403784),n=b(n,s,i,r,t[o+7],14,1735328473),i=I(i,r=b(r,n,s,i,t[o+12],20,-1926607734),n,s,t[o+5],4,-378558),s=I(s,i,r,n,t[o+8],11,-2022574463),n=I(n,s,i,r,t[o+11],16,1839030562),r=I(r,n,s,i,t[o+14],23,-35309556),i=I(i,r,n,s,t[o+1],4,-1530992060),s=I(s,i,r,n,t[o+4],11,1272893353),n=I(n,s,i,r,t[o+7],16,-155497632),r=I(r,n,s,i,t[o+10],23,-1094730640),i=I(i,r,n,s,t[o+13],4,681279174),s=I(s,i,r,n,t[o],11,-358537222),n=I(n,s,i,r,t[o+3],16,-722521979),r=I(r,n,s,i,t[o+6],23,76029189),i=I(i,r,n,s,t[o+9],4,-640364487),s=I(s,i,r,n,t[o+12],11,-421815835),n=I(n,s,i,r,t[o+15],16,530742520),i=S(i,r=I(r,n,s,i,t[o+2],23,-995338651),n,s,t[o],6,-198630844),s=S(s,i,r,n,t[o+7],10,1126891415),n=S(n,s,i,r,t[o+14],15,-1416354905),r=S(r,n,s,i,t[o+5],21,-57434055),i=S(i,r,n,s,t[o+12],6,1700485571),s=S(s,i,r,n,t[o+3],10,-1894986606),n=S(n,s,i,r,t[o+10],15,-1051523),r=S(r,n,s,i,t[o+1],21,-2054922799),i=S(i,r,n,s,t[o+8],6,1873313359),s=S(s,i,r,n,t[o+15],10,-30611744),n=S(n,s,i,r,t[o+6],15,-1560198380),r=S(r,n,s,i,t[o+13],21,1309151649),i=S(i,r,n,s,t[o+4],6,-145523070),s=S(s,i,r,n,t[o+11],10,-1120210379),n=S(n,s,i,r,t[o+2],15,718787259),r=S(r,n,s,i,t[o+9],21,-343485551),i=g(i,a),r=g(r,d),n=g(n,c),s=g(s,h)}return[i,r,n,s]}(function(t){if(0===t.length)return[];for(var e=8*t.length,i=new Uint32Array(C(e)),r=0;r<e;r+=8)i[r>>5]|=(255&t[r/8])<<r%32;return i}(t),8*t.length))})),B=function(t,e,i){var r=(t=t||{}).random||(t.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){i=i||0;for(var n=0;n<16;++n)e[i+n]=r[n];return e}return h(r)};function L(t,e,i,r){switch(t){case 0:return e&i^~e&r;case 1:return e^i^r;case 2:return e&i^e&r^i&r;case 3:return e^i^r}}function P(t,e){return t<<e|t>>>32-e}const w=D("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var n=0;n<r.length;++n)t.push(r.charCodeAt(n))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var s=t.length/4+2,o=Math.ceil(s/16),a=new Array(o),d=0;d<o;++d){for(var c=new Uint32Array(16),h=0;h<16;++h)c[h]=t[64*d+4*h]<<24|t[64*d+4*h+1]<<16|t[64*d+4*h+2]<<8|t[64*d+4*h+3];a[d]=c}a[o-1][14]=8*(t.length-1)/Math.pow(2,32),a[o-1][14]=Math.floor(a[o-1][14]),a[o-1][15]=8*(t.length-1)&4294967295;for(var l=0;l<o;++l){for(var p=new Uint32Array(80),v=0;v<16;++v)p[v]=a[l][v];for(var m=16;m<80;++m)p[m]=P(p[m-3]^p[m-8]^p[m-14]^p[m-16],1);for(var u=i[0],f=i[1],D=i[2],C=i[3],g=i[4],y=0;y<80;++y){var j=Math.floor(y/20),b=P(u,5)+L(j,f,D,C)+g+e[j]+p[y]>>>0;g=C,C=D,D=P(f,30)>>>0,f=u,u=b}i[0]=i[0]+u>>>0,i[1]=i[1]+f>>>0,i[2]=i[2]+D>>>0,i[3]=i[3]+C>>>0,i[4]=i[4]+g>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]})),H="00000000-0000-0000-0000-000000000000",U=function(t){if(!a(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}},e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={exports:{}};return t[r](n,n.exports,i),n.exports}i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{v4:t}=i(614),e=class{constructor(){this.projects=JSON.parse(localStorage.getItem("projects"))||[]}createProject(e){const i=new class{constructor(e,i=[]){this.id=t(),this.title=e,this.todos=i}grabId(){return this.id}}(e);this.projects.push(i),localStorage.setItem("projects",JSON.stringify(this.projects))}addItem(t,e,i,n,s,o){let a=new class{constructor(t,e,i,r,n=!1){this.title=t,this.dueDate=e,this.description=i,this.priority=r,this.completionStatus=n}}(t,e,i,n,s);this.projects.find((t=>t.id===o)).todos.push(a),localStorage.setItem("projects",JSON.stringify(this.projects)),new r}},r=class{constructor(){this.appDiv=document.getElementById("app"),this.sidebarDiv=document.createElement("div"),this.logoDiv=document.createElement("div"),this.logoImage=document.createElement("i"),this.logoHR=document.createElement("hr"),this.sidebarContainerDiv=document.createElement("div"),this.sidebarHR=document.createElement("hr"),this.userProjectsUl=document.createElement("ul"),this.addProjectBtn=document.createElement("BUTTON"),this.addProjectIco=document.createElement("i"),this.projectBtnSpan=document.createElement("span"),this.containerDiv=document.createElement("div"),this.contentDiv=document.createElement("div"),this.contentContainerDiv=document.createElement("div"),this.contentHeaderDiv=document.createElement("div"),this.currentTitleSpan=document.createElement("span"),this.projectSettingsIcon=document.createElement("i"),this.contentBodyDiv=document.createElement("div"),this.itemDiv=document.createElement("div"),this.addItemBtnDiv=document.createElement("div"),this.addItemIco=document.createElement("i"),this.addItemSpan=document.createElement("span"),this.sidebarDiv.id="sidebar",this.logoDiv.classList.add("logo"),this.logoImage.classList.add("logo-icon","fas","fa-th-list","fa-2x"),this.sidebarContainerDiv.id="sidebar-container",this.sidebarHR.classList.add("sidebar-container-hr"),this.userProjectsUl.classList.add("user-projects"),this.addProjectBtn.classList.add("add-project-btn"),this.addProjectIco.classList.add("fas","fa-plus","project-btn"),this.projectBtnSpan.classList.add("add-task-text"),this.containerDiv.id="container",this.contentDiv.id="content",this.contentContainerDiv.id="content-container",this.contentHeaderDiv.classList.add("content-header"),this.currentTitleSpan.classList.add("current-project-title"),this.projectSettingsIcon.classList.add("fas","fa-ellipsis-h","fa-lg","settings-icon"),this.contentBodyDiv.classList.add("content-body"),this.itemDiv.classList.add("items"),this.addItemBtnDiv.classList.add("add-item-btn"),this.addItemIco.classList.add("fas","fa-plus","item-btn"),this.addItemSpan.classList.add("add-item-text"),this.appDiv.appendChild(this.containerDiv),this.containerDiv.appendChild(this.contentDiv),this.createSidebar()}refreshDOM(t,e){if("all"===t)for(;this.appDiv.firstChild;)this.appDiv.removeChild(this.appDiv.lastChild);else if("sidebar"===t){for(;this.logoDiv.firstChild;)this.logoDiv.removeChild(this.logoDiv.lastChild);for(;this.userProjectsUl.firstChild;)this.userProjectsUl.removeChild(this.userProjectsUl.lastChild);for(;this.addProjectBtn.firstChild;)this.addProjectBtn.removeChild(this.addProjectBtn.lastChild);for(;this.sidebarContainerDiv.firstChild;)this.sidebarContainerDiv.removeChild(this.sidebarContainerDiv.lastChild);this.sidebarDiv.removeChild(this.logoDiv),this.sidebarDiv.removeChild(this.sidebarContainerDiv),this.containerDiv.removeChild(this.sidebarDiv),this.createSidebar()}else if("content"===t){if(document.querySelector(".items"))for(;this.itemHolderDiv.firstChild;)this.itemHolderDiv.removeChild(this.itemHolderDiv.lastChild);for(;this.contentHeaderDiv.firstChild;)this.contentHeaderDiv.removeChild(this.contentHeaderDiv.lastChild);for(;this.addItemBtnDiv.firstChild;)this.addItemBtnDiv.removeChild(this.addItemBtnDiv.lastChild);for(;this.contentBodyDiv.firstChild;)this.contentBodyDiv.removeChild(this.contentBodyDiv.lastChild);for(;this.contentContainerDiv.firstChild;)this.contentContainerDiv.removeChild(this.contentContainerDiv.lastChild)}}createSidebar(){this.containerDiv.appendChild(this.sidebarDiv),this.sidebarDiv.appendChild(this.logoDiv),this.logoDiv.appendChild(this.logoImage),this.logoDiv.appendChild(this.logoHR),this.sidebarDiv.appendChild(this.sidebarContainerDiv),this.sidebarContainerDiv.appendChild(this.userProjectsUl),this.sidebarContainerDiv.appendChild(this.addProjectBtn),this.addProjectBtn.appendChild(this.addProjectIco),this.addProjectBtn.appendChild(this.projectBtnSpan),this.projectBtnSpan.innerText="Add Project";let t=JSON.parse(localStorage.getItem("projects"));this.renderProjectsUl(t),this.addProjectBtn.addEventListener("click",(()=>{let t=new e,i=prompt("Project Title: ");t.createProject(i),this.refreshDOM("sidebar")})),document.querySelectorAll(".project").forEach((t=>{t.addEventListener("click",(t=>{let e=t.target.dataset.id;this.renderProjectPage(e)}))}))}renderProjectsUl(t){if(t)for(let e=0;e<t.length;e++)this.projectLi=document.createElement("li"),this.projectLi.classList.add("project"),this.projectLi.setAttribute("data-id",t[e].id),this.projectLi.textContent=t[e].title,this.userProjectsUl.appendChild(this.projectLi)}renderProjectPage(t){let i=JSON.parse(localStorage.getItem("projects")),r=i.find((e=>e.id===t)).todos,n=t;this.refreshDOM("content"),this.currentTitleSpan.innerText=i.find((e=>e.id===t)).title,this.currentTitleSpan.setAttribute("data-proj-id",t),this.contentDiv.appendChild(this.contentContainerDiv),this.contentContainerDiv.appendChild(this.contentHeaderDiv),this.contentHeaderDiv.appendChild(this.currentTitleSpan),this.contentHeaderDiv.appendChild(this.projectSettingsIcon),this.contentContainerDiv.appendChild(this.contentBodyDiv),r.length>0&&r.forEach((t=>{this.itemHolderDiv=document.createElement("div"),this.itemHolderDiv.classList.add("item"),this.itemOptionsDiv=document.createElement("div"),this.itemOptionsDiv.classList.add("item-options"),this.editIconOnHover=document.createElement("i"),this.editIconOnHover.classList.add("far","fa-edit"),this.itemSettingsOnHover=document.createElement("i"),this.itemSettingsOnHover.classList.add("fas","fa-ellipsis-h"),this.itemTitleDiv=document.createElement("div"),this.itemTitleDiv.classList.add("item-title"),this.itemTitleDiv.innerText=t.title,this.itemRowBr=document.createElement("br"),this.dueDateDiv=document.createElement("div"),this.dueDateDiv.classList.add("due-date"),this.dueDateDiv.innerText=t.dueDate,this.itemHr=document.createElement("hr"),this.contentBodyDiv.appendChild(this.itemDiv),this.itemDiv.appendChild(this.itemHolderDiv),this.itemHolderDiv.appendChild(this.itemOptionsDiv),this.itemOptionsDiv.appendChild(this.editIconOnHover),this.itemOptionsDiv.appendChild(this.itemSettingsOnHover),this.itemHolderDiv.appendChild(this.itemTitleDiv),this.itemHolderDiv.appendChild(this.itemRowBr),this.itemHolderDiv.appendChild(this.dueDateDiv),this.contentBodyDiv.appendChild(this.itemHr)})),this.contentBodyDiv.appendChild(this.addItemBtnDiv),this.addItemBtnDiv.appendChild(this.addItemIco),this.addItemSpan.innerText="Add Item",this.addItemBtnDiv.appendChild(this.addItemSpan),this.addItemBtnDiv.addEventListener("click",(()=>{let t=new e,i=prompt("Item Title: "),r=prompt("Due Date (dd-MMM): "),s=prompt("Desdcription: "),o=prompt("Priority (High, Medium, Low): "),a=prompt("Completed? (yes or no): ");t.addItem(i,r,s,o,a,n)}))}};window.displayController=new r})()})();