import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../common/components/Navbar';
import rootNode from '../helpers';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    // const rootNode = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter><Navbar /></BrowserRouter>,
      rootNode(),
    );
  });

  test('doesnot change unexpectedly', () => {
    const navbarTree = renderer.create(
      <BrowserRouter><Navbar /></BrowserRouter>,
    ).toJSON();

    expect(navbarTree).toMatchSnapshot();
  });
});
