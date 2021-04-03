// export const listEndPoint =
// `${process.env.REACT_APP_LIST_API_URL}${process.env.REACT_APP_STOCKS_API_KEY}`;
export const listEndPoint = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=ef56e9bca09781d1d8bdac85bba6603b';
export const profileEndPoint = 'https://financialmodelingprep.com/api/v3/profile/';

const STOCKS_FILTERS = {
  PRICE: [
    '<100',
    '100 < Price < 200',
    '200 < Price < 300',
    '300 < Price < 400',
    '400 < Price < 500',
    '>500',
  ],
  EXCHANGE: [],
};

export default STOCKS_FILTERS;
