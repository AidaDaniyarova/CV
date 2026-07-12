import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TimeLine from './TimeLine';

describe('TimeLine', () => {
  const mockData = [
    {
      date: '2024',
      title: 'Started University',
      text: 'Computer Science',
    },
    {
      date: '2025',
      title: 'Internship',
      text: 'Java Backend Developer',
    },
  ];

  it('renders loading spinner', () => {
    render(
      <TimeLine
        data={[]}
        status="loading"
        error={null}
      />
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(
      <TimeLine
        data={[]}
        status="failed"
        error="Server Error"
      />
    );

    expect(
      screen.getByText(/something went wrong/i)
    ).toBeInTheDocument();
  });

  it('renders timeline items', () => {
    render(
      <TimeLine
        data={mockData}
        status="succeeded"
        error={null}
      />
    );

    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('Started University')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();

    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByText('Internship')).toBeInTheDocument();
    expect(screen.getByText('Java Backend Developer')).toBeInTheDocument();
  });

  it('renders correct number of timeline items', () => {
    const { container } = render(
      <TimeLine
        data={mockData}
        status="succeeded"
        error={null}
      />
    );

    expect(container.querySelectorAll('.timeline-list li')).toHaveLength(2);
  });

  it('renders empty timeline when no data', () => {
    const { container } = render(
      <TimeLine
        data={[]}
        status="succeeded"
        error={null}
      />
    );

    expect(container.querySelectorAll('.timeline-list li')).toHaveLength(0);
    expect(container.querySelector('.timeline')).toBeInTheDocument();
  });
});