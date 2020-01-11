import {connect} from 'react-redux';
import {
  addTodoAction,
  toggleTodoAction,
  deleteTodoAction,
  goToDetailAction,
} from '../actions';
import TodoListComponent from '../components/TodoListComponent';

const mapStateToProps = state => ({
  todoList: state.todoItem.todoList,
});

const mapDispatchToProps = dispatch => ({
  toggleTodoAction: (itemId, isCompleted, todoText) =>
    dispatch(toggleTodoAction(itemId, isCompleted, todoText)),
  deleteTodoAction: itemId => dispatch(deleteTodoAction(itemId)),
  goToDetailAction: itemId => dispatch(goToDetailAction(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
