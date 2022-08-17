import { relativeTimeRounding } from "moment";
import { GROUPID } from "../util/settings/config";
import { BaseService } from "./BaseService";
export class UserManagementService extends BaseService {
  constructor() {
    super();
  }

  logIn = (logInInfo) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, logInInfo);
  };

  registerAccount = (registerInfo) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, registerInfo);
  };

  getUserInfo = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  updateAccount = (updateInfo) => {
    return this.put(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      updateInfo
    );
  };

  getUserList = (tuKhoa = "") => {
    if (tuKhoa.trim() !== "") {
      return this.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`
      );
    }
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  deleteUser = (taiKhoan) => {
    return this.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  };
}

export const userManagementService = new UserManagementService();
