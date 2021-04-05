import { CHANGE_FILTER } from '../actionTypes';

const initState = {
  filter: 'All',
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
