import React, { createContext, useEffect, useReducer } from 'react';
import { taskListReducer, initialState } from './TaskListReducer';
import { taskListActions } from './TaskListActions';

export const TaskListContext = createContext(initialState);

const TaskListContextProvider = (props) => {
  const localState =
    JSON.parse(localStorage.getItem('taskListState')) || initialState;
  const [state, dispatch] = useReducer(taskListReducer, localState);

  const {
    addTask,
    removeTask,
    clearTasks,
    findItem,
    editTask,
  } = taskListActions(dispatch);

  useEffect(() => {
    localStorage.setItem('taskListState', JSON.stringify(state));
  }, [state]);

  return (
    <TaskListContext.Provider
      value={{
        state,
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
