import { GET_STOCK_LIST } from '../../../redux/actionTypes';
import stocksReducer from '../../../redux/reducers/stocks';

describe('stocksReducer', () => {
  const initState = {
    stocks: [],
    profiles: [],
    quotas: [],
    news: [],
  };

  const stocksAction = () => ({
    type: GET_STOCK_LIST,
    payload: {
      stocks: [
        {
          symbol: 'SPY', name: 'SPDR S&P 500', price: 395.98, exchange: 'New York Stock Exchange Arca',
        },
        {
          symbol: 'CMCSA', name: 'Comcast Corp', price: 55.18, exchange: 'Nasdaq Global Select',
        },
        {
          symbol: 'KMI', name: 'Kinder Morgan Inc', price: 16.8, exchange: 'New York Stock Exchange',
        },
      ],
    },
  });

  const newState = {
    stocks: [
      {
        symbol: 'SPY', name: 'SPDR S&P 500', price: 395.98, exchange: 'New York Stock Exchange Arca',
      },
      {
        symbol: 'CMCSA', name: 'Comcast Corp', price: 55.18, exchange: 'Nasdaq Global Select',
      },
      {
        symbol: 'KMI', name: 'Kinder Morgan Inc', price: 16.8, exchange: 'New York Stock Exchange',
      },
    ],
    profiles: [],
    quotas: [],
    news: [],
  };

  test('returns current state', () => {
    expect(stocksReducer(initState, stocksAction)).toStrictEqual(newState);
  });
});
