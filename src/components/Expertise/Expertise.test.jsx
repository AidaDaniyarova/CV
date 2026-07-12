import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Expertise from './Expertise';

const data = [
  {
    date: '2025',
    info: {
      company: 'EPAM',
      job: 'Frontend Developer',
      description: 'Building React apps',
    },
  },
];

describe('Expertise', () => {
  it('renders company', () => {
    render(<Expertise data={data} />);

    expect(screen.getByText('EPAM')).toBeInTheDocument();
  });

  it('renders job title', () => {
    render(<Expertise data={data} />);

    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Expertise data={data} />);

    expect(screen.getByText('Building React apps')).toBeInTheDocument();
  });

  it('renders date', () => {
    render(<Expertise data={data} />);

    expect(screen.getByText('2025')).toBeInTheDocument();
  });
});