import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2><Link to="/">StocksCatalogue</Link></h2>
    <div className="links">
      <Link to="/">Home</Link>
    </div>
  </nav>
);

export default Navbar;
