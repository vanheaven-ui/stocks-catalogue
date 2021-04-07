import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { changeFilter } from '../redux/actions'; // , getStockList
import StocksFilter from '../components/StockFilter';
// import useFetch1 from '../common/hooks/useFetch1';
import STOCKS_FILTERS from '../constants'; // ,  { listEndPoint }
import { filterByExchange, getStocksByPrice } from '../redux/selectors';
import Stock from '../components/Stock';
import styles from '../styles/paginate.module.css';
import Loading from '../components/Loading';
import removeDups from '../utils/removeDups';
import style from '../styles/stockList.module.css';

const StockList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const stocksPerPage = 20;
  const stocksDisplayed = pageNumber * stocksPerPage;

  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    price: null,
    exchange: null,
  });

  const isLoading = false;
  // const { data, isLoading } = useFetch1(listEndPoint);

  // if (data.length > 0) {
  //   localStorage.setItem('stocks', JSON.stringify(data));
  //   dispatch(getStockList(data));
  // }

  // const stocks = useSelector((state) => state.stocks.stocks);
  const stocks = JSON.parse(localStorage.getItem('stocks'));

  const exchanges = stocks ? stocks.slice(0, 1000).map((stock) => stock.exchange) : null;
  STOCKS_FILTERS.EXCHANGE = exchanges;

  STOCKS_FILTERS.EXCHANGE = removeDups(STOCKS_FILTERS.EXCHANGE);

  const handleChange = (e) => {
    if (e.target.name === 'PRICE') {
      setFilter({ ...filter, price: e.target.value });
    } if (e.target.name === 'EXCHANGE') {
      setFilter({ ...filter, exchange: e.target.value });
    }
    return 'default';
  };

  const chosenValue = (() => {
    if (filter.price) {
      return filter.price;
    } if (filter.exchange) {
      return filter.exchange;
    }
    return 'All';
  })();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeFilter(filter));
    setFilter('default');
  };

  const updateFilter = useSelector((state) => state.filter.filter);

  const renderFilteredStocks = (() => {
    let stocks2render = stocks.slice(0, 1000);
    if (updateFilter.price) {
      stocks2render = getStocksByPrice(stocks2render, updateFilter.price);
    } if (updateFilter.exchange) {
      stocks2render = filterByExchange(stocks2render, updateFilter.exchange);
    }
    return stocks2render;
  })();

  const sliceStart = stocksDisplayed;
  const sliceEnd = stocksDisplayed + stocksPerPage;
  const displayStocksPerPage = renderFilteredStocks.slice(sliceStart, sliceEnd);

  const pageCount = stocks.slice(0, 1000).length / stocksPerPage;

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="stock-list">
      <Container fluid className={style.listContainer}>
        <StocksFilter
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          chosenValue={chosenValue}
        />
        { isLoading ? <Loading color="#d1450d" /> : (
          <>
            <Row className="px-2">
              { displayStocksPerPage.length < 1
                && (
                <Col style={{
                  textAlign: 'center', color: '#ff3300', fontSize: '1.3rem', padding: '16px 0',
                }}
                >
                  No stocks in this criterion, hit apply to get all stocks
                  {' '}
                  <span style={{ color: 'blue' }}>or</span>
                  {' '}
                  change criterion
                </Col>
                )}
              { displayStocksPerPage.length > 0 && displayStocksPerPage.map((stock) => (
                <Col sm={12} md={6} lg={3} key={`stck-${stock.symbol}`} className="px-2">
                  <article
                    className={style.stockPreview}
                  >
                    <Stock stock={stock} />
                  </article>
                </Col>
              ))}
            </Row>
            <ReactPaginate
              previousLabel="PREV"
              nextLabel="NEXT"
              pageCount={pageCount}
              onPageChange={pageChange}
              containerClassName={styles.myClass}
              previousLinkClassName={styles.prev}
              nextLinkClassName={styles.next}
              activeClassName={styles.myActive}
            />
          </>
        )}

      </Container>
    </section>
  );
};

export default StockList;
