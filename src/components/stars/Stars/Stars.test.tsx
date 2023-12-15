import { render } from '@testing-library/react';
import { Stars } from '.';

describe('Stars component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Stars quantityStar={3} />);
    expect(container).toBeInTheDocument();
  });

  it('renders filled stars based on quantityStar prop', () => {
    const { getAllByAltText } = render(<Stars quantityStar={3} />);
    const filledStars = getAllByAltText('Star Filled');
    expect(filledStars.length).toBe(3);
  });

  it('renders outlined stars based on quantityStar prop', () => {
    const { getAllByAltText } = render(<Stars quantityStar={3} />);
    const outlinedStars = getAllByAltText('Star Outlined');
    expect(outlinedStars.length).toBe(2);
  });

  it('renders the correct number of total stars', () => {
    const { getAllByAltText } = render(<Stars quantityStar={4} />);
    const allStars = getAllByAltText(/Star/);
    expect(allStars.length).toBe(5);
  });

  it('renders the quantityStar in the text', () => {
    const { getByText } = render(<Stars quantityStar={4} />);
    const starsText = getByText('4 Stars Hotel');
    expect(starsText).toBeInTheDocument();
  });
});
