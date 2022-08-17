import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "../contants/movie-booking";

const initialState = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
  tabActive: "1",
};
const ticketManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      return { ...state, chiTietPhongVe: action.data };
    }
    case DAT_VE: {
      //cập nhật danh sách ghế đang đặt, nếu chưa thì thêm, nếu có thì xóa
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index != -1) {
        //nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi -> xóa đi
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }

      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case DAT_VE_HOAN_TAT: {
      return { ...state, danhSachGheDangDat: [] };
    }
    case CHUYEN_TAB: {
      return { ...state, tabActive: "2" };
    }
    case "CHANGE_TAB_ACTIVE": {
      state.tabActive = action.number;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ticketManagerReducer;
