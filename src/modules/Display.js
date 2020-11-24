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
        // May need to move some of the below to the renderTodos() method
        // so that they can be dynamically created over and over
        this.contentDiv = document.createElement("div");
        this.contentContainerDiv = document.createElement("div");
        this.contentHeaderDiv = document.createElement("div");
        this.currentTitleSpan = document.createElement("span");
        this.projectSettingsIcon = document.createElement("i");
        this.contentBodyDiv = document.createElement("div");
        this.itemsDiv = document.createElement("div");
        this.itemOptionsDiv = document.createElement("div");
        this.editIconOnHover = document.createElement("i");
        this.itemSettingsOnHover = document.createElement("i");
        this.itemRowBr = document.createElement("br");
        this.dueDateDiv = document.createElement("div");
        this.itemHr = document.createElement("hr");
        this.addItemBtnDiv = document.createElement("div");
        this.addItemIco = document.createElement("i");
        this.addItemSpan = document.createElement("span");


        // Adding style properties to Elements
        this.containerDiv.id = "container";
        this.sidebarDiv.id = "sidebar";
        this.logoDiv.classList.add("logo");
        this.logoImage.classList.add("logo-icon", "fas", "fa-th-list", "fa-2x");
        this.sidebarContainerDiv.id = "sidebar-container";
        this.sidebarHR.classList.add("sidebar-container-hr");
        this.userProjectsUl.classList.add("user-projects");
        this.addProjectBtn.classList.add("add-project-btn");
        this.addProjectIco.classList.add("fas", "fa-plus", "project-btn");
        this.projectBtnSpan.classList.add("add-task-text");
        this.contentDiv.id = "content";
        this.contentContainerDiv.id = "content-container";
        this.contentHeaderDiv.classList.add("content-header");
        this.currentTitleSpan.classList.add("current-project-title");
        this.projectSettingsIcon.classList.add("fas", "fa-ellipsis-h", "fa-lg", "settings-icon");
        this.contentBodyDiv.classList.add("content-body");
        this.itemsDiv.classList.add("items");
        this.itemOptionsDiv.classList.add("item-options");
        this.editIconOnHover.classList.add("far", "fa-edit");
        this.itemSettingsOnHover.classList.add("fas", "fa-ellipsis-h");
        this.dueDateDiv.classList.add("due-date");
        this.addItemBtnDiv.classList.add("add-item-btn");
        this.addItemIco.classList.add("fas", "fa-plus", "item-btn");
        this.addItemSpan.classList.add("add-item-text");

         // Appending Elements
        this.appDiv.appendChild(this.containerDiv);
        this.containerDiv.appendChild(this.sidebarDiv);
        this.sidebarDiv.appendChild(this.logoDiv);
        this.logoDiv.appendChild(this.logoImage);
        this.logoDiv.appendChild(this.logoHR);
        this.sidebarDiv.appendChild(this.sidebarContainerDiv);
        this.sidebarContainerDiv.appendChild(this.userProjectsUl);
        this.sidebarContainerDiv.appendChild(this.addProjectBtn);
        this.addProjectBtn.appendChild(this.addProjectIco);
        this.addProjectBtn.appendChild(this.projectBtnSpan);
        this.containerDiv.appendChild(this.contentDiv);
        this.contentDiv.appendChild(this.contentContainerDiv);
        this.contentContainerDiv.appendChild(this.contentHeaderDiv);
        this.contentHeaderDiv.appendChild(this.currentTitleSpan);
        this.contentHeaderDiv.appendChild(this.projectSettingsIcon);
        this.contentContainerDiv.appendChild(this.contentBodyDiv);
        // this.renderItems(this.projCont);
        this.contentBodyDiv.appendChild(this.addItemBtnDiv);
        this.addItemBtnDiv.appendChild(this.addItemIco);
        this.addItemBtnDiv.appendChild(this.addItemSpan);

        // Assigning Eelements Randomness
        this.projectBtnSpan.innerText = "Add Project";
        this.addItemSpan.innerText = "Add Item"

        this.renderProjects(this.projCont);

        // Event Listeners
        this.addProjectBtn.addEventListener("click", function() {
            let eventProjCont = new Projects();
            let projTitle = prompt("Project Title: ");
            eventProjCont.createProject(projTitle);
        });
        this.addItemBtnDiv.addEventListener("click", function() {
            let eventProjCont = new Projects();
            let itemTitle = prompt("Item Title: ");
            let itemDueDate = prompt("Due Date (dd-MMM): ");
            let itemDescription = prompt("Desdcription: ");
            let itemPrio = prompt("Priority (High, Medium, Low): ");
            let itemCompStatus = prompt("Completed? (yes or no): ");
            eventProjCont.addItem(title, dueDate, description, priority, completionStatus);
        })
        this.projectLi.addEventListener("click", function() {
            // renderProject();
        })
    }
    refreshDOM() {
        this.clearDOM();
        let display = new DisplayController();
        display;
    }

    clearDOM() {
        while (this.appDiv.firstChild) {
        this.appDiv.removeChild(this.appDiv.lastChild);
        }
    }

    pageRender() {
        let projCont = JSON.parse(localStorage.getItem('projects'));
        this.clearDOM();
        this.renderProjects(projCont);
    }

    renderProjects(projects) {
        if (projects) {
            for (let i = 0; i < projects.length; i++) {
                this.projectLi = document.createElement("li");
                this.projectLi.classList.add("project");
                console.log(projects);
                this.projectLi.setAttribute("data-id", projects[i].id);
                this.projectLi.textContent = projects[i].title;
                this.userProjectsUl.appendChild(this.projectLi);
            }
        }
    }

    // renderItems(items) {
    //     if ()
    // }
}

export default DisplayController
