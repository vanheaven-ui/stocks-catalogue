import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Stock = ({ stock }) => (
  <>
    <div className="company-img">
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
    <Link to={`/stocks/${stock.symbol}`}>Details</Link>
  </>
);

Stock.propTypes = {
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default Stock;
