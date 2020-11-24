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

    addItem(title, dueDate, description, priority, completionStatus) {
        // Need to create display items first for the new item form
        // so that can grab data from the input values
        let newItem = new ItemModel(title, dueDate, description, priority, completionStatus);
    }
}

export default Projects;
