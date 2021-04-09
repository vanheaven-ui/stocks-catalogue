import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import store from '../../redux/store';
import rootNode from '../helpers';
import '@testing-library/jest-dom';
import StocksFilter from '../../components/StockFilter';

const handleChange = () => '';
const handleSubmit = () => '';
const chosenValue = '';

describe('StockFilter container component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(
      <Provider store={store}>
        <StocksFilter
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          chosenValue={chosenValue}
        />
      </Provider>, rootNode(),
    );
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <StocksFilter
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          chosenValue={chosenValue}
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the right wrapper element', () => {
    const { container } = render(
      <Provider store={store}>
        <StocksFilter
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          chosenValue={chosenValue}
        />
      </Provider>,
    );
    expect(container.firstChild.classList.contains('filters')).toBe(true);
  });
});
