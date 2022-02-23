import { takeLatest, put, call } from "redux-saga/effects";

import { HotelListError, HotelListSuccess } from "../actions";
import * as actions from "../actionTypes";
import axios from "../axios";

export function* hotelListSaga(action) {
  try {
    const response = yield call(
      axios.get,
      ` http://176.9.137.77:8024/hotels_list/`
    );
    let data = response.data;
    console.log(data, "======121314");
    if (data.success) {
      yield put(HotelListSuccess({ response: { data: data } }));
    } 
    // else if (data.status=='401'){

    // }
    else {
      yield put(HotelListError({ error: data }));
    }
  } catch (error) {
    yield put(HotelListError({ error: error }));
  }
}

export function* hotelListRequest() {
  yield takeLatest(actions.HotelList_Request, hotelListSaga);
}
