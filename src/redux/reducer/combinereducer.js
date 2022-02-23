import { combineReducers } from "redux";
import Loginreducer from "./login";
import HotelListReducer from "./hotelListreducer";
import { addHotelReducer } from "./addHotelreducer";
const rootReducer = combineReducers({
  Loginstatus: Loginreducer,
  hotelListStatus: HotelListReducer,
  addHotelStatus:addHotelReducer
});

export default rootReducer;
