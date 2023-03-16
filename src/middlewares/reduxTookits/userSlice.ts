import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  ID?: string;
  AUTH?: number;
}

export const initialState: UserState = {
  message: '',
  isFetching: false,
  isSuccess: false,
  isFail: false,
  ID: '',
  AUTH: 30
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestUserInfo(state: UserState, action) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successUserInfo(state: UserState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.ID = action.payload;
      state.AUTH = action.payload;
    },
    failUserInfo(state: UserState, action) {
      state.message = action.payload;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.ID = '';
      state.AUTH = 30;
    }
  }
});

export const { requestUserInfo, successUserInfo, failUserInfo } =
  userSlice.actions;

export default userSlice.reducer;
