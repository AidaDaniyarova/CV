import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async () => await api.getSkills()
);

export const addNewSkill = createAsyncThunk(
  'skills/addNewSkill',
  async (skill) => await api.addSkill(skill)
);

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },

  reducers: {
    addSkillOptimistic(state, action) {
      state.items.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.items = action.payload.skills || action.payload;
        state.status = 'succeeded';
      })

      .addCase(addNewSkill.fulfilled, () => {})

      .addCase(addNewSkill.rejected, (state) => {
        state.error = 'Failed to save skill';
      });
  },
});

export const { addSkillOptimistic } = skillsSlice.actions;

export default skillsSlice.reducer;