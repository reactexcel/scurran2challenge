import * as actions from "../actionTypes";
const initialstate = {
  isLoading: false,
  isLogin: false,
};

const updateHotelreducer = (state = initialstate, action) => {

  switch (action.type) {
    
    case actions.Update_Hotel_Request:
      console.log(action,'edit-data')
      return {
        ...state,
        isLoading: true,
        isLogin: false,
      };

    case actions.Update_Hotel_Success:
      return {
        ...state,
        isLogin: true,
        isLoading: false,

        updatelist : action.payload?.response?.data,
      };

    case actions.Update_Hotel_Error:
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

export default updateHotelreducer;
