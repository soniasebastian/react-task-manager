import '../App.css'; 

function Task(id, title, dueDate, category) {
    return {
        id,
        title,
        dueDate,
        category,
    };
}

export default Task;