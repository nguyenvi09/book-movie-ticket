import { Link } from "react-router-dom";
import { history } from "../../App";
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
        history.back();
      }
    } catch (error) {
      window.alert("Tài khoản hoặc mật khẩu không đúng");
      console.log("error", error);
    }
  };
};

export const getUserInfoAction = () => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.getUserInfo();
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

export const registerAccountAction = (registerInfo) => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.registerAccount(registerInfo);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          data: result.data.content,
        });
        history.back();
        window.alert("Đăng ký thành công");
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const updateAccountAction = (updateInfo) => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.updateAccount(updateInfo);
      dispatch({
        type: "UPDATE_ACCOUNT",
        payload: result.data.content,
      });
      window.alert("Cập nhật thành công!");
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const getUserListAction = (tuKhoa = "") => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.getUserList(tuKhoa);
      if (result.data.statusCode === 200) {
        dispatch({
          type: "SET_DANH_SACH_NGUOI_DUNG",
          payload: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleteUserAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.deleteUser(taiKhoan);
      if (result.data.statusCode === 200) {
        alert("Xóa thành công!");
        dispatch({
          type: "XOA_NGUOI_DUNG",
          payload: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const editUserAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await userManagementService.editUser(user);
      alert("Cập nhật thành công!");
      dispatch({
        type: "EDIT_USER",
        payload: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
