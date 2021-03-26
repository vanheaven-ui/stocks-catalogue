import { compose, createStore } from 'redux';
import rootReducer from './reducers';

const storeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
);

const store = createStore(rootReducer, storeEnhancers);

export default store;
