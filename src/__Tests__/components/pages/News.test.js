import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import News from '../../../components/pages/News';
import rootNode from '../../helpers';
import store from '../../../redux/store';

describe('NotFound page', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><News /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const NotFoundTree = renderer.create(
      <Provider store={store}><News /></Provider>,
    ).toJSON();

    expect(NotFoundTree).toMatchSnapshot();
  });
});
