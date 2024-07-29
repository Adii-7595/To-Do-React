import React, { useState } from 'react';
import './styles/TaskItem.css'; 

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleUpdate = () => {
        updateTask(task.id, { title, description });
        setIsEditing(false);
    };

    return (
        <div className="task-item">
            <h3 
                className={task.completed ? 'completed' : ''}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {task.title}
            </h3>
            {isExpanded && (
                <div className="expandable-content">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            <button onClick={handleUpdate}>Save</button>
                        </>
                    ) : (
                        <>
                            <p>{task.description}</p>
                            <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                            <button 
                                onClick={() => updateTask(task.id, { completed: !task.completed })}
                                className={task.completed ? 'btn-undo' : 'btn-done'}
                            >
                                {task.completed ? 'Undo' : 'Done'}
                            </button>
                            <button 
                                onClick={() => deleteTask(task.id)}
                                className="btn-delete"
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default TaskItem;
