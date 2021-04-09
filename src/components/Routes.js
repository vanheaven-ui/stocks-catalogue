import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../common/components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';

const Routes = () => (
  <Router>
    <Navbar />
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks/:symbol">
          <Details />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;
