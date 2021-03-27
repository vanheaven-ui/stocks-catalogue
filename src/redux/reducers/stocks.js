import { GET_PROFILE, GET_STOCK_LIST } from '../actionTypes';

const initState = {
  stocks: [],
  profiles: [],
};

const stocksReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_STOCK_LIST:
      return {
        ...state,
        stocks: action.payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
};

export default stocksReducer;
