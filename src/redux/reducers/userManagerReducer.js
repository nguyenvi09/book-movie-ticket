import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import {
  DANG_NHAP_ACTION,
  LOG_OUT,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../contants/movie-booking";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  thongTinNguoiDung: {},
  userList: [],
};

const userManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { data } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(data));
      localStorage.setItem("TOKEN", data.accessToken);
      return { ...state, userLogin: data };
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      return { ...state, thongTinNguoiDung: action.data };
    }

    case LOG_OUT: {
      return { ...state, userLogin: action.payload };
    }
    case "UPDATE_ACCOUNT": {
      return { ...state, userLogin: action.payload };
    }
    case "SET_DANH_SACH_NGUOI_DUNG": {
      return { ...state, userList: action.payload };
    }
    case "XOA_NGUOI_DUNG":
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.taiKhoan !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default userManagerReducer;
