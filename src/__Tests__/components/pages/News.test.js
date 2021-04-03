import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react'; 
import { Provider } from 'react-redux';
import News from '../../../components/pages/News';
import rootNode from '../../helpers';
import store from '../../../redux/store';
import '@testing-library/jest-dom';

describe('News page', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><News /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const NotFoundTree = renderer.create(
      <Provider store={store}><News /></Provider>,
    ).toJSON();

    expect(NotFoundTree).toMatchSnapshot();
  });

  test('renders the correct wrapper element', () => {
    const { container } = render(<Provider store={store}><News /></Provider>);
    expect(container.firstChild.classList.contains('news')).toBe(true);
  });
});
