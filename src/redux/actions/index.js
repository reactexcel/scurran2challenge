import { createAction } from "redux-actions";
import * as actions from "../actionTypes";

export const RegistationRequest = createAction(actions.Registation_Request);
export const RegistationSuccess = createAction(actions.Registation_Success);
export const RegistationError = createAction(actions.Registation_Error);

export const LoginRequest = createAction(actions.Login_Request);
export const LoginSuccess = createAction(actions.Login_Sucess);
export const LoginError = createAction(actions.Login_Error);

export const HotelListRequest = createAction(actions.HotelList_Request);
export const HotelListSuccess = createAction(actions.HotelList_Success);
export const HotelListError = createAction(actions.HotelList_Error);

export const AddHotelRequest = createAction(actions.AddHotel_Request);
export const AddHotelSuccess = createAction(actions.AddHotel_Success);
export const AddHotelError = createAction(actions.AddHotel_Error);

export const EditHotelListRequest = createAction(
  actions.Edit_HotelList_Request
);
export const EditHotelListSuccess = createAction(
  actions.Edit_HotelList_Success
);
export const EditHotelListError = createAction(actions.Edit_HotelList_Error);


export const UpdateHotelRequest = createAction(
  actions.Update_Hotel_Request
);
export const UpdateHotelSuccess = createAction(
  actions.Update_Hotel_Success
);
export const UpdateHotelError = createAction(actions.Update_Hotel_Error);
