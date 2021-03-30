import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StockDetails from '../../containers/StockDetails';
import rootNode from '../helpers';

describe('StockDetails Container component', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<StockDetails />, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<StockDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
