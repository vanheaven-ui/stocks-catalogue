import { changeFilter } from '../../../redux/actions';
import { CHANGE_FILTER } from '../../../redux/actionTypes';
import filterReducer from '../../../redux/reducers/filter';
import store from '../../../redux/store';

describe('stocksReducer', () => {
  const newState = {
    filter: {
      price: '100 < Price < 200',
      exchange: null,
    },
  };

  test('returns current state', () => {
    store.dispatch(changeFilter({ price: '100 < Price < 200', exchange: null }));
    expect(filterReducer({ type: CHANGE_FILTER, payload: { price: '100 < Price < 200', exchange: null } }).toStrictEqual(newState));
  });
});
