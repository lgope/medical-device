import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface DeviceState {
  availableDevices: Array<Object>;
  models: Array<Object>;
  dataIsLoading: Boolean;
  modelsDataIsLoading: Boolean;
  deviceDetail: Object;
}

const initialState: DeviceState = {
  availableDevices: [],
  models: [],
  dataIsLoading: true,
  modelsDataIsLoading: true,
  deviceDetail: {},
};

export const deviceSlice = createSlice({
  name: 'medicalDevices',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getDevices: (state, action: PayloadAction<Array<Object>>) => {
      state.availableDevices = action.payload;
      state.dataIsLoading = false;
    },

    getModels: (state, action: PayloadAction<Array<Object>>) => {
      state.models = action.payload;
      state.modelsDataIsLoading = false;
    },

    newModel: (state, action: PayloadAction<Array<Object>>) => {
      state.availableDevices = [...state.availableDevices, {...action.payload}];
      state.dataIsLoading = false;
    },

    setDataIsLoading: state => {
      state.dataIsLoading = true;
    },

    setModelDataIsLoading: state => {
      state.modelsDataIsLoading = true;
    },
  }
});

export const { getDevices, getModels, newModel, setDataIsLoading, setModelDataIsLoading } = deviceSlice.actions;

export const selectDevices = (state: RootState) => state.device;

export default deviceSlice.reducer;
