import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import {
  CHUYEN_TAB,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "../contants/movie-booking";
import { displayLoadingAction, hideLoadingAction } from "./loadingAction";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      console.log(result);
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          data: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log(result.data.content);
      //Đặt vé thành công -> gọi lại api load lại trang phòng vé
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(hideLoadingAction);
      dispatch({ type: CHUYEN_TAB });
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error);
    }
  };
};
