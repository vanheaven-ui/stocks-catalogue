import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../components/Routes';
import rootNode from '../helpers';
import store from '../../redux/store';
import '@testing-library/jest-dom';

describe('Routes component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(
      <BrowserRouter><Provider store={store}><Routes /></Provider></BrowserRouter>, rootNode(),
    );
  });

  test('doesnot change unexpectedly', () => {
    const tree = renderer.create(
      <BrowserRouter><Provider store={store}><Routes /></Provider></BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct wrapper element', () => {
    render(
      <BrowserRouter><Provider store={store}><Routes /></Provider></BrowserRouter>,
    );
    expect(screen.getByText(/INFORMATION FOR YOUR/)).toBeInTheDocument();
  });
});
