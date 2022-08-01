import { ticketManagerService } from "../../services/TicketManagerService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import {
  CHUYEN_TAB,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "../contants/movie-booking";
import { displayLoadingAction, hideLoadingAction } from "./loadingAction";

export const getOfficeDetailAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await ticketManagerService.layChiTietPhongVe(maLichChieu);
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          data: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await ticketManagerService.datVe(thongTinDatVe);
      console.log(result.data.content);
      //Đặt vé thành công -> gọi lại api load lại trang phòng vé
      await dispatch(getOfficeDetailAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(hideLoadingAction);
      dispatch({ type: CHUYEN_TAB });
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error);
    }
  };
};
