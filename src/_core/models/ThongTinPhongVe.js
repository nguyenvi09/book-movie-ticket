/**
 * ta tạo ra model ứng với các dự liệu API trả về
 * THẾT KẾ CÁC LỚP ĐỐI TƯỢNG VỚI ĐẦY ĐỦ THUỘC TÍNH MÀ BACKEND TRẢ VỀ
 *
 * để code có hệ thống, tốt hơn
 */

export class ThongTinPhim {
  maLichChieu = "";
  tenCumRap = "";
  tenRap = "";
  diaChi = "";
  tenPhim = "";
  hinhAnh = "";
  ngayChieu = "";
  gioChieu = "";
}

export class Ghe {
  maGhe = "";
  tenGhe = "";
  mapRap = "";
  loaiGhe = "";
  stt = "";
  giaVe = "";
  daDat = "";
  taiKhoanNguoiDat = "";
}

export class ThongTinLichChieu {
  thongTinPhim = new ThongTinPhim();
  danhSachGhe = [];
}
