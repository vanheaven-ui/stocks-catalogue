import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Routes from '../../components/Routes';
import store from '../../redux/store';
import rootNode from '../helpers';

describe('Routes component', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(
      <BrowserRouter><Provider store={store}><Routes /></Provider></BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
