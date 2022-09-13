import { BaseService } from './BaseService';
import { ThongTinDatVe } from '../_core/models/ThongTinDatVe';
export class TicketManagerService extends BaseService {
  layChiTietPhongVe = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    );
  };

  //default param  thongTinDatVe = new ThongTinDatVe()
  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  };
}

export const ticketManagerService = new TicketManagerService();
