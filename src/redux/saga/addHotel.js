import { takeLatest, put, call } from "redux-saga/effects";

import { AddHotelSuccess, AddHotelError } from "../actions";
import * as actions from "../actionTypes";
import axios from "../axios";

export function* addHotelSaga(action) {
  try {
    const response = yield call(
      axios.post,
      ` http://176.9.137.77:8024/hotel/`,
      {
        ...action.payload,
      }
      );
      console.log(action.payload)
    let data = response.data;
    if (data.success) {
      yield put(AddHotelSuccess({ response: { data: data } }));
    } else {
      yield put(AddHotelError({ error: data }));
    }
  } catch (error) {
    yield put(AddHotelError({ error: error }));
  }
}

export function* addHotelRequest() {
  yield takeLatest(actions.AddHotel_Request, addHotelSaga);
}
