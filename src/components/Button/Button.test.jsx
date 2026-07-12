import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Button from './Button';

describe('Button', () => {
  it('renders button text', () => {
    render(<Button text="Go Back" />);

    expect(
      screen.getByRole('button', {
        name: /go back/i,
      })
    ).toBeInTheDocument();
  });

  it('handles click', () => {
    const onClick = vi.fn();

    render(
      <Button
        text="Go Back"
        onClick={onClick}
      />
    );

    fireEvent.click(
      screen.getByRole('button')
    );

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('can be disabled', () => {
    render(
      <Button
        text="Disabled"
        disabled
      />
    );

    expect(
      screen.getByRole('button')
    ).toBeDisabled();
  });

  it('renders submit type', () => {
    render(
      <Button
        text="Submit"
        type="submit"
      />
    );

    expect(
      screen.getByRole('button')
    ).toHaveAttribute(
      'type',
      'submit'
    );
  });
});