class Item {
    constructor(title, dueDate, priority, completionStatus) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completionStatus = completionStatus;
    }
}

const createItem = () => {
    let title = prompt("Title: ");
    let dueDate = prompt("Due Date: ");
    let priority = prompt("Priority: ");
    let completionStatus = prompt("Finished: ");

    let newItem = new  Item(title, dueDate, priority, completionStatus);
    console.log(newItem);
}

export { createItem };