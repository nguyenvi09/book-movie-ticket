//tạo file này quản lý tương ứng với API BE tạo
// tạo 1 lớp đối tượng

import { GROUPID } from "../util/settings/config";
import { BaseService } from "./BaseService";

export class QuanLyPhimService extends BaseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    //method get() kế thừa từ class BaseService
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };

  layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
}

//export đối tượng được tạo từ lớp đối tượng
export const quanLyPhimService = new QuanLyPhimService();

//có thể bóc tách rồi export ra property or method cần
// const qlPhimService = new QuanLyPhimService();

// export const {layDanhSachBanner} = qlPhimService;
