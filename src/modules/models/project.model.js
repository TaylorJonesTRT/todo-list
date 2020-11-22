class ProjectModel {
    constructor(id = 3, title, todos = []) {
        this.title = title;
        this.todos = todos;
        this.id = id;
        this.id++;
    }
}

export default ProjectModel;