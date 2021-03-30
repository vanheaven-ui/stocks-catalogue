import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NotFound from '../../../components/pages/NotFound';
import rootNode from '../../helpers';

describe('NotFound page', () => {
  test('Renders without crashing', () => {
    ReactDOM.render(<BrowserRouter><NotFound /></BrowserRouter>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const notfoundTree = renderer.create(<BrowserRouter><NotFound /></BrowserRouter>).toJSON();
    expect(notfoundTree).toMatchSnapshot();
  });
});
