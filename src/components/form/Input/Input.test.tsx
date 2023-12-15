import { render, fireEvent } from '@testing-library/react';
import { Input } from '.';

describe('Input component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Input name="test" />);
    expect(container).toBeInTheDocument();
  });

  it('renders label if provided', () => {
    const { getByLabelText } = render(<Input label="Test Label" name="test" />);
    const labelElement = getByLabelText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('does not render label if not provided', () => {
    const { queryByLabelText } = render(<Input name="test" />);
    const labelElement = queryByLabelText('Test Label');
    expect(labelElement).toBeNull();
  });

  it('does not render required indicator if required prop is false', () => {
    const { queryByText } = render(<Input label="Test" name="test" required={false} />);
    const requiredIndicator = queryByText('*');
    expect(requiredIndicator).toBeNull();
  });

  it('calls onFocus callback when input is focused', () => {
    const onFocusMock = jest.fn();
    const { getByLabelText } = render(<Input label="Test" name="test" onFocus={onFocusMock} />);
    const inputElement = getByLabelText('Test');
    fireEvent.focus(inputElement);
    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });

  it('renders with icon and triggers focus when icon is clicked', () => {
    const onFocusMock = jest.fn();
    const { getByTestId } = render(
      <Input label="Test" name="test" icon={<div data-testid="test-icon" />} onFocus={onFocusMock} />
    );
    const iconElement = getByTestId('test-icon');
    fireEvent.click(iconElement);
    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });
});