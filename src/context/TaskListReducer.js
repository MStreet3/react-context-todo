import { v4 as uuidv4 } from 'uuid';
export const initialState = {
  tasks: [],
  editItem: undefined,
};

export const taskListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { title: action.payload, id: uuidv4() }],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.payload),
      };
    case 'CLEAR_TASKS':
      return {
        ...state,
        tasks: [],
      };
    case 'SET_EDIT_ITEM':
      return {
        ...state,
        editItem: state.tasks.find((task) => task.id === action.payload),
      };
    case 'EDIT_TASK':
      return {
        editItem: undefined,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              title: action.payload.title,
              id: action.payload.id,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};
