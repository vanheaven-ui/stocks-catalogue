import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import STOCKS_FILTERS from '../constants';
import styles from '../styles/filter.module.css';

const StocksFilter = ({ handleChange, handleSubmit, chosenValue }) => (
  <section className={styles.filters}>
    <h2>Browse Stocks with Filters:</h2>
    <Container>
      <form onSubmit={(e) => handleSubmit(e)} style={{ textAlign: 'center' }}>
        <div className="filters">
          { Object.keys(STOCKS_FILTERS).map((key) => (
            <select
              value={chosenValue}
              onChange={(e) => handleChange(e)}
              key={key}
              name={key}
            >
              <option value="default">
                Select:
                {' '}
                {key === 'PRICE' ? `${key} RANGE` : key}
              </option>
              {STOCKS_FILTERS[key].map((filter) => (
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

StocksFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  chosenValue: PropTypes.string.isRequired,
};

export default StocksFilter;
