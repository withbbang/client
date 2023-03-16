import { createSlice } from '@reduxjs/toolkit';

export interface AdminState {
  message: string;
  isFetching: boolean;
  isSuccess: boolean;
  isFail: boolean;
  id?: string;
  auth?: number;
}

export const initialState: AdminState = {
  message: '',
  isFetching: false,
  isSuccess: false,
  isFail: false,
  id: '',
  auth: -1
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    requestAdminInfo(state: AdminState) {
      state.message = '';
      state.isFetching = true;
      state.isSuccess = false;
      state.isFail = false;
    },
    successAdminInfo(state: AdminState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = true;
      state.isFail = false;
      state.id = action.payload.id;
      state.auth = action.payload.auth;
    },
    failAdminInfo(state: AdminState, action) {
      state.message = action.payload.message;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFail = true;
      state.id = '';
      state.auth = -1;
    }
  }
});

export const { requestAdminInfo, successAdminInfo, failAdminInfo } =
  adminSlice.actions;

export default adminSlice.reducer;
