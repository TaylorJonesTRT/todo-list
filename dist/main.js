(()=>{"use strict";class e{constructor(e,t,d,i){this.title=e,this.dueDate=t,this.priority=d,this.completionStatus=i}}(()=>{let e=document.getElementById("app"),t=document.createElement("div");t.id="container";let d=document.createElement("div");d.id="sidebar";let i=document.createElement("div");i.classList.add("logo");let a=document.createElement("i");a.classList.add("logo-icon","fas","fa-th-list","fa-2x");let l=document.createElement("hr"),n=document.createElement("div");n.id="sidebar-container";let c=document.createElement("ul");c.classList.add("favorites");let o=document.createElement("hr");o.classList.add("sidebar-container-hr"),e.appendChild(t),t.appendChild(d),d.appendChild(i),i.appendChild(a),i.appendChild(l),d.appendChild(n),n.appendChild(c),n.appendChild(o);for(let e=0;e<5;e++){let t=document.createElement("li");1===e?t.classList.add("project-active"):t.classList.add("project"),c.appendChild(t).innerText=e}})(),window.createItem=()=>{let t=prompt("Title: "),d=prompt("Due Date: "),i=prompt("Priority: "),a=prompt("Finished: "),l=new e(t,d,i,a);console.log(l)}})();