import { registrationRequest } from "./registration";
import { loginRequest } from "./login";
import { hotelListRequest } from "./hotelListSaga";
import {editListRequest} from "./edithotelListsaga"
// import { CreatePollRequest } from "./CreatePollsaga";
// import { UpdateTitleRequest } from "./PollUpdateSaga/TitleUpdateSaga";
// import { DeletePollRequest } from "./PollUpdateSaga/DeletePollSaga";
// import { DeleteOptionRequest } from "./PollUpdateSaga/DeleteOptionSaga";
// import { AddNewOptionRequest } from "./PollUpdateSaga/AddNewOptionSaga";
import { fork, all } from "redux-saga/effects";
function* watchAllSaga() {
  {
    yield all([
      fork(registrationRequest),
      fork(loginRequest),
      fork(hotelListRequest),
      fork(editListRequest),
      //   fork(CreatePollRequest),
      //   fork(UpdateTitleRequest),
      //   fork(DeletePollRequest),
      //   fork(DeleteOptionRequest),
      //   fork(AddNewOptionRequest),
    ]);
  }
}

export default watchAllSaga;
