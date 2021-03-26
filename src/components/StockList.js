import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../common/hooks/useFetch';
import { listEndPoint } from '../constants';
import { getStockList } from '../redux/actions';
import Stock from './Stock';
import StocksFilter from './StockFilter';

const StockList = () => {
  const dispatch = useDispatch();
  const { data: stocks } = useFetch(listEndPoint);
  dispatch(getStockList(stocks));
  const { filter } = useSelector(state => state.filter.filter);
  console.log(filter);

  // const renderFilteredStocks = () => {

  // }
  return (
    <>
      <StocksFilter />
      <h2>Stock List</h2>
      { stocks && stocks.slice(0, 100).map(stock => (
        <article key={`stck-${stock.symbol}`}>
          <Stock stock={stock} />
        </article>
      ))}
      <p>Would be better if we can have pagination</p>
    </>
  );
};

export default StockList;
