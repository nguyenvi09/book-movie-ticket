import { BaseService } from "./BaseService";
import { GROUPID } from "../util/settings/config";
export class QuanLyDatVeService extends BaseService {
  constructor() {
    super();
  }

  layChiTietPhongVe = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
}

export const quanLyDatVeService = new QuanLyDatVeService();
