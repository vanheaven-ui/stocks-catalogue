import { CHANGE_FILTER, GET_PROFILE, GET_STOCK_LIST } from './actionTypes';

const getStockList = stocks => ({
  type: GET_STOCK_LIST,
  payload: stocks,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

const getProfile = profile => ({
  type: GET_PROFILE,
  payload: profile,
});

export { getStockList, changeFilter, getProfile };
