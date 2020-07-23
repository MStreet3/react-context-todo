import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask, clearTasks, editItem, editTask } = useContext(
    TaskListContext
  );
  const btnText = editItem ? 'Edit' : 'Add Task';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask({ title, id: editItem.id });
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);
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
          {btnText}
        </button>
        <button classname="btn clear-btn" onClick={() => clearTasks()}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
