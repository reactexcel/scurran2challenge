import * as actions from "../actionTypes";
const initialstate = {
  isLoading: false,
  isLogin: false,
};

const editHotelListreducer = (state = initialstate, action) => {

  switch (action.type) {
    
    case actions.Edit_HotelList_Request:
      console.log(action,'edit-data')
      return {
        ...state,
        isLoading: true,
        isLogin: false,
      };

    case actions.Edit_HotelList_Success:
      return {
        ...state,
        isLogin: true,
        isLoading: false,

        editList: action.payload?.response?.data,
      };

    case actions.Edit_HotelList_Error:
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

export default editHotelListreducer;
