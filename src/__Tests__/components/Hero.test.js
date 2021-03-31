import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import Hero from '../../components/Hero';
import rootNode from '../helpers';
import '@testing-library/jest-dom';

describe('Hero component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(<Hero />, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the right components', () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/INFORMATION FOR YOUR/)).toBeInTheDocument();
  });
});
