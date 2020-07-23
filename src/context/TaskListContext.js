import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const removeTask = (removedId) => {
    setTasks(tasks.filter(({ id }) => id !== removedId));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = ({ title, id }) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          title,
          id,
        };
      }
      return task;
    });
    setTasks(newTasks);
    setEditItem(null);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskListContext.Provider
      value={{
        editItem,
        tasks,
        addTask,
        removeTask,
        clearTasks,
        findItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
