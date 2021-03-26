import { CHANGE_FILTER, GET_STOCK_LIST } from './actionTypes';

const getStockList = stocks => ({
  type: GET_STOCK_LIST,
  payload: stocks,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export { getStockList, changeFilter };
