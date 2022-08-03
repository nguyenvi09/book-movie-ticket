import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import movieManagerReducer from "./movieMangerReducer";
import theaterManagerReducer from "./theaterManagerReducer";
import userManagerReducer from "./userManagerReducer";
import ticketManagerReducer from "./ticketManagerReducer";
import loadingReducer from "./loading/loadingReducer";
const rootReducer = combineReducers({
  //chứa state ứng dụng
  carouselReducer,
  movieManagerReducer,
  theaterManagerReducer,
  userManagerReducer,
  ticketManagerReducer,
  loadingReducer,
});

export default rootReducer;
