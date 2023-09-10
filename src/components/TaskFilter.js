import React from 'react';

function TaskFilter ({categories, onSelectCategory}) {
    return (
        <div>
            <h2>Filter by Category</h2>
            <select onChange={(e) => onSelectCategory(e.target.value)}>
                {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
                ))}
            </select>
        </div>
    )
}


export default TaskFilter;