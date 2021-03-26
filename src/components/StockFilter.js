import { useState } from 'react';
import { useDispatch } from 'react-redux';
import STOCKS_FILTERS from '../constants';
import { changeFilter } from '../redux/actions';

const StocksFilter = () => {
  const [filter, setFilter] = useState('default');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    setFilter('default');
    dispatch(changeFilter(filter));
  };

  return (
    <section className="filters">
      <h2>Browse with Filters:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
