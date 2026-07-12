import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Address from './Address';
import { contact } from '../../data/resumeData';

describe('Address', () => {
  it('renders every contact label', () => {
    render(<Address />);

    contact.forEach(item => {
      expect(screen.getByText(`${item.label}:`, { exact: false }))
        .toBeInTheDocument();
    });
  });

  it('renders every contact value', () => {
    render(<Address />);

    contact.forEach(item => {
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });

  it('renders links when href exists', () => {
    render(<Address />);

    contact
      .filter(item => item.href)
      .forEach(item => {
        expect(
          screen.getByRole('link', { name: item.value })
        ).toHaveAttribute('href', item.href);
      });
  });
});