import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import StocksFilter from '../../containers/StockFilter';
import store from '../../redux/store';
import rootNode from '../helpers';
import '@testing-library/jest-dom';

describe('StockFilter container component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><StocksFilter /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<Provider store={store}><StocksFilter /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the right wrapper element', () => {
    const { container } = render(<Provider store={store}><StocksFilter /></Provider>);
    expect(container.firstChild.classList.contains('filters')).toBe(true);
  });
});
