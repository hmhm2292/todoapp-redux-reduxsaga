import {connect} from 'react-redux';
import {fetchTodoListAction} from '../actions';
import MainScreen from '../screens/MainScreen';

const mapDispatchToProps = dispatch => ({
  fetchTodoListAction: dispatch(fetchTodoListAction()),
});

export default connect(null, mapDispatchToProps)(MainScreen);
