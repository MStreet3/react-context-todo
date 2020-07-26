export const taskListActions = (dispatch) => {
  return {
    addTask: (title) => dispatch({ type: 'ADD_TASK', payload: title }),
    removeTask: (id) => dispatch({ type: 'REMOVE_TASK', payload: id }),
    clearTasks: () => dispatch({ type: 'CLEAR_TASKS' }),
    findItem: (id) => dispatch({ type: 'SET_EDIT_ITEM', payload: id }),
    editTask: ({ title, id }) =>
      dispatch({ type: 'EDIT_TASK', payload: { title, id } }),
  };
};
