import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from './commonSlice';

export interface PostState {}

export const initialState: PostState = {};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    requestPost(state: PostState, action) {},
    successPost(state: PostState, action) {},
    failPost(state: PostState) {}
  }
});

export const { requestPost, successPost, failPost } = postSlice.actions;

export const postExtraReducers = {
  'post/requestPost': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'post/successPost': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'post/failPost': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default postSlice.reducer;
