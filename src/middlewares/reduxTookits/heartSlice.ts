import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from './commonSlice';

export interface HeartState {
  heartsCount: number;
}

export const initialState: HeartState = {
  heartsCount: 0
};

const heartSlice = createSlice({
  name: 'heart',
  initialState,
  reducers: {
    requestHeartsCount(state: HeartState, action) {},
    successHeartsCount(state: HeartState, action) {
      state.heartsCount = action.payload.heartsCount;
    },
    failHeartsCount(state: HeartState) {
      state.heartsCount = 0;
    }
  }
});

export const { requestHeartsCount, successHeartsCount, failHeartsCount } =
  heartSlice.actions;

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
