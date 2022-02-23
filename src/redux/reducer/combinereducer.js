import { combineReducers } from "redux";
import Loginreducer from "./login";
import HotelListReducer from "./hotelListreducer";
import { addHotelReducer } from "./addHotelreducer";
import editHotelListreducer from "./editHotelListreducer";
import hotelEventReducer from "./hotelEventreducer";

const rootReducer = combineReducers({
  Loginstatus: Loginreducer,
  hotelListStatus: HotelListReducer,
  addHotelStatus: addHotelReducer,
  editListStatus: editHotelListreducer,
  hotelEventsStatus: hotelEventReducer,
});

export default rootReducer;
