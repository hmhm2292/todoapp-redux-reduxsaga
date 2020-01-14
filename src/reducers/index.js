import {combineReducers} from 'redux';
import todoItem from './todoItem';
import filterStatus from './filterStatus';

const rootReducer = combineReducers({
  todoItem: todoItem,
  filterStatus: filterStatus,
});

export default rootReducer;
