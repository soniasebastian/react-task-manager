import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';


function App() {
  return (
    <div className="Task Manager App">
      <Task />
      <TaskForm/>
      <TaskFilter/>
      <TaskList />
    </div>
  );
}

export default App;
