import { PropTypes } from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Stock = ({ stock }) => (
  <>
    <div className="company-preview">
      <h2>
        { stock.name.length > 18 ? `${stock.name.substring(0, 15)}...` : stock.name }
      </h2>
      <h2><Badge variant="primary">{stock.symbol}</Badge></h2>
    </div>
    <hr />
    <div className="stock-stats">
      <h2>
        Price:
        {' '}
        { stock.price }
      </h2>
    </div>
    <div className="stock-footer">
      <Button
        variant="outline-primary"
        style={{ backgroundColor: '#007bff', color: '#fff' }}
      >
        <Link to={`/stocks/${stock.symbol}`}>Details</Link>
      </Button>
      <div className="exchange">
        <small style={{ color: '#d1450d' }}>Trading on:</small>
        <h6>{stock.exchange}</h6>
      </div>
    </div>
  </>
);

Stock.propTypes = {
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default Stock;
