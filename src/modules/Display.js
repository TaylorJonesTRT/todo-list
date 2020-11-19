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

    // Appending Elements
    appDiv.appendChild(containerDiv);
    containerDiv.appendChild(sidebarDiv);
    sidebarDiv.appendChild(logoDiv);
    logoDiv.appendChild(logoImage);
}

export { displayController }