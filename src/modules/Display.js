import Projects from "./Projects";

class DisplayController {
    // DOM Elements
    constructor() {
        // Fetching the Projects
        this.projCont = JSON.parse(localStorage.getItem('projects'));

        // Grabbing the hard coded app div
        this.appDiv = document.getElementById("app");

        // Creating Elements
        this.containerDiv = document.createElement("div");
        this.contentDiv = document.createElement("div");
        this.contentContainerDiv = document.createElement("div");
        this.contentHeaderDiv = document.createElement("div");
        this.currentTitleSpan = document.createElement("span");
        this.projectSettingsIcon = document.createElement("i");
        this.contentBodyDiv = document.createElement("div");
        this.addItemBtnDiv = document.createElement("div");
        this.addItemIco = document.createElement("i");
        this.addItemSpan = document.createElement("span");


        // Adding style properties to Elements
        this.containerDiv.id = "container";

        this.contentDiv.id = "content";
        this.contentContainerDiv.id = "content-container";
        this.contentHeaderDiv.classList.add("content-header");
        this.currentTitleSpan.classList.add("current-project-title");
        this.projectSettingsIcon.classList.add("fas", "fa-ellipsis-h", "fa-lg", "settings-icon");
        this.contentBodyDiv.classList.add("content-body");

        this.addItemBtnDiv.classList.add("add-item-btn");
        this.addItemIco.classList.add("fas", "fa-plus", "item-btn");
        this.addItemSpan.classList.add("add-item-text");

         // Appending Elements
        this.appDiv.appendChild(this.containerDiv);
        
        this.containerDiv.appendChild(this.contentDiv);
        // this.renderItems(this.projCont);

        // TODO: Need to call all methods for building the page here
        this.createSidebar();

        // Event Listeners
        document.querySelectorAll(".project").forEach(project => {
            project.addEventListener("click", event => {
                this.renderProjectPage(event.target.dataset.id);
            });
        });
    }
    refreshDOM(area) {
        // This will be used to clear everything from the DOM
        // Argument that will be passed is the section to be refreshed
        if (area === "all") {
            // Need to call this same function on itself to clear out everything rather than having the same code
            // be in multiple spots

            while (this.appDiv.firstChild) {
                this.appDiv.removeChild(this.appDiv.lastChild);
            }
        } else if (area === "sidebar") {
            // Logo area
            while (this.logoDiv.firstChild) {
                this.logoDiv.removeChild(this.logoDiv.lastChild);
            }
            // Projects UL area
            while (this.userProjectsUl.firstChild) {
                this.userProjectsUl.removeChild(this.userProjectsUl.lastChild);
            }
            // sidebarContainer area
            while (this.sidebarContainerDiv.firstChild) {
                this.sidebarContainerDiv.removeChild(this.sidebarContainerDiv.lastChild);
            }
            // addProjectBtn area
            while (this.addProjectBtn.firstChild) {
                this.addProjectBtn.removeChild(this.addProjectBtn.lastChild);
            }
            this.createSidebar();
        } else if (area === "content") {
            while (this.contentHeaderDiv.firstChild) {
                this.contentHeaderDiv.removeChild(this.contentHeaderDiv.lastChild);
            }
            while (this.addItemBtnDiv.firstChild) {
                this.addItemBtnDiv.removeChild(this.addItemBtnDiv.lastChild);
            }
            while (this.contentBodyDiv.firstChild) {
                this.contentBodyDiv.removeChild(this.contentBodyDiv.lastChild);
            }
            while (this.contentContainerDiv.firstChild) {
                this.contentContainerDiv.removeChild(this.contentContainerDiv.lastChild);
            }
            // TODO: Need to add method call to render content area once it's changed around
        } else if (area === "items") {
            // TODO: Finish this area of the else if logic
        }
        // let display = new DisplayController();
        // display;
    }

