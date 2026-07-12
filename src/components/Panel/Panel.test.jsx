import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Panel from './Panel';

vi.mock('../Button/Button', () => ({
  default: ({ onClick, className }) => (
    <button
      data-testid="toggle-button"
      className={className}
      onClick={onClick}
    >
      Toggle
    </button>
  ),
}));

vi.mock('../Navigation/Navigation', () => ({
  default: ({ activeId, onNavigate }) => (
    <div data-testid="navigation">
      <span>{activeId}</span>

      <button
        onClick={() => onNavigate?.('skills')}
      >
        Navigate
      </button>
    </div>
  ),
}));

vi.mock('../PhotoBox/PhotoBox', () => ({
  default: ({ name }) => (
    <div data-testid="photo-box">
      {name}
    </div>
  ),
}));

describe('Panel', () => {
  const owner = {
    name: 'Aida Daniyarova',
    title: 'Software Engineer',
    description: 'Backend Developer',
    avatar: '/avatar.jpg',
  };

  it('renders PhotoBox', () => {
    render(
      <MemoryRouter>
        <Panel owner={owner} />
      </MemoryRouter>
    );

    expect(
      screen.getByTestId('photo-box')
    ).toBeInTheDocument();

    expect(
      screen.getByText(owner.name)
    ).toBeInTheDocument();
  });

  it('renders Navigation', () => {
    render(
      <MemoryRouter>
        <Panel owner={owner} activeId="skills" />
      </MemoryRouter>
    );

    expect(
      screen.getByTestId('navigation')
    ).toBeInTheDocument();

    expect(
      screen.getByText('skills')
    ).toBeInTheDocument();
  });

  it('renders Go back link', () => {
    render(
      <MemoryRouter>
        <Panel owner={owner} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', {
      name: /go back/i,
    });

    expect(link).toHaveAttribute('href', '/');
  });

  it('panel is open by default', () => {
    render(
      <MemoryRouter>
        <Panel owner={owner} />
      </MemoryRouter>
    );

    expect(
      screen.getByLabelText(
        'Profile and navigation'
      )
    ).toHaveClass('panel--open');
  });

  it('closes when toggle button is clicked', () => {
    render(
      <MemoryRouter>
        <Panel owner={owner} />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByTestId('toggle-button')
    );

    expect(
      screen.getByLabelText(
        'Profile and navigation'
      )
    ).toHaveClass('panel--closed');
  });

  it('opens again after second click', () => {
    render(
      <MemoryRouter>
        <Panel owner={owner} />
      </MemoryRouter>
    );

    const toggle = screen.getByTestId(
      'toggle-button'
    );

    fireEvent.click(toggle);

    fireEvent.click(toggle);

    expect(
      screen.getByLabelText(
        'Profile and navigation'
      )
    ).toHaveClass('panel--open');
  });

  it('passes onNavigate to Navigation', () => {
    const onNavigate = vi.fn();

    render(
      <MemoryRouter>
        <Panel
          owner={owner}
          onNavigate={onNavigate}
        />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByText('Navigate')
    );

    expect(onNavigate).toHaveBeenCalledWith(
      'skills'
    );
  });

  it('renders toggle button', () => {
    render(
      <MemoryRouter>
        <Panel owner={owner} />
      </MemoryRouter>
    );

    expect(
      screen.getByTestId('toggle-button')
    ).toBeInTheDocument();
  });
});