import { BaseService } from "./BaseService";
export class UserManagementService extends BaseService {
  constructor() {
    super();
  }

  logIn = (logInInfo) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, logInInfo);
  };

  getUserInfo = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
}

export const userManagementService = new UserManagementService();
