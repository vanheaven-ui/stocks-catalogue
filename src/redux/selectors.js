const getStocksByPrice = (stocks, priceRange) => {
  const filteredStockPrice = stocks ? (stocks.filter(stock => {
    switch (priceRange) {
      case '<100':
        return stock.price < 100;
      case '100 < Price < 200':
        return stock.price > 100 && stock.price < 200;
      case '200 < Price < 300':
        return stock.price > 200 && stock.price < 300;
      case '300 < Price < 400':
        return stock.price > 300 && stock.price < 400;
      case '400 < Price < 500':
        return stock.price > 400 && stock.price < 500;
      case '>500':
        return stock.price > 500;
      default:
        return null;
    }
  })) : null;
  const ascending = filteredStockPrice.sort((a, b) => a.price - b.price);
  return ascending;
};

const filterByExchange = (stocks, exchange) => {
  const filteredStocks = stocks ? (stocks.filter(stock => {
    switch (exchange) {
      case 'New York Stock Exchange Arca':
        return stock.exchange === 'New York Stock Exchange Arca';
      case 'Nasdaq Global Select':
        return stock.exchange === 'Nasdaq Global Select';
      case 'New York Stock Exchange':
        return stock.exchange === 'New York Stock Exchange';
      case 'Nasdaq Global Market':
        return stock.exchange === 'Nasdaq Global Market';
      case 'Nasdaq Capital Market':
        return stock.exchange === 'Nasdaq Capital Market';
      case 'BATS Exchange':
        return stock.exchange === 'BATS Exchange';
      case 'NYSE American':
        return stock.exchange === 'NYSE American';
      default:
        return null;
    }
  })) : null;
  return filteredStocks;
};

export { getStocksByPrice, filterByExchange };
