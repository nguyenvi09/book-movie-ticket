import { GROUPID } from "../util/settings/config";
import { BaseService } from "./BaseService";

export class MovieManagerService extends BaseService {
  constructor() {
    super();
  }

  getBanners = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };

  layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
}

export const movieManagerService = new MovieManagerService();
