import Projects from "./Projects";

class DisplayController {
    constructor() {
        // Grabbing the hard coded app div
        this.appDiv = document.getElementById("app");

        this.containerDiv = document.createElement("div");
        this.containerDiv.id = "container";
        this.contentDiv = document.createElement("div");
        this.contentDiv.id = "content";
        this.appDiv.appendChild(this.containerDiv);

        this.createSidebar();
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

        let projectList = JSON.parse(localStorage.getItem('projects'));
        this.renderProjectList(projectList);

        this.addProjectBtn.addEventListener("click", () => {
            let eventProjCont = new Projects();
            let projTitle = prompt("Project Title: ");
            eventProjCont.createProject(projTitle);
            this.refreshDOM("sidebar");
        });

        document.querySelectorAll(".project").forEach(project => {
            project.addEventListener("click", event => {
                console.log(event.target.dataset.id);
                this.renderProject(event.target.dataset.id);
            });
        });
    }

    renderProjectList(projects) {
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

    renderProject(projId) {
        let updatedProjects = JSON.parse(localStorage.getItem('projects'));
        let projItems = updatedProjects.find(p => p.id === projId).todos;
        let currentProj = projId;

        this.clearChildNodes("content");

        this.contentContainerDiv = document.createElement("div");
        this.contentHeaderDiv = document.createElement("div");
        this.currentTitleSpan = document.createElement("span");
        this.projectSettingsIcon = document.createElement("i");
        this.contentBodyDiv = document.createElement("div");
        this.itemDiv = document.createElement("div");
        this.addItemBtnDiv = document.createElement("div");
        this.addItemIco = document.createElement("i");
        this.addItemSpan = document.createElement("span");

        this.contentContainerDiv.id = "content-container";
        this.contentHeaderDiv.classList.add("content-header");
        this.currentTitleSpan.classList.add("current-project-title");
        this.projectSettingsIcon.classList.add("fas", "fa-ellipsis-h", "fa-lg", "settings-icon");
        this.contentBodyDiv.classList.add("content-body");
        this.itemDiv.classList.add("items");
        this.addItemBtnDiv.classList.add("add-item-btn");
        this.addItemIco.classList.add("fas", "fa-plus", "item-btn");
        this.addItemSpan.classList.add("add-item-text");

        this.currentTitleSpan.innerText = updatedProjects.find(p => p.id === projId).title;
        this.currentTitleSpan.setAttribute("data-proj-id", projId);
        
        this.containerDiv.appendChild(this.contentDiv);
        this.contentDiv.appendChild(this.contentContainerDiv);
        this.contentContainerDiv.appendChild(this.contentHeaderDiv);
        this.contentHeaderDiv.appendChild(this.currentTitleSpan);
        this.contentHeaderDiv.appendChild(this.projectSettingsIcon);
        this.contentContainerDiv.appendChild(this.contentBodyDiv);

        this.addItemBtnDiv.addEventListener("click", () => {
            this.addItemEvent(projId);
        });
        
        // Rendering the projects items
        this.renderItems(projId);
        
        this.contentBodyDiv.appendChild(this.addItemBtnDiv);
        this.addItemBtnDiv.appendChild(this.addItemIco);
        this.addItemSpan.innerText = "Add Item";
        this.addItemBtnDiv.appendChild(this.addItemSpan);
    }

    renderItems(projId) {
        let updatedProjects = JSON.parse(localStorage.getItem('projects'));
        let projItems = updatedProjects.find(p => p.id === projId).todos;
        
        if (projItems.length > 0) {
            projItems.forEach(item => {
                this.itemContainerDiv = document.createElement("div");
                this.itemContainerDiv.classList.add("items-container");
                this.item = document.createElement("div");
                this.item.classList.add("item");
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

                this.contentBodyDiv.appendChild(this.itemContainerDiv);
                this.itemContainerDiv.appendChild(this.item);
                this.item.appendChild(this.itemOptionsDiv);
                this.itemOptionsDiv.appendChild(this.editIconOnHover);
                this.itemOptionsDiv.appendChild(this.itemSettingsOnHover);
                this.item.appendChild(this.itemTitleDiv);
                this.item.appendChild(this.itemRowBr);
                this.item.appendChild(this.dueDateDiv);
                this.itemContainerDiv.appendChild(this.itemHr);
            });
        }
    }

    addItemEvent(projId) {
        let eventProjCont = new Projects();
        let itemTitle = prompt("Item Title: ");
        let itemDueDate = prompt("Due Date (dd-MMM): ");
        let itemDescription = prompt("Desdcription: ");
        let itemPrio = prompt("Priority (High, Medium, Low): ");
        let itemCompStatus = prompt("Completed? (yes or no): ");
        eventProjCont.addItem(itemTitle, itemDueDate, itemDescription, itemPrio, itemCompStatus, projId);
        this.clearChildNodes("content");
        this.renderProject(projId);
    }

    clearChildNodes(area) {
        if (area === "content") {
            while (this.contentDiv.firstElementChild) {
                this.contentDiv.removeChild(this.contentDiv.firstElementChild);
            }
            if (this.containerDiv.lastElementChild.id === "content") {
                this.containerDiv.removeChild(this.contentDiv);
            }
        } else if (area === "items") {
            while (this.itemOptionsDiv.firstElementChild) {
                this.itemOptionsDiv.removeChild(this.itemOptionsDiv.firstElementChild);
            }
            while (this.item.firstElementChild) {
                this.item.removeChild(this.item.firstElementChild);
            }
            while (this.itemContainerDiv.firstElementChild) {
                this.itemContainerDiv.removeChild(this.itemContainerDiv.firstElementChild);
            }
        } else if (area === "sidebar") {
            while (this.sidebarDiv.firstElementChild) {
                this.sidebarDiv.removeChild(this.sidebarDiv.firstElementChild);
            }
        } else if (area === "all") {
            while (this.containerDiv.firstElementChild) {
                this.containerDiv.removeChild(this.containerDiv.firstElementChild);
            }
        }
    }
}

// TODO: Need to decide if I want to move items from the constructor to their respective methods

export default DisplayController