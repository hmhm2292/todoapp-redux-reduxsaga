import * as types from '../actions/actionTypes';

const INITIAL_STATE = [];

const todoItem = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_TODO_SUCCESS:
      return action.fetchedTodoList;

    case types.ADD_TODO:
      return [
        ...state,
        {
          content: action.newTodo,
        },
      ];

    case types.TOGGLE_TODO: {
      return state.map(todo => {
        if (todo.id === action.itemId) {
          if (action.isCompleted === '1') {
            return {...todo, id: action.id, content: `0#${action.todoText}`};
          } else if (action.isCompleted === '0') {
            return {...todo, id: action.id, content: `1#${action.todoText}`};
          }
        } else {
          return todo;
        }
      });
    }

    default:
      return state;
  }
};

export default todoItem;
