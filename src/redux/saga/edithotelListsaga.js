import { takeLatest, put, call } from "redux-saga/effects";

import { EditHotelListSuccess,EditHotelListError} from "../actions";
import * as actions from "../actionTypes";
import axios from "axios";

 function* edithotelListSaga(action) {
  console.log('callled  ')
  try {
    console.log('callled',action)
    const { id } = action.payload;
    const response = yield call(
      axios.get,
      `http://176.9.137.77:8024/hotels_list/?hotel_id=${id}`,
      {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    let data = response.data;
    console.log(data, "======121314");
    if (data.success) {
      yield put(EditHotelListSuccess({ response: { data: data } }));
    } 
    else {
      yield put(EditHotelListError({ error: data }));
    }
  } catch (error) {
    // debugger
    console.log(error, "error")
    yield put(EditHotelListError({ error: error }));
  }
}

export function* editListRequest() {
  console.log('ggggggggggggggggg')
  // debugger
  yield takeLatest(actions.Edit_HotelList_Request, edithotelListSaga);
}


