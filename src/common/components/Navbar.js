import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpeg';

const Navbar = () => (
  <nav className="navbar sticky-top mb-2" style={{ color: '#007bff' }}>
    <h2>
      <Link to="/">
        <img src={logo} alt="my logo" style={{ width: 60, height: 60, marginRight: 5 }} />
        StocksCatalogue
      </Link>
    </h2>
    <div className="links">
      <Link to="/" style={{ margin: '0 10px 0 0' }}>Home</Link>
      <Link to="/news">StockNews</Link>
    </div>
  </nav>
);

export default Navbar;
