import Stock from './Stock';
import StocksFilter from './StockFilter';

const StockList = () => (
  <>
    <StocksFilter />
    <h2>This is gonna be how the stocks are displayed on the home page</h2>
    <Stock />
    <p>Would be better if we can have pagination</p>
  </>
);

export default StockList;
