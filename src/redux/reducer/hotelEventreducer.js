import * as actions from "../actionTypes";
const initialstate = {
  isLoading: false,
  isLogin: false,
};

export const hotelEventReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actions.Hotel_Event_Request:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
      };

    case actions.Hotel_Event_Success:
      console.log(action.payload, "============");
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        hotelEvents: action.payload.response,
      };
    case actions.Hotel_Event_Error:
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

export default hotelEventReducer;
