import {connect} from 'react-redux';
import {addTodoAction} from '../actions';
import InputBarComponent from '../components/InputBarComponent';

const mapDispatchToProps = dispatch => ({
  addTodoAction: newTodo => dispatch(addTodoAction(newTodo)),
});

export default connect(null, mapDispatchToProps)(InputBarComponent);
