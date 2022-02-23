import { registrationRequest } from "./registration";
import { loginRequest } from "./login";
import { hotelListRequest } from "./hotelListSaga";
import { addHotelRequest } from "./addHotel";
import {editListRequest} from "./edithotelListsaga"
import { fork, all } from "redux-saga/effects";

function* watchAllSaga() {
  {
    yield all([
      fork(registrationRequest),
      fork(loginRequest),
      fork(hotelListRequest),
      fork(addHotelRequest),
      fork(editListRequest),
    ]);
  }
}

export default watchAllSaga;
