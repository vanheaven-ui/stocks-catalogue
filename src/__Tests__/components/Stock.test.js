import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Stock from '../../components/Stock';
import rootNode from '../helpers';

describe('Stock component', () => {
  const stock = {
    symbol: 'SPY', name: 'SPDR S&P 500', price: 395.98, exchange: 'New York Stock Exchange Arca',
  };

  test('renders without crashing', () => {
    ReactDOM.render(<BrowserRouter><Stock stock={stock} /></BrowserRouter>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<BrowserRouter><Stock stock={stock} /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
