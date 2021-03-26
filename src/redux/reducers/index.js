import { combineReducers } from 'redux';
import filterReducer from './filter';
import stocksReducer from './stocks';

const rootReducer = combineReducers({ stocks: stocksReducer, filter: filterReducer });

export default rootReducer;
