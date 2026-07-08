import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchEducations = createAsyncThunk(
  'education/fetchEducations',
  async () => await api.getEducations()
);

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    items: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEducations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEducations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.educations || action.payload; // Handle mirage structure
      })
      .addCase(fetchEducations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default educationSlice.reducer;