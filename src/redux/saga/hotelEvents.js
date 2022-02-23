import { takeLatest, put, call } from "redux-saga/effects";

import { HotelEventSuccess, HotelEventError } from "../actions";
import * as actions from "../actionTypes";
import axios from "../axios";

function* hotelEventSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield call(
      axios.get,
      `http://176.9.137.77:8024/event/?hotel_id=${id}`
    );
    let data = response.data;
   
    if (data.success) {
        console.log(data.result,'--090-90-09-09888888888888')
      yield put(HotelEventSuccess({ response: data.result }));
    } else {
      yield put(HotelEventSuccess({ error: data }));
    }
  } catch (error) {
    yield put(HotelEventSuccess({ error: error }));
  }
}

export function* hotelEventRequest() {
  yield takeLatest(actions.Hotel_Event_Request, hotelEventSaga);
}
