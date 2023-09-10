import React from 'react';

function TaskList ({tasks, onDeleteTask}) {
    if (tasks.length === 0) {
        return <p>No tasks yet</p>
    }

    return (
        <div>
            <h2>Task List</h2>
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Due Date</th>
                    <th>Category</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task)=> (
                       <tr key = {task.id}>
                        <td>{task.title}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.category}</td>
                        <td><button onClick= {() => onDeleteTask(task.id)}></button>
                        </td>
                       </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}



export default TaskList;