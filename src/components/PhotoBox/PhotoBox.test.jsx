import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PhotoBox from './PhotoBox';

describe('PhotoBox', () => {
  const props = {
    name: 'Aida',
    title: 'Software Engineer',
    description: 'Backend Developer',
    avatar: '/avatar.jpg',
  };

  it('renders name', () => {
    render(<PhotoBox {...props} />);

    expect(screen.getByText('Aida')).toBeInTheDocument();
  });

  it('renders avatar', () => {
    render(<PhotoBox {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/avatar.jpg'
    );
  });

  it('renders title', () => {
    render(<PhotoBox {...props} />);

    expect(
      screen.getByText('Software Engineer')
    ).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<PhotoBox {...props} />);

    expect(
      screen.getByText('Backend Developer')
    ).toBeInTheDocument();
  });

  it('compact mode hides title and description', () => {
    render(
      <PhotoBox
        {...props}
        compact
      />
    );

    expect(screen.getByText('Aida')).toBeInTheDocument();

    expect(
      screen.queryByText('Software Engineer')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText('Backend Developer')
    ).not.toBeInTheDocument();
  });

  it('adds compact class', () => {
    const { container } = render(
      <PhotoBox
        {...props}
        compact
      />
    );

    expect(
      container.firstChild
    ).toHaveClass('photo-box--compact');
  });
});