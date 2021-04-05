import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../../../components/pages/Details';
import store from '../../../redux/store';
import rootNode from '../../helpers';

describe('Details page', () => {
  test('renders without crashing', () => {
    ReactDOM.render(
      <Router><Provider store={store}><Details /></Provider></Router>, rootNode(),
    );
  });

  test('doesnot change unexpectedly', () => {
    const DetailsTree = renderer.create(
      <Router><Provider store={store}><Details /></Provider></Router>,
    ).toJSON();
    expect(DetailsTree).toMatchSnapshot();
  });

  test('renders the correct wrapper element', () => {
    const { container } = render(
      <Router><Provider store={store}><Details /></Provider></Router>,
    );
    expect(container.firstChild.classList.contains('stockDetails')).toBe(false);
  });
});
