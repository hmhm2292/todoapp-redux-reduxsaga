import {connect} from 'react-redux';
import {setFilterStatusAction} from '../actions';
import FilterBarComponent from '../components/FilterBarComponent';

const mapDispatchToProps = dispatch => ({
  setFilterStatusAction: filterStatus =>
    dispatch(setFilterStatusAction(filterStatus)),
});

export default connect(null, mapDispatchToProps)(FilterBarComponent);
