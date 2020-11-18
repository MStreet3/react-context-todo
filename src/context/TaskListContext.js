import React, { createContext, useEffect, useReducer } from 'react';
import { taskListReducer, initialState } from './TaskListReducer';
import { taskListActions } from './TaskListActions';

export const TaskListContext = createContext(initialState);

const TaskListContextProvider = (props) => {
  const localState = JSON.parse(localStorage.getItem('taskListState')) || initialState;

  const [state, dispatch] = useReducer(taskListReducer, localState);

  useEffect(() => {
    localStorage.setItem('taskListState', JSON.stringify(state));
  }, [state]);

  return (
    <TaskListContext.Provider
      value={{
        state,
        ...taskListActions(dispatch),
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
