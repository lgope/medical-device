import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducers from '../redux/reducers/authReducers';
import deviceReducers from '../redux/reducers/deviceReducers';
import errorReducers from '../redux/reducers/errorReducers';

export const store = configureStore({
  reducer: {
    auth: authReducers,
    counter: counterReducer,
    device: deviceReducers,
    errors: errorReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
