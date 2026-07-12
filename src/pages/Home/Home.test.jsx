import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import Home from './Home';
import { owner } from '../../data/resumeData';

describe('Home', () => {
  it('renders owner information', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(owner.name)).toBeInTheDocument();

    expect(screen.getByText(owner.title)).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      owner.avatar
    );
  });

  it('renders Know more button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('button', {
        name: /know more/i,
      })
    ).toBeInTheDocument();
  });

  it('contains navigation link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/inner'
    );
  });
});