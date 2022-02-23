import * as actions from "../actionTypes";
const initialstate = {
  isLoading: false,
  isLogin: false,
};

const HotelListReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actions.HotelList_Request:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
      };

    case actions.HotelList_Success:
      return {
        ...state,
        isLogin: true,
        isLoading: false,

        hotelList: action.payload?.response?.data,
      };

    case actions.HotelList_Error:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default HotelListReducer;
