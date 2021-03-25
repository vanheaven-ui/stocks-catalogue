import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2><Link to="/">StocksCatalogue</Link></h2>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/stocks/:id">Details</Link>
    </div>
  </nav>
);

export default Navbar;
