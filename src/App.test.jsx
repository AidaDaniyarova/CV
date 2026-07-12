import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

vi.mock('./pages/Home/Home', () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock('./pages/Inner/Inner', () => ({
  default: () => <div>Inner Page</div>,
}));

describe('App', () => {
  it('renders Home route', () => {
    window.history.pushState({}, '', '/');

    render(<App />);

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders Inner route', () => {
    window.history.pushState({}, '', '/inner');

    render(<App />);

    expect(screen.getByText('Inner Page')).toBeInTheDocument();
  });
});