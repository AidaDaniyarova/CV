import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Info from './Info';

describe('Info', () => {
  const defaultProps = {
    title: 'About Me',
    text: 'I am a software engineer.',
  };

  it('renders the title', () => {
    render(<Info {...defaultProps} />);

    expect(
      screen.getByRole('heading', { level: 3 })
    ).toHaveTextContent('About Me');
  });

  it('renders the text', () => {
    render(<Info {...defaultProps} />);

    expect(
      screen.getByText('I am a software engineer.')
    ).toBeInTheDocument();
  });

  it('applies the default class name', () => {
    const { container } = render(<Info {...defaultProps} />);

    expect(container.firstChild).toHaveClass('info');
  });

  it('adds a custom class name', () => {
    const { container } = render(
      <Info
        {...defaultProps}
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass('info');
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders different content when props change', () => {
    render(
      <Info
        title="Skills"
        text="React, Redux, Java"
      />
    );

    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(
      screen.getByText('React, Redux, Java')
    ).toBeInTheDocument();
  });
});