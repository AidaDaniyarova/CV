import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it } from 'vitest';

import Inner from './Inner';

const store = configureStore({
  reducer: {
    education: () => ({
      items: [],
      status: 'succeeded',
    }),

    skills: () => ({
      items: [],
      status: 'succeeded',
    }),
  },
});

describe('Inner', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Inner />
        </MemoryRouter>
      </Provider>
    );

    expect(document.body).toBeInTheDocument();
  });
});