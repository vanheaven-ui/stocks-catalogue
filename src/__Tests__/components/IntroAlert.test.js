import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {
  cleanup, fireEvent, render,
} from '@testing-library/react';
import IntroAlert from '../../components/IntroAlert';
import rootNode from '../helpers';
import '@testing-library/jest-dom/extend-expect';

describe('IntroALert component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(<IntroAlert />, rootNode());
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(<IntroAlert />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct element', () => {
    const { getByRole } = render(<IntroAlert />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('button click closes the alert', () => {
    const { getByRole, getByText } = render(<IntroAlert />);
    fireEvent.click(getByRole('button'));
    expect(getByText('Greeting!')).toBeInTheDocument();
  });
});
