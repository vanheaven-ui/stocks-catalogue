import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import StocksFilter from '../../containers/StockFilter';
import store from '../../redux/store';
import rootNode from '../helpers';

describe('StockFilter Container component', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><StocksFilter /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<Provider store={store}><StocksFilter /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
