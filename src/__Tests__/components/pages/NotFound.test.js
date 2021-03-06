import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import NotFound from '../../../components/pages/NotFound';
import rootNode from '../../helpers';
import '@testing-library/jest-dom';

describe('NotFound page', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    ReactDOM.render(<BrowserRouter><NotFound /></BrowserRouter>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const notfoundTree = renderer.create(<BrowserRouter><NotFound /></BrowserRouter>).toJSON();
    expect(notfoundTree).toMatchSnapshot();
  });

  test('renders the correct wrapper element', () => {
    const { container } = render(<BrowserRouter><NotFound /></BrowserRouter>);
    expect(container.firstChild.classList.contains('not-found')).toBe(true);
  });
});
