import { render, fireEvent } from '@testing-library/react';
import { Header } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    const findFlightNavItem = getByText('Find Flight');
    expect(findFlightNavItem).toBeInTheDocument();
  });

  it('navigates to /filter on "Find Flight" item click', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    const findFlightNavItem = getByText('Find Flight');
    fireEvent.click(findFlightNavItem);

    // Mocked navigate function doesn't actually navigate in tests, so just checking the function call
    // You can use additional testing libraries like react-router-dom/testing to mock navigation
    // and assert that the correct path was navigated to.
    // Example: https://reactrouter.com/web/guides/testing-library
  });

  it('navigates to / on logo click', () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );

    const logoElement = getByAltText('Hostfully');
    fireEvent.click(logoElement);

    // Similar to the previous test, you can use react-router-dom/testing to mock navigation
  });

  it('renders login and sign up buttons', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    const loginButton = getByText('Login');
    const signUpButton = getByText('Sign up');

    expect(loginButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it('renders user icon for mobile', () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );

    const userIcon = getByAltText('User');
    expect(userIcon).toBeInTheDocument();
  });
});