import PromjectModel from "./models/project.model";
import ItemModel from "./models/item.model";
import DisplayController from "./Display";
import ProjectModel from "./models/project.model";

class Projects {
    constructor() {
        this.projects = JSON.parse(localStorage.getItem('projects')) || [];
    }

    createProject(title) {
        const newProject = new ProjectModel(title);
        const newDisplay = new DisplayController();
        this.projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(this.projects));
        newDisplay.refreshDOM();
    }

    // pageRender() {
    //     let render = new DisplayController();
    //     // render.renderProjects(this.projets);
    // }
}

export default Projects;
