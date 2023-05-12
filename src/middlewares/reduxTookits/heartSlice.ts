import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from './commonSlice';
import { Heart } from 'modules/types';

export interface HeartState {
  heart?: Heart;
}

export const initialState: HeartState = {
  heart: undefined
};

const heartSlice = createSlice({
  name: 'heart',
  initialState,
  reducers: {
    requestHeart(state: HeartState, action) {},
    successHeart(state: HeartState, action) {
      state.heart = action.payload.heart;
    },
    failHeart(state: HeartState, action) {
      state.heart = undefined;
    }
  }
});

export const { requestHeart, successHeart, failHeart } = heartSlice.actions;

export const heartExtraReducers = {
  'heart/requestHeart': (state: CommonState) => {
    state.isFetching = true;
    state.isSuccess = false;
    state.isFail = false;
    state.code = '';
    state.message = '';
  },
  'heart/successHeart': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = true;
    state.isFail = false;
    state.code = action.payload.code;
    state.message = action.payload.message;
  },
  'heart/failHeart': (state: CommonState, action: any) => {
    state.isFetching = false;
    state.isSuccess = false;
    state.isFail = true;
    state.code = action.payload.code;
    state.message = action.payload.message;
  }
};

export default heartSlice.reducer;
