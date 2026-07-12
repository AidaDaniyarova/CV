import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Portfolio from './Portfolio';
import { portfolioData } from '../../data/resumeData';

describe('Portfolio', () => {
  it('renders all filter tabs', () => {
    render(<Portfolio />);

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('AI')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Full Stack')).toBeInTheDocument();
  });

  it('shows all projects by default', () => {
    render(<Portfolio />);

    portfolioData.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('filters AI projects', () => {
    render(<Portfolio />);

    fireEvent.click(screen.getByText('AI'));

    portfolioData
      .filter((p) => p.category === 'ai')
      .forEach((project) => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
  });

  it('filters Backend projects', () => {
    render(<Portfolio />);

    fireEvent.click(screen.getByText('Backend'));

    portfolioData
      .filter((p) => p.category === 'backend')
      .forEach((project) => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
  });

  it('filters Full Stack projects', () => {
    render(<Portfolio />);

    fireEvent.click(screen.getByText('Full Stack'));

    portfolioData
      .filter((p) => p.category === 'fullstack')
      .forEach((project) => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
  });

  it('returns to all projects', () => {
    render(<Portfolio />);

    fireEvent.click(screen.getByText('Backend'));
    fireEvent.click(screen.getByText('All'));

    portfolioData.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('renders every project image', () => {
    render(<Portfolio />);

    portfolioData.forEach((project) => {
      expect(
        screen.getByAltText(project.title)
      ).toHaveAttribute('src', project.image);
    });
  });

  it('renders every project link', () => {
    render(<Portfolio />);

    const links = screen.getAllByRole('link', {
      name: /view project/i,
    });

    expect(links).toHaveLength(portfolioData.length);

    links.forEach((link, index) => {
      expect(link).toHaveAttribute(
        'href',
        portfolioData[index].link
      );
    });
  });

  it('marks selected tab active', () => {
    render(<Portfolio />);

    const ai = screen.getByText('AI').closest('li');

    fireEvent.click(screen.getByText('AI'));

    expect(ai).toHaveClass('active');
  });
});