import { IMsg } from '../../types/interfaces';
import { clearErrors, getErrors } from '../reducers/errorReducers';

// RETURN ERRORS
export const returnErrors =
  (msg: IMsg, status: number, id: any = null) =>
  (dispatch: any) => {
    return dispatch(getErrors({ msg, status, id }));
  };

// CLEAR ERRORS
export const removeErrors = () => (dispatch: any) => {
  dispatch(clearErrors());
};
