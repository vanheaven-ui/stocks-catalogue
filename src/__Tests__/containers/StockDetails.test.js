import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import StockDetails from '../../containers/StockDetails';
import store from '../../redux/store';
import rootNode from '../helpers';
import '@testing-library/jest-dom/extend-expect';

describe('StockDetails Container component', () => {
  afterEach(cleanup);
  const symbol = '';

  test('renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><StockDetails symbol={symbol} /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<Provider store={store}><StockDetails /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct wrapper element', () => {
    const { container } = render(<Provider store={store}><StockDetails /></Provider>);
    expect(container.firstChild.classList.contains('stockDetails')).toBe(true);
  });
});
