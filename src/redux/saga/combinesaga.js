import { registrationRequest } from "./registration";
import { loginRequest } from "./login";
import { hotelListRequest } from "./hotelListSaga";
import { addHotelRequest } from "./addHotel";

import {editListRequest} from "./edithotelListsaga"
import {UpdateHotelRequest} from "./updateHotelsaga"
import { hotelEventRequest } from "./hotelEvents";
import { fork, all } from "redux-saga/effects";

function* watchAllSaga() {
  {
    yield all([
      fork(registrationRequest),
      fork(loginRequest),
      fork(hotelListRequest),
      fork(addHotelRequest),
      fork(editListRequest),
      fork(UpdateHotelRequest),
      fork(hotelEventRequest),
    ]);
  }
}

export default watchAllSaga;
