import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import movieMangerReducer from "./movieMangerReducer";
import theaterManagerReducer from "./theaterManagerReducer";
import userManagerReducer from "./userManagerReducer";
import ticketManagerReducer from "./ticketManagerReducer";
import loadingReducer from "./loading/loadingReducer";
const rootReducer = combineReducers({
  //chứa state ứng dụng
  carouselReducer,
  movieMangerReducer,
  theaterManagerReducer,
  userManagerReducer,
  ticketManagerReducer,
  loadingReducer,
});

export default rootReducer;
