import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Hero from '../../components/Hero';
import rootNode from '../helpers';

describe('Hero component', () => {
  test('renders without crashing', () => {
    ReactDOM.render(<Hero />, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
