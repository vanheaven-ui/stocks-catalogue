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

export default getStocksByPrice;
