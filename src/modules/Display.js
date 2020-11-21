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
        // this.favoritesLI = document.createElement("li");
        // favoritesLI.classList.add("project");
        this.sidebarHR = document.createElement("hr");

        // Adding style properties to Elements
        this.containerDiv.id = "container";
        this.sidebarDiv.id = "sidebar";
        this.logoDiv.classList.add("logo");
        this.logoImage.classList.add("logo-icon", "fas", "fa-th-list", "fa-2x");
        this.sidebarContainerDiv.id = "sidebar-container";
        this.favoritesUL.classList.add("favorites");
        this.sidebarHR.classList.add("sidebar-container-hr");

         // Appending Elements
        this.appDiv.appendChild(this.containerDiv);
        this.containerDiv.appendChild(this.sidebarDiv);
        this.sidebarDiv.appendChild(this.logoDiv);
        this.logoDiv.appendChild(this.logoImage);
        this.logoDiv.appendChild(this.logoHR);
        this.sidebarDiv.appendChild(this.sidebarContainerDiv);
        this.sidebarContainerDiv.appendChild(this.favoritesUL);
        this.sidebarContainerDiv.appendChild(this.sidebarHR);

        // delete this, just to make sure appending favorites menu works
        for (let i = 0; i < 5; i++) {
            this.favoritesLI = document.createElement("li");
            if (i === 1) {
                this.favoritesLI.classList.add("project-active");
            } else {
                this.favoritesLI.classList.add("project");
            }
            this.favoritesUL.appendChild(this.favoritesLI).innerText = i;
        }
      }
}

export default DisplayController