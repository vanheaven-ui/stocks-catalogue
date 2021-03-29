import {
  GET_NEWS, GET_PROFILE, GET_QUOTA, GET_STOCK_LIST,
} from '../actionTypes';

const initState = {
  stocks: [],
  profiles: [],
  quotas: [],
  news: [],
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
    case GET_QUOTA:
      return {
        ...state,
        quotas: action.payload,
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export default stocksReducer;
