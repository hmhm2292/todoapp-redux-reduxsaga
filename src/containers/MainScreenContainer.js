import {connect} from 'react-redux';
import {fetchTodoListAction} from '../actions';
import MainScreen from '../screens/MainScreen';

const mapStateToProps = state => ({
  todoList: state.todoItem.todoList,
});

const mapDispatchToProps = dispatch => ({
  fetchTodoListAction: () => dispatch(fetchTodoListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
