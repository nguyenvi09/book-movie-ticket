import { combineReducers } from "redux";
import carouselReducer from "./carousel/carouselReducer";
import quanLyPhimReducer from "./quan-ly-phim/quanLyPhimReducer";
import quanLyRapReducer from "./quan-ly-rap/quanLyRapReducer";
import quanLyNguoiDungReducer from "./quan-ly-nguoi-dung/quanLyNguoiDungReducer";
import quanLyDatVeReducer from "./quan-ly-dat-ve/quanLyDatVeReducer";
const rootReducer = combineReducers({
  //chứa state ứng dụng
  carouselReducer,
  quanLyPhimReducer,
  quanLyRapReducer,
  quanLyNguoiDungReducer,
  quanLyDatVeReducer,
});

export default rootReducer;
