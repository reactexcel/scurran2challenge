import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from "../actionTypes";

import {
  RegistationSuccess,
  RegistationError,
} from "../actions";
import axios from "../axios";

export default function* registrationSaga(action) {
  try {
    let email=action.payload.email
    let name = action.payload.username;
    let password = action.payload.password;
    // let option = action.payload.option;

    // yield put(RegistationRequest);
    const response = yield call(
      axios.post,
      ` http://176.9.137.77:8024/auth/register/`,{
        email,
        name,
        password,
        password2:password
      }
    );
    // yield put(RegistationRequest({ isLoading: true }));
    const data = response.data;
  
    if (data.error === 0) {
      yield put(RegistationSuccess({ registation: true, response: data }));
    } else {
      yield put(RegistationError({ registation: false, error: data }));
    }
  } catch (error) {
    yield put(RegistationError({ registation: false, error: error }));
  }
}

export function* registrationRequest() {
  yield takeLatest(actions.Registation_Request, registrationSaga);
}
