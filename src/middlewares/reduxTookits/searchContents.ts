import { createSlice } from '@reduxjs/toolkit';
import { Content } from 'modules/types';
import { CommonState } from './commonSlice';

export interface SearchContentsState {
  searchContents?: Array<Content>;
}

export const initialState: SearchContentsState = {
  searchContents: []
};

const searchContentsSlice = createSlice({
  name: 'searchContents',
  initialState,
  reducers: {
    requestSearchContents(state: SearchContentsState, action): void {},
    successSearchContents(state: SearchContentsState, action): void {
      state.searchContents = action.payload.contents;
    },
    failSearchContents(state: SearchContentsState): void {
      state.searchContents = [];
    }
  }
});

export const {
  requestSearchContents,
  successSearchContents,
  failSearchContents
} = searchContentsSlice.actions;

export const contentsExtraReducers = {
  'searchContents/requestSearchContents': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
  },
  'searchContents/successSearchContents': (state: CommonState) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
  },
  'searchContents/failSearchContents': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default searchContentsSlice.reducer;
