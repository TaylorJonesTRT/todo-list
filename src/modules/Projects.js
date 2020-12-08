import ItemModel from "./models/item.model";
import DisplayController from "./Display";
import ProjectModel from "./models/project.model";

class Projects {
    constructor() {
        this.projects = JSON.parse(localStorage.getItem('projects')) || [];
    }

    createProject(title) {
        const newProject = new ProjectModel(title);
        this.projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    addItem(title, dueDate, description, priority, completionStatus, projId) {
        let newItem = new ItemModel(title, dueDate, description, priority, completionStatus);
        this.projects.find(p => p.id === projId).todos.push(newItem);
        localStorage.setItem("projects", JSON.stringify(this.projects));
        const display = new DisplayController();
    }
}

export default Projects;
