import {connect} from 'react-redux';
import {addTodoAction, toggleTodoAction, deleteTodoAction} from '../actions';
import TodoListComponent from '../components/TodoListComponent';

const mapStateToProps = state => ({
  todoList: state.todoItem.todoList,
});

const mapDispatchToProps = dispatch => ({
  toggleTodoAction: (itemId, isCompleted, todoText) =>
    dispatch(toggleTodoAction(itemId, isCompleted, todoText)),
  deleteTodoAction: itemId => dispatch(deleteTodoAction(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
