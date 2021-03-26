export const listEndPoint = `${process.env.REACT_APP_LIST_API_URL}${process.env.REACT_APP_STOCKS_API_KEY}`;

const STOCKS_FILTERS = {
  PRICE: [
    '<100',
    '100 < Price < 200',
    '200 < Price < 300',
    '300 < Price < 400',
    '400 < Price < 500',
    '>500',
  ],
  SECTOR: [
    'Aerospace & Defense',
    'Airlines',
    'Auto Components',
    'Automobiles',
    'Banking',
    'Basic Materials',
    'Beverages',
    'Biotechnology',
    'Building',
    'Chemicals',
    'Commercial Services & Supplies',
    'Communication Services',
    'Communications',
    'Construction',
    'Consumer Cyclical',
    'Consumer Defensive',
    'Consumer products',
    'Distributors',
    'Diversified Consumer Services',
    'Electrical Equipment',
    'Energy',
    'Financial',
    'Financial Services',
    'Food Products',
    'Health Care',
    'Healthcare',
    'Hotels, Restaurants & Leisure',
    'Industrial Conglomerates',
    'Industrial Goods',
    'Industrials',
    'Insurance',
    'Leisure Products',
    'Life Sciences Tools & Services',
    'Logistics & Transportation',
    'Machinery',
    'Marine',
    'Media',
    'Metals & Mining',
    'Packaging',
    'Paper & Forest',
    'Pharmaceuticals',
    'Professional Services',
    'Real Estate',
    'Retail',
    'Road & Rail',
    'Semiconductors',
    'Technology',
    'Telecommunication',
    'Textiles, Apparel & Luxury Goods',
    'Tobacco',
    'Trading Companies & Distributors',
    'Transportation Infrastructure',
    'Utilities',
  ],
  EXCHANGE: [
    'NYSE', 'NASDAQ', 'AMEX', 'EURONEXT', 'TSX', 'INDEXES', 'ETFs', 'MUTUAL FUNDS', 'FOREX', 'CRYPTO', 'COMMODITY', 'XETRA', 'NSE', 'LSE',
  ],
};

export default STOCKS_FILTERS;
