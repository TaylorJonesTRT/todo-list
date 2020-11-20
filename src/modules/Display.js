const displayController = () => {
    // DOM Elements
    let appDiv = document.getElementById("app");

    // Creating Elements
    let containerDiv = document.createElement("div");
    containerDiv.id = "container";

    let sidebarDiv = document.createElement("div");
    sidebarDiv.id = "sidebar";

    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    let logoImage = document.createElement("i");
    logoImage.classList.add("logo-icon", "fas", "fa-th-list", "fa-2x");
    let logoHR = document.createElement("hr");
    
    let sidebarContainerDiv = document.createElement("div");
    sidebarContainerDiv.id = "sidebar-container";
    let favoritesUL = document.createElement("ul");
    favoritesUL.classList.add("favorites");
    // let favoritesLI = document.createElement("li");
    // favoritesLI.classList.add("project");
    let sidebarHR = document.createElement("hr");
    sidebarHR.classList.add("sidebar-container-hr");

    // Appending Elements
    appDiv.appendChild(containerDiv);
    containerDiv.appendChild(sidebarDiv);
    sidebarDiv.appendChild(logoDiv);
    logoDiv.appendChild(logoImage);
    logoDiv.appendChild(logoHR);
    sidebarDiv.appendChild(sidebarContainerDiv);
    sidebarContainerDiv.appendChild(favoritesUL);
    sidebarContainerDiv.appendChild(sidebarHR);

    // delete this, just to make sure appending favorites menu works
    for (let i = 0; i < 5; i++) {
        let favoritesLI = document.createElement("li");
        if (i === 1) {
            favoritesLI.classList.add("project-active");
        } else {
            favoritesLI.classList.add("project");
        }
        favoritesUL.appendChild(favoritesLI).innerText = i;
    }
}

export { displayController }