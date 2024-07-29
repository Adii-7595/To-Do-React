import React from 'react';
import TaskItem from './TaskItem';
import './styles/TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    return (
        <div className="task-list">
            {tasks && tasks.map(task => (
                <div className="task-item" key={task.id}>
                    <TaskItem 
                        task={task} 
                        updateTask={updateTask} 
                        deleteTask={deleteTask} 
                    />
                </div>
            ))}
        </div>
    );
};

export default TaskList;
