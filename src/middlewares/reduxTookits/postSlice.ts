import { createSlice } from '@reduxjs/toolkit';

export interface PostState {
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
}

export const initialState: PostState = {
  message: '',
  isFetching: false,
  isSuccess: false,
  isFail: false
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    requestPost(state: PostState, action) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successPost(state: PostState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
    },
    failPost(state: PostState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
    }
  }
});

export const { requestPost, successPost, failPost } = postSlice.actions;

export default postSlice.reducer;
