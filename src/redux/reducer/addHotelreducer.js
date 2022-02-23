import * as actions from "../actionTypes";
const initialstate = {
  isLoading: false,
  isLogin: false,
};

export const addHotelReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actions.AddHotel_Request:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
      };

    case actions.AddHotel_Success:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        addhotel: action.payload?.response?.data,
      };
    case actions.AddHotel_Error:
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

export default addHotelReducer;
