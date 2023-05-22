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
    },
    requestCreateComment(state: CommentState, action) {},
    successCreateComment(state: CommentState, action) {
      state.comments = action.payload.comments;
    },
    failCreateComment(state: CommentState, action) {},
    requestUpdateComment(state: CommentState, action) {},
    successUpdateComment(state: CommentState, action) {},
    failUpdateComment(state: CommentState, action) {},
    requestDeleteComment(state: CommentState, action) {},
    successDeleteComment(state: CommentState, action) {},
    failDeleteComment(state: CommentState, action) {}
  }
});

export const {
  requestComments,
  successComments,
  failComments,
  requestCreateComment,
  successCreateComment,
  failCreateComment,
  requestUpdateComment,
  successUpdateComment,
  failUpdateComment,
  requestDeleteComment,
  successDeleteComment,
  failDeleteComment
} = commentSlice.actions;

export const commentExtraReducers = {
  'comment/requestComments': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'comment/successComments': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'comment/failComments': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'comment/requestCreateComment': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'comment/successCreateComment': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'comment/failCreateComment': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'comment/requestUpdateComment': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'comment/successUpdateComment': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'comment/failUpdateComment': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'comment/requestDeleteComment': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'comment/successDeleteComment': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'comment/failDeleteComment': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default commentSlice.reducer;
