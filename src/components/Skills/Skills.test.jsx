import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Skills from './Skills';
import { fetchSkills } from '../../features/skills/skillsSlice';

const dispatch = vi.fn();
const useSelectorMock = vi.fn();

vi.mock('react-redux', () => ({
  useDispatch: () => dispatch,
  useSelector: (selector) => useSelectorMock(selector),
}));

vi.mock('../../features/skills/skillsSlice', () => ({
  fetchSkills: vi.fn(() => ({
    type: 'skills/fetchSkills',
  })),
}));

vi.mock('./SkillsForm/SkillsForm', () => ({
  default: () => (
    <div data-testid="skills-form">
      Skills Form
    </div>
  ),
}));

describe('Skills', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    dispatch.mockClear();
    useSelectorMock.mockReset();
  });

  it('dispatches fetchSkills on mount', () => {
    useSelectorMock.mockImplementation((selector) =>
      selector({
        skills: {
          items: [],
          status: 'succeeded',
        },
      })
    );

    render(<Skills />);

    expect(fetchSkills).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    useSelectorMock.mockImplementation((selector) =>
      selector({
        skills: {
          items: [],
          status: 'loading',
        },
      })
    );

    render(<Skills />);

    expect(
      screen.getByText(/Loading skills/i)
    ).toBeInTheDocument();
  });

  it('renders skills', () => {
    useSelectorMock.mockImplementation((selector) =>
      selector({
        skills: {
          status: 'succeeded',
          items: [
            {
              name: 'React',
              range: 80,
            },
            {
              name: 'Redux',
              range: 90,
            },
          ],
        },
      })
    );

    render(<Skills />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();

    expect(document.querySelectorAll('.skill-bar')).toHaveLength(2);
  });

  it('renders editing form', () => {
    useSelectorMock.mockImplementation((selector) =>
      selector({
        skills: {
          items: [],
          status: 'succeeded',
        },
      })
    );

    render(<Skills isEditing />);

    expect(
      screen.getByTestId('skills-form')
    ).toBeInTheDocument();
  });

  it('renders scale labels', () => {
    useSelectorMock.mockImplementation((selector) =>
      selector({
        skills: {
          items: [],
          status: 'succeeded',
        },
      })
    );

    render(<Skills />);

    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getByText('Proficient')).toBeInTheDocument();
    expect(screen.getByText('Expert')).toBeInTheDocument();
    expect(screen.getByText('Master')).toBeInTheDocument();
  });

  it('renders skill width correctly', () => {
    useSelectorMock.mockImplementation((selector) =>
      selector({
        skills: {
          status: 'succeeded',
          items: [
            {
              name: 'Java',
              range: 75,
            },
          ],
        },
      })
    );

    const { container } = render(<Skills />);

    expect(
      container.querySelector('.skill-fill')
    ).toHaveStyle('width: 75%');
  });
});