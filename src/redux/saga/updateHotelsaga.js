import { takeLatest, put, call } from "redux-saga/effects";

import { UpdateHotelSuccess, UpdateHotelError } from "../actions";
import * as actions from "../actionTypes";
import axios from "../axios";

function* updateHotelsaga(action) {
  console.log("callled  ");
  try {
    console.log("callled", action);
    const {
      id,
      formdata
    } = action.payload;
    console.log(action.payload, "dataaaaaaaaaa----------------")
    const response = yield call(
      axios.patch,

      `http://176.9.137.77:8024/hotel/${id}/`,

      formdata
    );
    let data = response.data;
    if (data.success) {
      yield put(UpdateHotelSuccess({ response: { data: data } }));
    } else {
      yield put(UpdateHotelError({ error: data }));
    }
  } catch (error) {
    // debugger
    console.log(error, "error");
    yield put(UpdateHotelError({ error: error }));
  }
}

export function* UpdateHotelRequest() {
  yield takeLatest(actions.Update_Hotel_Request, updateHotelsaga);
}
