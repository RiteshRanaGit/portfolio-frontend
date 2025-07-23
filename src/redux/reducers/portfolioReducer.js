import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resume: null,
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setResume: (state, action) => {
      state.resume = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setResume, setLoading, setError } = portfolioSlice.actions;
export default portfolioSlice.reducer;