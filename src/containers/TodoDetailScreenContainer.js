import {connect} from 'react-redux';
import {toggleTodoAction, deleteTodoAction, updateTodoAction} from '../actions';
import TodoDetailScreen from '../screens/TodoDetailScreen';

const mapStateToProps = state => ({
  todoDetail: state.todoItem.todoDetail,
  todoList: state.todoItem.todoList,
});

const mapDispatchToProps = dispatch => ({
  toggleTodoAction: (itemId, isCompleted, todoText) =>
    dispatch(toggleTodoAction(itemId, isCompleted, todoText)),
  deleteTodoAction: itemId => dispatch(deleteTodoAction(itemId)),
  updateTodoAction: (itemId, isCompleted, todoText) =>
    dispatch(updateTodoAction(itemId, isCompleted, todoText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailScreen);
