import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import IntroAlert from '../../components/IntroAlert';
import rootNode from '../helpers';

describe('IntroALert component', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<IntroAlert />, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<IntroAlert />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
