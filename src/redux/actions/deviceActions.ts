import axios from '../../utils/axios';
import {
  getDevices,
  getModels,
  newModel,
  setDataIsLoading,
  setModelDataIsLoading,
} from '../reducers/deviceReducers';
import { IADevice } from '../../types/interfaces';

export const getAvailableMedicalDevices = () => (dispatch: any) => {
  dispatch(setDataIsLoading());
  axios
    .get('/overview/modeltype')
    .then(res => dispatch(getDevices(res.data)))
    .catch(err => console.log(err));
};

export const addModel = (body: IADevice) => (dispatch: any) => {
  dispatch(setDataIsLoading());
  axios
    .post('/devicemodel', body)
    .then(res => dispatch(newModel(res.data)))
    .catch(err => console.log(err));
};

export const getModelsData =
  (brand: String | undefined, model: String | undefined) => (dispatch: any) => {
    dispatch(setModelDataIsLoading());
    axios
      .get(`/overview/modeldata/${brand}/${model}`)
      .then(res => dispatch(getModels(res.data)))
      .catch(err => console.log(err));
  };
