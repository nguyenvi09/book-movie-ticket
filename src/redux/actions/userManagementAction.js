import { userManagementService } from "../../services/UserManagementService";
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../contants/movie-booking";

export const logInAction = (logInInfo) => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.logIn(logInInfo);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          data: result.data.content,
        });
        window.alert("Đăng nhập thành công");
      }
    } catch (error) {
      window.alert("Tài khoản hoặc mật khẩu không đúng");
      console.log("error", error);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.layThongTinNguoiDung();
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          data: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
