import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button text="Go Back" />);
  expect(screen.getByText('Go Back')).toBeInTheDocument();
});

test('handles click event', () => {
  const handleClick = jest.fn();
  render(<Button text="Go Back" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Go Back'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});