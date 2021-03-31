import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import Stock from '../../components/Stock';
import rootNode from '../helpers';
import '@testing-library/jest-dom/extend-expect';

describe('Stock component', () => {
  afterEach(cleanup);

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

  test('renders the correct wrapper element', () => {
    const { container } = render(<BrowserRouter><Stock stock={stock} /></BrowserRouter>);
    expect(container.firstChild.classList.contains('company-preview')).toBe(true);
  });
});
