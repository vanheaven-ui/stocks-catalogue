import { filterByExchange, getStocksByPrice } from '../../redux/selectors';

describe('selector redux helper methods', () => {
  const dummyStocks = [
    {
      name: 'lorem ipsum', symbol: 'LI', price: 220, exchange: 'ex1',
    },
    {
      name: 'lorem ipsum', symbol: 'LI', price: 550, exchange: 'New York Stock Exchange Arca',
    },
    {
      name: 'lorem ipsum', symbol: 'LI', price: 110, exchange: 'ex2',
    },
    {
      name: 'lorem ipsum', symbol: 'LI', price: 20, exchange: 'ex3',
    },
    {
      name: 'lorem ipsum', symbol: 'LI', price: 150, exchange: 'New York Stock Exchange Arca',
    },
    {
      name: 'lorem ipsum', symbol: 'LI', price: 250, exchange: 'New York Stock Exchange Arca',
    },
  ];

  describe('getStocksByPrice method', () => {
    const expected = [
      {
        name: 'lorem ipsum', symbol: 'LI', price: 110, exchange: 'ex2',
      },
      {
        name: 'lorem ipsum', symbol: 'LI', price: 150, exchange: 'New York Stock Exchange Arca',
      },
    ];

    test('filters in ascending order of price', () => {
      expect(getStocksByPrice(dummyStocks, '100 < Price < 200')).toStrictEqual(expected);
    });
  });

  describe('filterByExchange method', () => {
    const expected = [
      {
        name: 'lorem ipsum', symbol: 'LI', price: 550, exchange: 'New York Stock Exchange Arca',
      },
      {
        name: 'lorem ipsum', symbol: 'LI', price: 150, exchange: 'New York Stock Exchange Arca',
      },
      {
        name: 'lorem ipsum', symbol: 'LI', price: 250, exchange: 'New York Stock Exchange Arca',
      },
    ];
    test('filters by exchange', () => {
      expect(filterByExchange(dummyStocks, 'New York Stock Exchange Arca')).toStrictEqual(expected);
    });
  });
});
