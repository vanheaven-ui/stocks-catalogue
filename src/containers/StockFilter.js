import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import STOCKS_FILTERS from '../constants';
import { changeFilter } from '../redux/actions';
import removeDups from '../utils/removeDups';

const StocksFilter = () => {
  const [filter, setFilter] = useState({
    price: null,
    exchange: null,
  });

  const dispatch = useDispatch();
  STOCKS_FILTERS.EXCHANGE = removeDups(STOCKS_FILTERS.EXCHANGE);

  const handleChange = e => {
    if (e.target.name === 'PRICE') {
      setFilter({ ...filter, price: e.target.value });
    } if (e.target.name === 'EXCHANGE') {
      setFilter({ ...filter, exchange: e.target.value });
    }
    return filter;
  };

  const chosenValue = () => {
    if (filter.price) {
      return filter.price;
    } if (filter.exchange) {
      return filter.exchange;
    }
    return 'All';
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeFilter(filter));
    setFilter('default');
  };

  return (
    <section className="filters" style={{ backgroundColor: '#ffcd0a', color: '#d1450d' }}>
      <h2>Browse Stocks with Filters:</h2>
      <Container>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <div className="filters">
            { Object.keys(STOCKS_FILTERS).map(key => ( // eslint-disable-line
              <select
                value={chosenValue()}
                onChange={e => handleChange(e)}
                key={key}
                name={key}
              >
                <option value="default">
                  Select:
                  {' '}
                  {key === 'PRICE' ? `${key} RANGE` : key}
                </option>
                {STOCKS_FILTERS[key].map(filter => (
                  <option value={filter} key={`stck-${filter}`}>{filter}</option>
                ))}
              </select>
            ))}
            <button type="submit">Apply</button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default StocksFilter;
