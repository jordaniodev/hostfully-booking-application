
import { fireEvent, render } from '@testing-library/react';
import { Button } from '.';


describe('Button component', () => {
  test('renders with the correct colors for "filled" category', () => {
    const { container } = render(<Button category="filled" />);
    const button = container.firstChild as HTMLButtonElement;
    const computedStyles = getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('rgb(45, 42, 165)');
    expect(computedStyles.color).toBe('rgb(255, 255, 255)');
  });

  test('renders with the correct colors for "outline" category', () => {
    const { container } = render(<Button category="outline" />);
    const button = container.firstChild as HTMLButtonElement;
    const computedStyles = getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('transparent');
    expect(computedStyles.color).toBe('rgb(45, 42, 165)');
  });

  test('renders with the correct colors for "dark" category', () => {
    const { container } = render(<Button category="dark" />);
    const button = container.firstChild as HTMLButtonElement;
    const computedStyles = getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('rgb(13, 12, 48)');
    expect(computedStyles.color).toBe('rgb(255, 255, 255)');
  });

  test('renders with the correct colors for "buy" category', () => {
    const { container } = render(<Button category="buy" />);
    const button = container.firstChild as HTMLButtonElement;
    const computedStyles = getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('rgb(51, 174, 138)');
    expect(computedStyles.color).toBe('rgb(255, 255, 255)');
    expect(computedStyles.justifyContent).toBe('center');
  });

  test('renders with the correct colors for "danger" category', () => {
    const { container } = render(<Button category="danger" />);
    const button = container.firstChild as HTMLButtonElement;
    const computedStyles = getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('rgb(119, 3, 3)');
    expect(computedStyles.color).toBe('rgb(255, 255, 255)');
    expect(computedStyles.justifyContent).toBe('center');
  });

  test('renders with the correct colors for "submit" category', () => {
    const { container } = render(<Button category="submit" />);
    const button = container.firstChild as HTMLButtonElement;
    const computedStyles = getComputedStyle(button);

    expect(computedStyles.backgroundColor).toBe('rgb(17, 34, 17)');
    expect(computedStyles.color).toBe('rgb(255, 255, 255)');
    expect(computedStyles.justifyContent).toBe('center');
  });
  test('renders with icon', () => {
    const iconSrc = 'http://image.com/path/to/icon.png';
    const { container } = render(<Button icon={<img src={iconSrc} alt="icon" />} />);
    const iconElement = container.querySelector('img') as HTMLImageElement;

    expect((iconElement as any).src).toBe(iconSrc);
  });

  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<Button onClick={onClickMock} />);
    const buttonElement = container.firstChild as HTMLButtonElement;

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
