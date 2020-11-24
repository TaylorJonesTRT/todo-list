class ItemModel {
    constructor(title, dueDate, description, priority, completionStatus=false) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.completionStatus = completionStatus;
    }
}

export default ItemModel
