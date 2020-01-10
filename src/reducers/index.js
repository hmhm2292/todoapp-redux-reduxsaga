import {combineReducers} from 'redux';
import todoItem from './todoItem';

const rootReducer = combineReducers({
  todoItem: todoItem,
});

export default rootReducer;
