//Middle ware
//tổ chức gọi API trên action

import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { GET_CAROUSEL } from "../contants/movie-booking";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();

      dispatch({
        type: GET_CAROUSEL,
        data: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
