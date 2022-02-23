import { combineReducers } from "redux";
import Loginreducer from "./login";
import HotelListReducer from "./hotelListreducer";
import { addHotelReducer } from "./addHotelreducer";
import editHotelListreducer from "./editHotelListreducer";
import updateHotelreducer from "./updateHotelreducer";

const rootReducer = combineReducers({
  Loginstatus: Loginreducer,
  hotelListStatus: HotelListReducer,
  addHotelStatus:addHotelReducer,
  editListStatus : editHotelListreducer,
  updateListStatus : updateHotelreducer,
});

export default rootReducer;
