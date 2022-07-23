import { TOKEN, USER_LOGIN } from "../../../util/settings/config";
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../../contants/movie-booking";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  thongTinNguoiDung: {},
};

const quanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { data } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(data));
      localStorage.setItem("TOKEN", data.accessToken);
      return { ...state, userLogin: data };
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default quanLyNguoiDungReducer;
