import { render } from '@testing-library/react';
import { Newsletter } from '.';

describe('Newsletter component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Newsletter />);
    expect(container).toBeInTheDocument();
  });

  it('renders subscribe newsletter title', () => {
    const { getByText } = render(<Newsletter />);
    const titleElement = getByText('Subscribe Newsletter');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders "The Travel" paragraph in bold', () => {
    const { getByText } = render(<Newsletter />);
    const boldParagraphElement = getByText('The Travel');
    expect(boldParagraphElement).toHaveClass('bold');
  });

  it('renders newsletter description paragraphs', () => {
    const { getByText } = render(<Newsletter />);
    const descriptionParagraph1 = getByText(
      'Get inspired! Receive travel discounts, tips and behind the scenes stories.'
    );
    const descriptionParagraph2 = getByText('The Travel');
    expect(descriptionParagraph1).toBeInTheDocument();
    expect(descriptionParagraph2).toBeInTheDocument();
  });

  it('renders email input and subscribe button', () => {
    const { getByPlaceholderText, getByText } = render(<Newsletter />);
    const emailInput = getByPlaceholderText('Your email address');
    const subscribeButton = getByText('Subscribe');
    expect(emailInput).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  });

});
