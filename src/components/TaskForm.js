import React, {useState} from 'react';

function TaskForm ({onAddTask}) {
    const [title, setTitle ] = useState ('');
    const [dueDate, setDueDate] = useState ('');
    const [category, setCategory] = useState('work');


    const handleAddTask = () => {
        if (title && dueDate && category) {
            onAddTask(title, dueDate, category); 
                setTitle('');
                setDueDate('');
                setCategory('work');

            }
        };

        return (
            <div>
                <h2>Add Tasks</h2>
                <input
                 type="text"
                 placeholder="Task Title"
                 value= {title}
                 onChange= {(e)=> setTitle(e.target.value)}
                />
                <input
                type= "date"
                value= {dueDate}
                onChange = {(e) => setDueDate(e.target.value)}
                />
                <select value = {category} onChange= {(e) => setCategory(e.target.value) }>
                    <option value= "Work">Work</option>
                    <option value= "Personal">Personal</option>
                    <option value= "School">School</option>
                </select>
                <button onClick= {handleAddTask}>Add Task</button>
            </div>
        )
    }

    export default TaskForm;