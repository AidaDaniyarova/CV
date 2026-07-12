import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navigation, { NAV_ITEMS } from './Navigation';

describe('Navigation', () => {
  it('renders every navigation item', () => {
    render(<Navigation />);

    NAV_ITEMS.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('renders correct links', () => {
    render(<Navigation />);

    NAV_ITEMS.forEach((item) => {
      const link = screen.getByRole('link', {
        name: new RegExp(item.label, 'i'),
      });

      expect(link).toHaveAttribute('href', `#${item.id}`);
    });
  });

  it('calls onNavigate when clicked', () => {
    const onNavigate = vi.fn();

    render(<Navigation onNavigate={onNavigate} />);

    fireEvent.click(screen.getByText('Education'));

    expect(onNavigate).toHaveBeenCalledTimes(1);
    expect(onNavigate).toHaveBeenCalledWith('education');
  });

  it('changes active item internally', () => {
    render(<Navigation />);

    const about = screen.getByRole('link', {
      name: /about me/i,
    });

    const skills = screen.getByRole('link', {
      name: /skills/i,
    });

    expect(about).toHaveClass('active');

    fireEvent.click(skills);

    expect(skills).toHaveClass('active');
    expect(about).not.toHaveClass('active');
  });

  it('uses controlled activeId prop', () => {
    render(<Navigation activeId="portfolio" />);

    expect(
      screen.getByRole('link', {
        name: /portfolio/i,
      })
    ).toHaveClass('active');

    expect(
      screen.getByRole('link', {
        name: /about me/i,
      })
    ).not.toHaveClass('active');
  });

  it('works without onNavigate prop', () => {
    render(<Navigation />);

    expect(() =>
      fireEvent.click(screen.getByText('Feedback'))
    ).not.toThrow();
  });
});