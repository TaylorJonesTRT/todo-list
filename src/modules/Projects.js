import PromjectModel from "./models/project.model";
import ItemModel from "./models/item.model";
import DisplayController from "./Display";
import ProjectModel from "./models/project.model";

class Projects {
    constructor() {
        this.projects = JSON.parse(localStorage.getItem('projects')) || [new ProjectModel('Default')];
        this.favorites = ["Inbox", "Today", "Soon"];
        this.inbox = [];
        this.today = [];
        this.soon = [];
        this.pageRender();
    }

    createProject(title) {
        const newProject = new ProjectModel(title);
        this.projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    pageRender() {
        let render = new DisplayController();
        render.renderFavorites(this.favorites);
        // render.renderProjects(this.projets);
    }
}

export default Projects;
