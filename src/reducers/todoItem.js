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

    case types.ADD_TODO_REQUEST:
      return {...state, loading: true};

    case types.ADD_TODO_FAILED:
      return action.error;

    case types.DELETE_TODO_REQUEST:
      return {...state, loading: true};

    case types.DELETE_TODO_FAILED:
      return action.error;

    case types.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.toggledTodo.id) {
            return action.toggledTodo;
          } else {
            return todo;
          }
        }),
        todoDetail: action.toggledTodo,
      };

    case types.TOGGLE_TODO_FAILED:
      return action.error;

    case types.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.updatedTodo.id) {
            return action.updatedTodo;
          } else {
            return todo;
          }
        }),
        todoDetail: action.updatedTodo,
      };

    case types.UPDATE_TODO_FAILED:
      return action.error;

    case types.GOTO_TODO_DETAIL:
      return {
        ...state,
        todoDetail: state.todoList.filter(todo => todo.id === action.itemId)[0],
        todoDetailId: action.itemId,
      };

    default:
      return state;
  }
};

export default todoItem;
