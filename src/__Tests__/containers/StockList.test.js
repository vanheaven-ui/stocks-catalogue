import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StockList from '../../containers/StockList';
import rootNode from '../helpers';

describe('StockList Container component', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<StockList />, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<StockList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
