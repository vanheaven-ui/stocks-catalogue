import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import rootNode from '../../helpers';
import Home from '../../../components/pages/Home';
import store from '../../../redux/store';

describe('Home component', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><Home /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct wrapper element', () => {
    const { container } = render(<Provider store={store}><Home /></Provider>);
    expect(container.firstChild.classList.contains('home')).toBe(true);
  });
});
