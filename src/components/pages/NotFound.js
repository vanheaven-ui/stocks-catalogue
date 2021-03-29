// import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

const NotFound = () => (
  <section id="404" className="not-found" style={{ color: '#fff' }}>
    404 Page is not found
    <Link to="/"><span role="img" aria-labelledby="404">🏠 Go Home</span></Link>
  </section>
);
export default NotFound;
