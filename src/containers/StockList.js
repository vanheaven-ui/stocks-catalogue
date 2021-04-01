import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getStockList } from '../redux/actions';
import StocksFilter from './StockFilter';
import useFetch1 from '../common/hooks/useFetch1';
import STOCKS_FILTERS, { listEndPoint } from '../constants';
import { filterByExchange, getStocksByPrice } from '../redux/selectors';
import Stock from '../components/Stock';
import styles from '../styles/paginate.module.css';
import Loading from '../components/Loading';

const StockList = () => {
  // variables for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const stocksPerPage = 100;
  const stocksDisplayed = pageNumber * stocksPerPage;

  const dispatch = useDispatch();

  const { data, isLoading } = useFetch1(listEndPoint);
  if (data) {
    localStorage.setItem('stocks', JSON.stringify(data));
  }
  const stocks = JSON.parse(localStorage.getItem('stocks'));
  dispatch(getStockList(stocks));
  const filter = useSelector(state => state.filter.filter);

  const exchanges = stocks ? stocks.slice(0, 1000).map(stock => stock.exchange) : null;
  STOCKS_FILTERS.EXCHANGE = exchanges;

  const renderFilteredStocks = (() => {
    let stocks2render = stocks.slice(0, 1000);
    if (filter.price) {
      stocks2render = getStocksByPrice(stocks2render, filter.price);
    } if (filter.exchange) {
      stocks2render = filterByExchange(stocks2render, filter.exchange);
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
      <Container fluid style={{ backgroundColor: '#00800080', padding: 0 }}>
        <StocksFilter />
        { isLoading ? <Loading color="#d1450d" /> : (
          <>
            <Row className="px-2">
              { stocks && displayStocksPerPage.map(stock => (
                <Col sm={12} md={6} lg={3} key={`stck-${stock.symbol}`} className="px-2">
                  <article
                    className="stock-preview"
                    style={{ backgroundColor: '#ffffffe6', margin: '10px 0', borderRadius: 10 }}
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
