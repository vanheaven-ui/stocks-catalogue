import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Stock = ({ stock }) => (
  <>
    <div className="company-im">
      Co. image
    </div>
    <div className="stock-stats">
      {stock.symbol}
      <br />
      { stock.name }
      <br />
      { stock.price }
      <br />
      { stock.exchange }
      <br />
    </div>
    <Link to="/stocks/:id">Details</Link>
  </>
);

Stock.propTypes = {
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default Stock;
