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
      name,
      hotel_type,
      manager,
      address_line1,
      address_line2,
      pincode,
      no_of_days_advance,
      hotel_image,
    } = action.payload;
    const response = yield call(
      axios.patch,

      `http://176.9.137.77:8024/hotel/{${id}${name}${hotel_type}${manager}${address_line1}${address_line2}${pincode}${no_of_days_advance}${hotel_image}}/`,
      {
        ...action.payload,
      }
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
  console.log("ggggggggggggggggg");
  // debugger
  yield takeLatest(actions.Edit_HotelList_Request, updateHotelsaga);
}
