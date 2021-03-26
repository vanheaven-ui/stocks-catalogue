import { useState } from 'react';
import STOCKS_FILTERS from '../constants';

const StocksFilter = () => {
  const [filter, setFilter] = useState('default');

  const handleSubmit = e => {
    e.preventDefault();
    setFilter('default');
  };

  return (
    <section className="filters">
      <h2>Browse with Filters:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>
            To filter using
            <br />
            1. price
            <br />
            2. currency
            <br />
            3. stock Exchange
            <br />
            4. Market sector
            <br />
            5.
          </p>
          { Object.keys(STOCKS_FILTERS).map(key => (
            <select
              value={filter}
              onChange={e => setFilter(e.target.options[e.target.selectedIndex].value)}
              key={`stck-${key}`}
            >
              <option value="default" disabled>
                Select:
                {' '}
                {key}
              </option>
              {STOCKS_FILTERS[key].map(filter => (
                <option value={filter} key={`stck-${filter}`}>{filter}</option>
              ))}
            </select>
          ))}
          <button type="submit">Apply</button>
        </div>
      </form>
    </section>
  );
};

export default StocksFilter;
