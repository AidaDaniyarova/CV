import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Box from './Box';

describe('Box', () => {
  it('renders title', () => {
    render(<Box title="About" />);

    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders content', () => {
    render(
      <Box
        title="About"
        content="Hello world"
      />
    );

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Box title="About">
        <span>Child component</span>
      </Box>
    );

    expect(screen.getByText('Child component')).toBeInTheDocument();
  });

  it('renders action', () => {
    render(
      <Box
        title="About"
        action={<button>Edit</button>}
      />
    );

    expect(screen.getByRole('button')).toHaveTextContent('Edit');
  });
});