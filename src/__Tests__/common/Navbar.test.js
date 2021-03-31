import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Navbar from '../../common/components/Navbar';
import rootNode from '../helpers';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar component', () => {
  afterEach(cleanup);

  test('renders without crashing', () => {
    ReactDOM.render(
      <BrowserRouter><Navbar /></BrowserRouter>,
      rootNode(),
    );
  });

  test('doesnot change unexpectedly', () => {
    const navbarTree = renderer.create(
      <BrowserRouter><Navbar /></BrowserRouter>,
    ).toJSON();

    expect(navbarTree).toMatchSnapshot();
  });

  test('renders into the document', () => {
    const { getByText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(getByText(/StocksCatalogue/)).toBeInTheDocument();
    expect(getByText(/Home/)).toBeInTheDocument();
    expect(getByText(/StockNews/)).toBeInTheDocument();
  });

  test('elements have right attributes', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText(/StocksCatalogue/)).toHaveAttribute('href', '/');
    expect(screen.getByText(/Home/)).toHaveAttribute('href', '/');
    expect(screen.getByText(/StockNews/)).toHaveAttribute('href', '/news');
  });
});
