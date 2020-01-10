import {connect} from 'react-redux';
import {addTodoAction, toggleTodoAction} from '../actions';
import TodoListComponent from '../components/TodoListComponent';

const mapStateToProps = state => ({
  todoItem: state.todoItem,
});

const mapDispatchToProps = dispatch => ({
  toggleTodoAction: (id, isCompleted, todoText) =>
    dispatch(toggleTodoAction(id, isCompleted, todoText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
