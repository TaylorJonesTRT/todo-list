(()=>{"use strict";var t={614:(t,e,i)=>{i.r(e),i.d(e,{NIL:()=>A,parse:()=>f,stringify:()=>l,v1:()=>u,v3:()=>b,v4:()=>L,v5:()=>B,validate:()=>d,version:()=>O});var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function s(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(t){return"string"==typeof t&&o.test(t)};for(var a=[],c=0;c<256;++c)a.push((c+256).toString(16).substr(1));const l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase();if(!d(i))throw TypeError("Stringified UUID is invalid");return i};var h,m,p=0,v=0;const u=function(t,e,i){var n=e&&i||0,r=e||new Array(16),o=(t=t||{}).node||h,d=void 0!==t.clockseq?t.clockseq:m;if(null==o||null==d){var a=t.random||(t.rng||s)();null==o&&(o=h=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==d&&(d=m=16383&(a[6]<<8|a[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),u=void 0!==t.nsecs?t.nsecs:v+1,f=c-p+(u-v)/1e4;if(f<0&&void 0===t.clockseq&&(d=d+1&16383),(f<0||c>p)&&void 0===t.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=c,v=u,m=d;var D=(1e4*(268435455&(c+=122192928e5))+u)%4294967296;r[n++]=D>>>24&255,r[n++]=D>>>16&255,r[n++]=D>>>8&255,r[n++]=255&D;var C=c/4294967296*1e4&268435455;r[n++]=C>>>8&255,r[n++]=255&C,r[n++]=C>>>24&15|16,r[n++]=C>>>16&255,r[n++]=d>>>8|128,r[n++]=255&d;for(var g=0;g<6;++g)r[n+g]=o[g];return e||l(r)},f=function(t){if(!d(t))throw TypeError("Invalid UUID");var e,i=new Uint8Array(16);return i[0]=(e=parseInt(t.slice(0,8),16))>>>24,i[1]=e>>>16&255,i[2]=e>>>8&255,i[3]=255&e,i[4]=(e=parseInt(t.slice(9,13),16))>>>8,i[5]=255&e,i[6]=(e=parseInt(t.slice(14,18),16))>>>8,i[7]=255&e,i[8]=(e=parseInt(t.slice(19,23),16))>>>8,i[9]=255&e,i[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,i[11]=e/4294967296&255,i[12]=e>>>24&255,i[13]=e>>>16&255,i[14]=e>>>8&255,i[15]=255&e,i};function D(t,e,i){function n(t,n,r,s){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof n&&(n=f(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+t.length);if(o.set(n),o.set(t,n.length),(o=i(o))[6]=15&o[6]|e,o[8]=63&o[8]|128,r){s=s||0;for(var d=0;d<16;++d)r[s+d]=o[d];return r}return l(o)}try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function C(t){return 14+(t+64>>>9<<4)+1}function g(t,e){var i=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(i>>16)<<16|65535&i}function E(t,e,i,n,r,s){return g((o=g(g(e,t),g(n,s)))<<(d=r)|o>>>32-d,i);var o,d}function j(t,e,i,n,r,s,o){return E(e&i|~e&n,t,e,r,s,o)}function y(t,e,i,n,r,s,o){return E(e&n|i&~n,t,e,r,s,o)}function S(t,e,i,n,r,s,o){return E(e^i^n,t,e,r,s,o)}function I(t,e,i,n,r,s,o){return E(i^(e|~n),t,e,r,s,o)}const b=D("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(t){for(var e=[],i=32*t.length,n="0123456789abcdef",r=0;r<i;r+=8){var s=t[r>>5]>>>r%32&255,o=parseInt(n.charAt(s>>>4&15)+n.charAt(15&s),16);e.push(o)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[C(e)-1]=e;for(var i=1732584193,n=-271733879,r=-1732584194,s=271733878,o=0;o<t.length;o+=16){var d=i,a=n,c=r,l=s;i=j(i,n,r,s,t[o],7,-680876936),s=j(s,i,n,r,t[o+1],12,-389564586),r=j(r,s,i,n,t[o+2],17,606105819),n=j(n,r,s,i,t[o+3],22,-1044525330),i=j(i,n,r,s,t[o+4],7,-176418897),s=j(s,i,n,r,t[o+5],12,1200080426),r=j(r,s,i,n,t[o+6],17,-1473231341),n=j(n,r,s,i,t[o+7],22,-45705983),i=j(i,n,r,s,t[o+8],7,1770035416),s=j(s,i,n,r,t[o+9],12,-1958414417),r=j(r,s,i,n,t[o+10],17,-42063),n=j(n,r,s,i,t[o+11],22,-1990404162),i=j(i,n,r,s,t[o+12],7,1804603682),s=j(s,i,n,r,t[o+13],12,-40341101),r=j(r,s,i,n,t[o+14],17,-1502002290),i=y(i,n=j(n,r,s,i,t[o+15],22,1236535329),r,s,t[o+1],5,-165796510),s=y(s,i,n,r,t[o+6],9,-1069501632),r=y(r,s,i,n,t[o+11],14,643717713),n=y(n,r,s,i,t[o],20,-373897302),i=y(i,n,r,s,t[o+5],5,-701558691),s=y(s,i,n,r,t[o+10],9,38016083),r=y(r,s,i,n,t[o+15],14,-660478335),n=y(n,r,s,i,t[o+4],20,-405537848),i=y(i,n,r,s,t[o+9],5,568446438),s=y(s,i,n,r,t[o+14],9,-1019803690),r=y(r,s,i,n,t[o+3],14,-187363961),n=y(n,r,s,i,t[o+8],20,1163531501),i=y(i,n,r,s,t[o+13],5,-1444681467),s=y(s,i,n,r,t[o+2],9,-51403784),r=y(r,s,i,n,t[o+7],14,1735328473),i=S(i,n=y(n,r,s,i,t[o+12],20,-1926607734),r,s,t[o+5],4,-378558),s=S(s,i,n,r,t[o+8],11,-2022574463),r=S(r,s,i,n,t[o+11],16,1839030562),n=S(n,r,s,i,t[o+14],23,-35309556),i=S(i,n,r,s,t[o+1],4,-1530992060),s=S(s,i,n,r,t[o+4],11,1272893353),r=S(r,s,i,n,t[o+7],16,-155497632),n=S(n,r,s,i,t[o+10],23,-1094730640),i=S(i,n,r,s,t[o+13],4,681279174),s=S(s,i,n,r,t[o],11,-358537222),r=S(r,s,i,n,t[o+3],16,-722521979),n=S(n,r,s,i,t[o+6],23,76029189),i=S(i,n,r,s,t[o+9],4,-640364487),s=S(s,i,n,r,t[o+12],11,-421815835),r=S(r,s,i,n,t[o+15],16,530742520),i=I(i,n=S(n,r,s,i,t[o+2],23,-995338651),r,s,t[o],6,-198630844),s=I(s,i,n,r,t[o+7],10,1126891415),r=I(r,s,i,n,t[o+14],15,-1416354905),n=I(n,r,s,i,t[o+5],21,-57434055),i=I(i,n,r,s,t[o+12],6,1700485571),s=I(s,i,n,r,t[o+3],10,-1894986606),r=I(r,s,i,n,t[o+10],15,-1051523),n=I(n,r,s,i,t[o+1],21,-2054922799),i=I(i,n,r,s,t[o+8],6,1873313359),s=I(s,i,n,r,t[o+15],10,-30611744),r=I(r,s,i,n,t[o+6],15,-1560198380),n=I(n,r,s,i,t[o+13],21,1309151649),i=I(i,n,r,s,t[o+4],6,-145523070),s=I(s,i,n,r,t[o+11],10,-1120210379),r=I(r,s,i,n,t[o+2],15,718787259),n=I(n,r,s,i,t[o+9],21,-343485551),i=g(i,d),n=g(n,a),r=g(r,c),s=g(s,l)}return[i,n,r,s]}(function(t){if(0===t.length)return[];for(var e=8*t.length,i=new Uint32Array(C(e)),n=0;n<e;n+=8)i[n>>5]|=(255&t[n/8])<<n%32;return i}(t),8*t.length))})),L=function(t,e,i){var n=(t=t||{}).random||(t.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){i=i||0;for(var r=0;r<16;++r)e[i+r]=n[r];return e}return l(n)};function P(t,e,i,n){switch(t){case 0:return e&i^~e&n;case 1:return e^i^n;case 2:return e&i^e&n^i&n;case 3:return e^i^n}}function w(t,e){return t<<e|t>>>32-e}const B=D("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var r=0;r<n.length;++r)t.push(n.charCodeAt(r))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var s=t.length/4+2,o=Math.ceil(s/16),d=new Array(o),a=0;a<o;++a){for(var c=new Uint32Array(16),l=0;l<16;++l)c[l]=t[64*a+4*l]<<24|t[64*a+4*l+1]<<16|t[64*a+4*l+2]<<8|t[64*a+4*l+3];d[a]=c}d[o-1][14]=8*(t.length-1)/Math.pow(2,32),d[o-1][14]=Math.floor(d[o-1][14]),d[o-1][15]=8*(t.length-1)&4294967295;for(var h=0;h<o;++h){for(var m=new Uint32Array(80),p=0;p<16;++p)m[p]=d[h][p];for(var v=16;v<80;++v)m[v]=w(m[v-3]^m[v-8]^m[v-14]^m[v-16],1);for(var u=i[0],f=i[1],D=i[2],C=i[3],g=i[4],E=0;E<80;++E){var j=Math.floor(E/20),y=w(u,5)+P(j,f,D,C)+g+e[j]+m[E]>>>0;g=C,C=D,D=w(f,30)>>>0,f=u,u=y}i[0]=i[0]+u>>>0,i[1]=i[1]+f>>>0,i[2]=i[2]+D>>>0,i[3]=i[3]+C>>>0,i[4]=i[4]+g>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]})),A="00000000-0000-0000-0000-000000000000",O=function(t){if(!d(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}},e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{v4:t}=i(614),{v4:e}=i(614),n=class{constructor(){this.projects=JSON.parse(localStorage.getItem("projects"))||[]}createProject(t){const i=new class{constructor(t,i=[]){this.id=e(),this.title=t,this.todos=i}}(t);this.projects.push(i),localStorage.setItem("projects",JSON.stringify(this.projects))}addItem(e,i,n,r,s,o){let d=new class{constructor(e,i,n,r,s=!1){this.title=e,this.dueDate=i,this.description=n,this.priority=r,this.completionStatus=s,this.id=t()}}(e,i,n,r,s);this.projects.find((t=>t.id===o)).todos.push(d),localStorage.setItem("projects",JSON.stringify(this.projects))}editItem(){}removeItem(t,e){let i=this.projects.find((e=>e.id===t)),n=i.todos.find((t=>t.id===e));i.todos.indexOf(n),i.todos=i.todos.filter((t=>t.id!=n.id)),localStorage.setItem("projects",JSON.stringify(this.projects))}};window.displayController=new class{constructor(){this.appDiv=document.getElementById("app"),this.projectsModel=new n,this.containerDiv=document.createElement("div"),this.containerDiv.id="container",this.contentDiv=document.createElement("div"),this.contentDiv.id="content",this.appDiv.appendChild(this.containerDiv),this.createSidebar(),this.renderProject(JSON.parse(localStorage.getItem("projects"))[0].id),console.log(JSON.parse(localStorage.getItem("projects")))}createSidebar(){this.sidebarDiv=document.createElement("div"),this.logoDiv=document.createElement("div"),this.logoImage=document.createElement("i"),this.logoHR=document.createElement("hr"),this.sidebarContainerDiv=document.createElement("div"),this.sidebarHR=document.createElement("hr"),this.userProjectsUl=document.createElement("ul"),this.addProjectBtn=document.createElement("BUTTON"),this.addProjectIco=document.createElement("i"),this.projectBtnSpan=document.createElement("span"),this.sidebarDiv.id="sidebar",this.logoDiv.classList.add("logo"),this.logoImage.classList.add("logo-icon","fas","fa-th-list","fa-2x"),this.sidebarContainerDiv.id="sidebar-container",this.sidebarHR.classList.add("sidebar-container-hr"),this.userProjectsUl.classList.add("user-projects"),this.addProjectBtn.classList.add("add-project-btn"),this.addProjectIco.classList.add("fas","fa-plus","project-btn"),this.projectBtnSpan.classList.add("add-task-text"),this.containerDiv.appendChild(this.sidebarDiv),this.sidebarDiv.appendChild(this.logoDiv),this.logoDiv.appendChild(this.logoImage),this.logoDiv.appendChild(this.logoHR),this.sidebarDiv.appendChild(this.sidebarContainerDiv),this.sidebarContainerDiv.appendChild(this.userProjectsUl),this.sidebarContainerDiv.appendChild(this.addProjectBtn),this.addProjectBtn.appendChild(this.addProjectIco),this.addProjectBtn.appendChild(this.projectBtnSpan),this.projectBtnSpan.innerText="Add Project";let t=JSON.parse(localStorage.getItem("projects"));this.renderProjectList(t),this.addProjectBtn.addEventListener("click",(()=>{let t=new n,e=prompt("Project Title: ");t.createProject(e);let i=JSON.parse(localStorage.getItem("projects"));this.renderProject(i[i.length-1].id),this.clearChildNodes("sidebar")}));let e=document.querySelectorAll(".project");e.forEach((t=>{t.addEventListener("click",(i=>{e.forEach((t=>{t.classList.remove("project-active")})),this.renderProject(i.target.dataset.id),t.classList.add("project-active")}))}))}renderProjectList(t){if(t)for(let e=0;e<t.length;e++)this.projectLi=document.createElement("li"),this.projectLi.classList.add("project"),this.projectLi.setAttribute("data-id",t[e].id),this.projectLi.textContent=t[e].title,this.userProjectsUl.appendChild(this.projectLi)}renderProject(t){let e=JSON.parse(localStorage.getItem("projects"));e.find((e=>e.id===t)).todos,this.clearChildNodes("content"),this.contentContainerDiv=document.createElement("div"),this.contentHeaderDiv=document.createElement("div"),this.currentTitleSpan=document.createElement("span"),this.projectSettingsIcon=document.createElement("i"),this.contentBodyDiv=document.createElement("div"),this.itemDiv=document.createElement("div"),this.addItemBtnDiv=document.createElement("div"),this.addItemIco=document.createElement("i"),this.addItemSpan=document.createElement("span"),this.contentContainerDiv.id="content-container",this.contentHeaderDiv.classList.add("content-header"),this.currentTitleSpan.classList.add("current-project-title"),this.projectSettingsIcon.classList.add("fas","fa-ellipsis-h","fa-lg","settings-icon"),this.contentBodyDiv.classList.add("content-body"),this.itemDiv.classList.add("items"),this.addItemBtnDiv.classList.add("add-item-btn"),this.addItemIco.classList.add("fas","fa-plus","item-btn"),this.addItemSpan.classList.add("add-item-text"),this.currentTitleSpan.innerText=e.find((e=>e.id===t)).title,this.currentTitleSpan.setAttribute("data-proj-id",t),this.containerDiv.appendChild(this.contentDiv),this.contentDiv.appendChild(this.contentContainerDiv),this.contentContainerDiv.appendChild(this.contentHeaderDiv),this.contentHeaderDiv.appendChild(this.currentTitleSpan),this.contentHeaderDiv.appendChild(this.projectSettingsIcon),this.contentContainerDiv.appendChild(this.contentBodyDiv),this.addItemBtnDiv.addEventListener("click",(()=>{this.addItemEvent(t)})),this.renderItems(t),document.querySelectorAll(".item").forEach((t=>{t.addEventListener("mouseenter",(()=>{t.querySelector(".item-options").style.display="block"})),t.addEventListener("mouseleave",(()=>{t.querySelector(".item-options").style.display="none"}))})),this.contentBodyDiv.appendChild(this.addItemBtnDiv),this.addItemBtnDiv.appendChild(this.addItemIco),this.addItemSpan.innerText="Add Item",this.addItemBtnDiv.appendChild(this.addItemSpan),document.querySelectorAll(".delete-item").forEach((e=>{e.addEventListener("click",(i=>{let n=e.getAttribute("item-id");this.projectsModel.removeItem(t,n),this.renderProject(t)}))}))}renderItems(t){let e=JSON.parse(localStorage.getItem("projects")).find((e=>e.id===t)).todos;e.length>0&&e.forEach((t=>{this.itemContainerDiv=document.createElement("div"),this.itemContainerDiv.classList.add("items-container"),this.item=document.createElement("div"),this.item.classList.add("item"),this.itemOptionsDiv=document.createElement("div"),this.itemOptionsDiv.classList.add("item-options"),this.itemOptionsDiv.style.display="none",this.itemSettingsIcon=document.createElement("i"),this.itemSettingsIcon.classList.add("far","fa-edit","item-options-icon"),this.itemSettingsSection=document.createElement("div"),this.itemSettingsSection.classList.add("item-settings"),this.itemDeleteSection=document.createElement("div"),this.itemDeleteSection.classList.add("delete-item"),this.itemDeleteIcon=document.createElement("i"),this.itemDeleteIcon.classList.add("far","fa-trash-alt","item-options-icon"),this.itemDeleteSection.setAttribute("item-id",t.id),this.itemTitleDiv=document.createElement("div"),this.itemTitleDiv.classList.add("item-title"),this.itemTitleDiv.innerText=t.title,this.itemTitleDiv.setAttribute("dataset-id",t.id),this.itemRowBr=document.createElement("br"),this.dueDateDiv=document.createElement("div"),this.dueDateDiv.classList.add("due-date"),this.dueDateDiv.innerText=t.dueDate,this.itemHr=document.createElement("hr"),this.contentBodyDiv.appendChild(this.itemContainerDiv),this.itemContainerDiv.appendChild(this.item),this.item.appendChild(this.itemOptionsDiv),this.itemDeleteSection.appendChild(this.itemDeleteIcon),this.itemSettingsSection.appendChild(this.itemSettingsIcon),this.itemOptionsDiv.appendChild(this.itemSettingsSection),this.itemOptionsDiv.appendChild(this.itemDeleteSection),this.item.appendChild(this.itemTitleDiv),this.item.appendChild(this.itemRowBr),this.item.appendChild(this.dueDateDiv),this.itemContainerDiv.appendChild(this.itemHr)}))}addItemEvent(t){let e=new n,i=prompt("Item Title: "),r=prompt("Due Date (dd-MMM): "),s=prompt("Desdcription: "),o=prompt("Priority (High, Medium, Low): "),d=prompt("Completed? (yes or no): ");e.addItem(i,r,s,o,d,t),this.renderProject(t)}clearChildNodes(t){if("content"===t){if(this.contentDiv.firstElementChild)for(;this.contentContainerDiv.firstElementChild;)this.contentContainerDiv.removeChild(this.contentContainerDiv.firstElementChild);for(;this.contentDiv.firstElementChild;)this.contentDiv.removeChild(this.contentDiv.firstElementChild);"content"===this.containerDiv.lastElementChild.id&&this.containerDiv.removeChild(this.contentDiv)}else if("items"===t){for(;this.itemOptionsDiv.firstElementChild;)this.itemOptionsDiv.removeChild(this.itemOptionsDiv.firstElementChild);for(;this.item.firstElementChild;)this.item.removeChild(this.item.firstElementChild);for(;this.itemContainerDiv.firstElementChild;)this.itemContainerDiv.removeChild(this.itemContainerDiv.firstElementChild)}else if("sidebar"===t){for(;this.addProjectBtn.firstElementChild;)this.addProjectBtn.removeChild(this.addProjectBtn.firstElementChild);for(;this.userProjectsUl.firstElementChild;)this.userProjectsUl.removeChild(this.userProjectsUl.firstElementChild);for(;this.logoDiv.firstElementChild;)this.logoDiv.removeChild(this.logoDiv.firstElementChild);for(;this.sidebarContainerDiv.firstElementChild;)this.sidebarContainerDiv.removeChild(this.sidebarContainerDiv.firstElementChild);for(;this.sidebarDiv.firstElementChild;)this.sidebarDiv.removeChild(this.sidebarDiv.firstElementChild);this.containerDiv.removeChild(this.sidebarDiv),this.createSidebar()}else if("all"===t)for(;this.containerDiv.firstElementChild;)this.containerDiv.removeChild(this.containerDiv.firstElementChild)}}})()})();