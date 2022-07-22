import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import { DANG_NHAP_ACTION } from "../contants/movie-booking";
export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          data: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
