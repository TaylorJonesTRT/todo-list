import Projects from "./Projects";

class DisplayController {
    // DOM Elements
    constructor() {
        this.appDiv = document.getElementById("app");

        // Creating Elements
        this.containerDiv = document.createElement("div");

        this.sidebarDiv = document.createElement("div");

        this.logoDiv = document.createElement("div");
        this.logoImage = document.createElement("i");
        this.logoHR = document.createElement("hr");
        
        this.sidebarContainerDiv = document.createElement("div");
        this.favoritesUL = document.createElement("ul");
        this.sidebarHR = document.createElement("hr");
        this.userProjectsUl = document.createElement("ul");
        this.addProjectBtn = document.createElement("BUTTON");
        this.addProjectIco = document.createElement("i");
        this.projectBtnSpan = document.createElement("span");

        // Adding style properties to Elements
        this.containerDiv.id = "container";
        this.sidebarDiv.id = "sidebar";
        this.logoDiv.classList.add("logo");
        this.logoImage.classList.add("logo-icon", "fas", "fa-th-list", "fa-2x");
        this.sidebarContainerDiv.id = "sidebar-container";
        this.favoritesUL.classList.add("favorites");
        this.sidebarHR.classList.add("sidebar-container-hr");
        this.userProjectsUl.classList.add("user-projects");
        this.addProjectBtn.classList.add("add-project-btn");
        this.addProjectIco.classList.add("fas", "fa-plus", "project-btn");
        this.projectBtnSpan.classList.add("add-task-text");

         // Appending Elements
        this.appDiv.appendChild(this.containerDiv);
        this.containerDiv.appendChild(this.sidebarDiv);
        this.sidebarDiv.appendChild(this.logoDiv);
        this.logoDiv.appendChild(this.logoImage);
        this.logoDiv.appendChild(this.logoHR);
        this.sidebarDiv.appendChild(this.sidebarContainerDiv);
        this.sidebarContainerDiv.appendChild(this.favoritesUL);
        this.sidebarContainerDiv.appendChild(this.sidebarHR);
        this.sidebarContainerDiv.appendChild(this.userProjectsUl);
        this.sidebarContainerDiv.appendChild(this.addProjectBtn);
        this.addProjectBtn.appendChild(this.addProjectIco);
        this.addProjectBtn.appendChild(this.projectBtnSpan);

        // Assigning Eelements Randomness
        this.projectBtnSpan.innerText = "Add Project";

        // Event Listeners

    }
    renderFavorites(favorites) {
        for (let i = 0; i < favorites.length; i++) {
            this.favoritesLi = document.createElement("li");
            this.favoritesLi.classList.add("project");
            console.log(favorites[i]);
            this.favoritesLi.textContent = favorites[i];
            this.favoritesUL.appendChild(this.favoritesLi);
        }
    }
    // renderProjects(projects) {
    //     if (projects.length === undefined) {
    //         console.log("no projects yet");
    //     } else {
    //         for (let i = 0; i < projects.length; i++) {
    //             this.projectsLi = document.createElement("li");
    //             this.projectsLi.classList.add("project");
    //             console.log(projects[i]);
    //             this.projectsLi.textContent = projects[i];
    //             this.userProjectsUl.appendChild(this.projectsLi);
    //         }
    //     }
    // }
}

export default DisplayController
