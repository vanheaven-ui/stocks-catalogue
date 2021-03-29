import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar" style={{ color: '#007bff' }}>
    <h2><Link to="/">StocksCatalogue</Link></h2>
    <div className="links">
      <Link to="/" style={{ margin: '0 10px 0 0' }}>Home</Link>
      <Link to="/news">Stock News</Link>
    </div>
  </nav>
);

export default Navbar;
