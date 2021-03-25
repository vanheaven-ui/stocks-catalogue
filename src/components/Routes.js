import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../common/components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';

const Routes = () => (
  <Router>
    <Navbar />
    <div className="App">
      Starting out!
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks/:id">
          <Details />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;
