import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ErrorState {
    msg: Object;
    status: any;
    id: any;
}

const initialState: ErrorState = {
    msg: {},
    status: null,
    id: null
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getErrors: (state, action: PayloadAction<ErrorState>) => {
        state.msg = action.payload.msg;
        state.status = action.payload.status;
        state.id = action.payload.id;
    },

    clearErrors: (state) => {
        state = initialState;
    },
  }
});

export const { getErrors, clearErrors } = errorSlice.actions;

export const selectErrors = (state: RootState) => state.errors;

export default errorSlice.reducer;