    createSidebar() {
        this.sidebarDiv = document.createElement("div");
        this.logoDiv = document.createElement("div");
        this.logoImage = document.createElement("i");
        this.logoHR = document.createElement("hr");
        this.sidebarContainerDiv = document.createElement("div");
        this.sidebarHR = document.createElement("hr");
        this.userProjectsUl = document.createElement("ul");
        this.addProjectBtn = document.createElement("BUTTON");
        this.addProjectIco = document.createElement("i");
        this.projectBtnSpan = document.createElement("span");
        this.sidebarDiv.id = "sidebar";
        this.logoDiv.classList.add("logo");
        this.logoImage.classList.add("logo-icon", "fas", "fa-th-list", "fa-2x");
        this.sidebarContainerDiv.id = "sidebar-container";
        this.sidebarHR.classList.add("sidebar-container-hr");
        this.userProjectsUl.classList.add("user-projects");
        this.addProjectBtn.classList.add("add-project-btn");
        this.addProjectIco.classList.add("fas", "fa-plus", "project-btn");
        this.projectBtnSpan.classList.add("add-task-text");
        this.containerDiv.appendChild(this.sidebarDiv);
        this.sidebarDiv.appendChild(this.logoDiv);
        this.logoDiv.appendChild(this.logoImage);
        this.logoDiv.appendChild(this.logoHR);
        this.sidebarDiv.appendChild(this.sidebarContainerDiv);
        this.sidebarContainerDiv.appendChild(this.userProjectsUl);
        this.sidebarContainerDiv.appendChild(this.addProjectBtn);
        this.addProjectBtn.appendChild(this.addProjectIco);
        this.addProjectBtn.appendChild(this.projectBtnSpan);
        this.projectBtnSpan.innerText = "Add Project";
        this.addProjectBtn.addEventListener("click", function() {
            let eventProjCont = new Projects();
            let projTitle = prompt("Project Title: ");
            eventProjCont.createProject(projTitle);
        });
        this.renderProjectsUl(this.projCont);
    }

    renderProjectsUl(projects) {
        if (projects) {
            for (let i = 0; i < projects.length; i++) {
                this.projectLi = document.createElement("li");
                this.projectLi.classList.add("project");
                this.projectLi.setAttribute("data-id", projects[i].id);
                this.projectLi.textContent = projects[i].title;
                this.userProjectsUl.appendChild(this.projectLi);
            }
        }
    }
    renderProjectPage(projId) {
        this.refreshDOM("content");
        this.currentTitleSpan.innerText = this.projCont.find(p => p.id === projId).title;
        this.currentTitleSpan.setAttribute("data-proj-id", projId);
        this.contentDiv.appendChild(this.contentContainerDiv);
        this.contentContainerDiv.appendChild(this.contentHeaderDiv);
        this.contentHeaderDiv.appendChild(this.currentTitleSpan);
        this.contentHeaderDiv.appendChild(this.projectSettingsIcon);
        this.contentContainerDiv.appendChild(this.contentBodyDiv);
        this.renderItems(projId);
        this.contentBodyDiv.appendChild(this.addItemBtnDiv);
        this.addItemBtnDiv.appendChild(this.addItemIco);
        this.addItemSpan.innerText = "Add Item";
        this.addItemBtnDiv.appendChild(this.addItemSpan);
        this.addItemEvent(projId);
    }
    renderItems(projId) {
        let projItems = this.projCont.find(p => p.id === projId).todos;
        if (projId.length > 0) {
            projItems.forEach(item => {
                this.itemsDiv = document.createElement("div");
                this.itemsDiv.classList.add("items");
                this.itemOptionsDiv = document.createElement("div");
                this.itemOptionsDiv.classList.add("item-options");
                this.editIconOnHover = document.createElement("i");
                this.editIconOnHover.classList.add("far", "fa-edit");
                this.itemSettingsOnHover = document.createElement("i");
                this.itemSettingsOnHover.classList.add("fas", "fa-ellipsis-h");
                this.itemTitleDiv = document.createElement("div");
                this.itemTitleDiv.classList.add("item-title");
                this.itemTitleDiv.innerText = item.title;
                this.itemRowBr = document.createElement("br");
                this.dueDateDiv = document.createElement("div");
                this.dueDateDiv.classList.add("due-date");
                this.dueDateDiv.innerText = item.dueDate;
                this.itemHr = document.createElement("hr");

                this.contentBodyDiv.appendChild(this.itemsDiv);
                this.itemsDiv.appendChild(this.itemOptionsDiv);
                this.itemOptionsDiv.appendChild(this.editIconOnHover);
                this.itemOptionsDiv.appendChild(this.itemSettingsOnHover);
                this.itemsDiv.appendChild(this.itemTitleDiv);
                this.itemsDiv.appendChild(this.itemRowBr);
                this.itemsDiv.appendChild(this.dueDateDiv);
                this.contentBodyDiv.appendChild(this.itemHr);
            });
        }
    }

    addItemEvent(projId) {
        this.addItemBtnDiv.addEventListener("click", function() {
            let eventProjCont = new Projects();
            let itemTitle = prompt("Item Title: ");
            let itemDueDate = prompt("Due Date (dd-MMM): ");
            let itemDescription = prompt("Desdcription: ");
            let itemPrio = prompt("Priority (High, Medium, Low): ");
            let itemCompStatus = prompt("Completed? (yes or no): ");
            eventProjCont.addItem(itemTitle, itemDueDate, itemDescription, itemPrio, itemCompStatus, projId);
            this.refreshDOM("content");
            this.renderProjectPage(projId);
        });
    }
}

export default DisplayController
