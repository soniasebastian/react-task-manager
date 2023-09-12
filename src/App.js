// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css'; 
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    // Load tasks from local storage if available
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Filter tasks based on the selected category
    if (selectedCategory === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.category === selectedCategory));
    }
  }, [tasks, selectedCategory]);

  const handleAddTask = (title, dueDate, category) => {
    const newTask = new Task(
      Date.now(),
      title,
      dueDate,
      category
    );
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
    <div className= "nav">
       <nav>
      <h1>React Task Manager</h1>
      </nav>
    </div>
    <div className="App">
     
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter
        categories={['All', 'Work', 'Personal', 'School']}
        onSelectCategory={setSelectedCategory}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
    </>
  );
}

export default App;
