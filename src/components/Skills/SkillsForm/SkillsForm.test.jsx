import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import SkillsForm from './SkillsForm';
import {
  addNewSkill,
  addSkillOptimistic,
} from '../../../features/skills/skillsSlice';

const dispatch = vi.fn();

vi.mock('react-redux', () => ({
  useDispatch: () => dispatch,
}));

vi.mock('../../../features/skills/skillsSlice', () => ({
  addNewSkill: vi.fn((skill) => ({
    type: 'skills/addNewSkill',
    payload: skill,
  })),
  addSkillOptimistic: vi.fn((skill) => ({
    type: 'skills/addSkillOptimistic',
    payload: skill,
  })),
}));

describe('SkillsForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    dispatch.mockClear();
  });

  it('renders form inputs', () => {
    render(<SkillsForm />);

    expect(screen.getByLabelText(/skill name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/skill range/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add skill/i })
    ).toBeInTheDocument();
  });

  it('button is disabled initially', () => {
    render(<SkillsForm />);

    expect(
      screen.getByRole('button', { name: /add skill/i })
    ).toBeDisabled();
  });

  it('shows validation errors', async () => {
    render(<SkillsForm />);

    const name = screen.getByLabelText(/skill name/i);
    const range = screen.getByLabelText(/skill range/i);

    fireEvent.blur(name);
    fireEvent.blur(range);

    expect(
      await screen.findByText(/skill name is required/i)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/skill range is required/i)
    ).toBeInTheDocument();
  });

  it('accepts valid input', () => {
    render(<SkillsForm />);

    fireEvent.change(screen.getByLabelText(/skill name/i), {
      target: { value: 'React' },
    });

    fireEvent.change(screen.getByLabelText(/skill range/i), {
      target: { value: '80' },
    });

    expect(screen.getByDisplayValue('React')).toBeInTheDocument();
    expect(screen.getByDisplayValue('80')).toBeInTheDocument();
  });

  it('submits valid form', async () => {
    render(<SkillsForm />);

    fireEvent.change(screen.getByLabelText(/skill name/i), {
      target: { value: 'React' },
    });

    fireEvent.change(screen.getByLabelText(/skill range/i), {
      target: { value: '80' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /add skill/i })
    );

    await waitFor(() => {
      expect(addSkillOptimistic).toHaveBeenCalledTimes(1);
      expect(addNewSkill).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });

  it('resets form after submit', async () => {
    render(<SkillsForm />);

    const name = screen.getByLabelText(/skill name/i);
    const range = screen.getByLabelText(/skill range/i);

    fireEvent.change(name, {
      target: { value: 'Redux' },
    });

    fireEvent.change(range, {
      target: { value: '90' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /add skill/i })
    );

    await waitFor(() => {
      expect(name).toHaveValue('');
      expect(range).toHaveValue(null);
    });
  });
});