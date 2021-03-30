import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from '../../../components/pages/Home';
import store from '../../../redux/store';
import rootNode from '../../helpers';

describe('Home page', () => {
  test('doesnot crash on render', () => {
    ReactDOM.render(<Provider store={store}><Home /></Provider>, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const homeTree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
    expect(homeTree).toMatchSnapshot();
  });
});
