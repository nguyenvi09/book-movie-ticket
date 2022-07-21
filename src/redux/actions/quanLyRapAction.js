import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "../contants/movie-booking";

//layDanhSachHeThongRap -> thunk action creator
// return async (dispatch) =>{} -> thunk function nhận đối số là dispatch method
// gọi api xong -> dispatch reducer
export const layDanhSachHeThongRap = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        data: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try {
      //gọi service để trả về kết quả
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);

      //sau đó mới gửi lên reducer bằng hàm dispatch của thunk trả ra
      dispatch({ type: SET_CHI_TIET_PHIM, data: result.data.content });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
