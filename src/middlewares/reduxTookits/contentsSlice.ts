import { createSlice } from '@reduxjs/toolkit';
import { Content } from 'modules/types';

export interface ContentsState {
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  contents?: Array<Content>;
}

export const initialState: ContentsState = {
  isFetching: false,
  isSuccess: false,
  isFail: false,
  contents: []
};

const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    requestContents(state: ContentsState, action): void {
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successContents(state: ContentsState, action): void {
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.contents = action.payload.contents;
    },
    failContents(state: ContentsState): void {
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.contents = [];
    }
  }
});

export const { requestContents, successContents, failContents } =
  contentsSlice.actions;

export default contentsSlice.reducer;
