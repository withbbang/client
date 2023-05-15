import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from './commonSlice';
import { Comment } from 'modules/types';

export interface CommentState {
  comments?: Array<Comment>;
}

export const initialState: CommentState = {
  comments: []
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    requestComments(state: CommentState, action) {},
    successComments(state: CommentState, action) {
      state.comments = action.payload.comments;
    },
    failComments(state: CommentState, action) {
      state.comments = [];
    }
  }
});

export const { requestComments, successComments, failComments } =
  commentSlice.actions;

export const commentExtraReducers = {
  'comment/requestComments': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'comment/successComments': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'comment/failComments': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default commentSlice.reducer;
