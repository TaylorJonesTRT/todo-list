import PromjectModel from "./models/project.model";
import ItemModel from "./models/item.model";
import DisplayController from "./Display";
import ProjectModel from "./models/project.model";

class Projects {
    constructor() {    
        this.projects = JSON.parse(localStorage.getItem('projects')) || [new ProjectModel('Default')];
        this.pageRender();
    }

    createProject(title) {
        const newProject = new ProjectModel(title);
    }
}

export default Projects;
