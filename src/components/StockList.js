import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import useFetch from '../common/hooks/useFetch';
// import { listEndPoint } from '../constants';
import { getStockList } from '../redux/actions';
import getStocksByPrice from '../redux/selectors';
// import ApiHandler from '../utils/apiHandler';
import Stock from './Stock';
import StocksFilter from './StockFilter';

const StockList = () => {
  const dispatch = useDispatch();
  // const { data } = useFetch(listEndPoint);
  const stocks = JSON.parse(localStorage.getItem('stocks'));
  dispatch(getStockList(stocks));
  // localStorage.setItem('stocks', JSON.stringify(data));
  const filter = useSelector(state => state.filter.filter);

  // get profiles;

  const renderFilteredStocks = (() => {
    const filtered = filter === 'All' ? stocks : getStocksByPrice(stocks, filter);
    return filtered;
  })();

  return (
    <>
      <StocksFilter />
      <h2>Stock List</h2>
      { stocks && renderFilteredStocks.slice(0, 99).map(stock => (
        <article key={`stck-${stock.symbol}`}>
          <Stock stock={stock} />
        </article>
      ))}
      <p>Would be better if we can have pagination</p>
    </>
  );
};

export default StockList;
