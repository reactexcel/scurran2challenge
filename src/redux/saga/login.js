import { takeLatest, put, call } from "redux-saga/effects";

import { LoginSuccess, LoginError } from "../actions";
import * as actions from "../actionTypes";
import axios from "axios";

export function* loginSaga(action) {
  try {
    let email = action.payload.email;
    let password = action.payload.password;
    const response = yield call(
      axios.post,
      ` http://176.9.137.77:8024/auth/login/`,
      {
        email,
        password,
      }
    );
    let data = response.data;
    console.log(data,'======')
    if (data.success) {
      localStorage.setItem("token", data.result.access);
      yield put(LoginSuccess({ response: { data: data} }));
    } else {
      yield put(LoginError({ error: data }));
    }
  } catch (error) {
    yield put(LoginError({ error: error }));
  }
}

export function* loginRequest() {
  yield takeLatest(actions.Login_Request, loginSaga);
}
