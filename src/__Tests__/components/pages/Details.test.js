import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Details from '../../../components/pages/Details';
import store from '../../../redux/store';
import rootNode from '../../helpers';

describe('Details page', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<Provider store={store}><Details /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const DetailsTree = renderer.create(<Provider store={store}><Details /></Provider>).toJSON();
    expect(DetailsTree).toMatchSnapshot();
  });
});
