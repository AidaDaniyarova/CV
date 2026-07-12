import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Feedback from './Feedback';

describe('Feedback', () => {
  it('shows empty message', () => {
    render(<Feedback data={[]} />);

    expect(
      screen.getByText(/no feedback/i)
    ).toBeInTheDocument();
  });

  it('renders feedback', () => {
    render(
      <Feedback
        data={[
          {
            feedback: 'Excellent work',
            reporter: {
              photoUrl: 'photo.jpg',
              name: 'John',
              citeUrl: 'https://epam.com',
            },
          },
        ]}
      />
    );

    expect(screen.getByText('Excellent work')).toBeInTheDocument();

    expect(screen.getByText(/John/)).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'photo.jpg'
    );

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://epam.com'
    );
  });
});