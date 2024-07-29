import './App.css';
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Load tasks from localStorage
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        
        if (savedTasks) {
            const arr = JSON.parse(savedTasks);
            setTasks(arr);
        } else {
            // If no saved tasks, load initial data from JSON file
            import('./data/tasks.json').then(data => setTasks(data.default));
        }
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        if (tasks) localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false, timestamp: new Date().toISOString() }]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask, timestamp: new Date().toISOString() } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTasks = tasks && tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            <div className="todo-container">
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Search tasks"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
                <TaskForm addTask={addTask} />
                <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
};

export default App;
