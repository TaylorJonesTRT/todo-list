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
    }

    editItem() {}

    removeItem(projId, itemId) {
        let workingProj = this.projects.find(p => p.id === projId);
        let workingItem = workingProj.todos.find(i => i.id === itemId);

        let itemIndex = workingProj.todos.indexOf(workingItem);
        console.log(itemIndex);
        delete this.projects.todos.workingItem;
        // localStorage.setItem("projects", JSON.stringify(this.projects));
        console.log(this.projects);
    }
}

export default Projects;
