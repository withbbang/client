import { createSlice } from '@reduxjs/toolkit';

export interface PostState {
  code?: string;
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
}

export const initialState: PostState = {
  code: '',
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
      state.code = '';
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successPost(state: PostState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
    },
    failPost(state: PostState, action) {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
    }
  }
});

export const { requestPost, successPost, failPost } = postSlice.actions;

export default postSlice.reducer;
