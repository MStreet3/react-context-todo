import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskListContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task.."
        required
      />
      <div className="buttons">
        <button type="submit" classname="btn add-task-btn">
          Add Task
        </button>
        <button classname="btn clear-btn">Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
