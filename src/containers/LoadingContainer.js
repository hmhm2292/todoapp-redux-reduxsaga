import {connect} from 'react-redux';
import LoadingComponent from '../components/LoadingComponent';

const mapStateToProps = state => ({
  loading: state.todoItem.loading,
});

export default connect(mapStateToProps, null)(LoadingComponent);
