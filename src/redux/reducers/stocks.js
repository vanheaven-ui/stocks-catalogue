import { GET_STOCK_LIST } from '../actionTypes';

const initState = {
  stocks: [],
};

const stocksReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_STOCK_LIST:
      return {
        ...state,
        stocks: action.payload,
      };
    default:
      return state;
  }
};

export default stocksReducer;
