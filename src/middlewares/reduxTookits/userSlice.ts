import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: ''
  },
  reducers: {
    getUser(state) {
      state.loading = true;
    },
    setUser(state, action) {
      state.users = action.payload;
      state.loading = false;
    },
    failedGetUser(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { getUser, setUser, failedGetUser } = userSlice.actions;

export default userSlice.reducer;
