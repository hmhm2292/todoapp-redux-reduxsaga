import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  filterStatus: 'View All',
};

const filterStatus = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_FILTER_STATUS:
      return {...state, filterStatus: action.filterStatus};
    default:
      return state;
  }
};

export default filterStatus;
