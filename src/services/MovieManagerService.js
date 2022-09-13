import { GROUPID } from '../util/settings/config';
import { BaseService } from './BaseService';

export class MovieManagerService extends BaseService {
  getBanners = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  getListMovie = (tenPhim = '') => {
    if (tenPhim.trim() !== '') {
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`,
      );
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };

  getMovieInfo = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  addMovieUploadPicture = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  updateMovieUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  deleteMovie = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const movieManagerService = new MovieManagerService();
