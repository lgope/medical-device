import axios from "../../utils/axios";
import { login, logout, userLoading } from "../reducers/authReducers";
// import { returnErrors } from "./errorActions";

import { IAuthFunction } from "../../types/interfaces";
// Check token & load user
export const loadUser = () => (dispatch: Function) => {
  // User loading
  // dispatch(userLoading());
  
  axios
  .get("/login")
  .then((res) => dispatch(login(res.data)))
  .catch((err) => {
    //   dispatch(returnErrors(err.response.data, err.response.status));
    console.log(err);
  });
};

// Login User
export const loginUser =
({ email, password }: IAuthFunction) =>
(dispatch: Function) => {
    dispatch(userLoading());
    // Request body
    const body = JSON.stringify({ email, password });

    axios
      .post("/login", body)
      .then((res) => dispatch(login(res.data)))
      .catch((err) => {
        console.log(err);
        // dispatch(
        //   returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        // );
      });
  };

// Logout User
export const logoutUser = () => (dispatch: Function) => {
  dispatch(logout());
};
