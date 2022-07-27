import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import movieMangerReducer from "./movieMangerReducer";
import theaterManagerReducer from "./theaterManagerReducer";
import quanLyNguoiDungReducer from "./quan-ly-nguoi-dung/quanLyNguoiDungReducer";
import quanLyDatVeReducer from "./quan-ly-dat-ve/quanLyDatVeReducer";
import loadingReducer from "./loading/loadingReducer";
const rootReducer = combineReducers({
  //chứa state ứng dụng
  carouselReducer,
  movieMangerReducer,
  theaterManagerReducer,
  quanLyNguoiDungReducer,
  quanLyDatVeReducer,
  loadingReducer,
});

export default rootReducer;
