import * as types from '../actions/actionTypes';

const INITIAL_STATE = {};

const todoItem = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_TODO_LIST:
      return {...state, loading: true};

    case types.FETCH_TODO_SUCCESS:
      return {
        ...state,
        todoList: action.fetchedTodoList,
        loading: false,
      };

    case types.ADD_TODO_FAILED:
      return action.error;

    case types.DELETE_TODO_FAILED:
      return action.error;

    // case types.TOGGLE_TODO: {
    //   return state.map(todo => {
    //     if (todo.id === action.itemId) {
    //       if (action.isCompleted === '1') {
    //         return {...todo, id: action.id, content: `0#${action.todoText}`};
    //       } else if (action.isCompleted === '0') {
    //         return {...todo, id: action.id, content: `1#${action.todoText}`};
    //       }
    //     } else {
    //       return todo;
    //     }
    //   });
    // }

    default:
      return state;
  }
};

export default todoItem;
