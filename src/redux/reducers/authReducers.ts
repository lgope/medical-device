import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AuthState, LoginPaylod } from '../../types/interfaces';

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    login: (state, action: PayloadAction<LoginPaylod>) => {
      localStorage.setItem('token', action.payload.access_token);
      state.user = action.payload.user.email;
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    logout: state => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },

    userLoading: state => {
      state.isLoading = true;
    },
  },
});

export const { login, logout, userLoading } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
