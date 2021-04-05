import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import StockList from '../../containers/StockList';
import store from '../../redux/store';
import rootNode from '../helpers';
import '@testing-library/jest-dom';

describe('StockList container component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><StockList /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(
      <Provider store={store}><StockList /></Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders loading component when getting data', () => {
    const { getByText } = render(<Provider store={store}><StockList /></Provider>);
    expect(getByText(/Loading.../)).toBeInTheDocument();
  });
});
