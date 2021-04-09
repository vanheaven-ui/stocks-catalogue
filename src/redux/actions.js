import {
  CHANGE_FILTER, GET_NEWS, GET_PROFILE, GET_QUOTA, GET_STOCK_LIST,
} from './actionTypes';

const getStockList = (stocks) => ({
  type: GET_STOCK_LIST,
  payload: stocks,
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

const getProfile = (profile) => ({
  type: GET_PROFILE,
  payload: profile,
});

const getNews = (news) => ({
  type: GET_NEWS,
  payload: news,
});

const getQuotas = (quotas) => ({
  type: GET_QUOTA,
  payload: quotas,
});

export {
  getStockList, changeFilter, getProfile, getQuotas, getNews,
};
