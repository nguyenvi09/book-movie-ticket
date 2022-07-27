import { theaterManagerService } from "../../services/TheaterManagerService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "../contants/movie-booking";

export const layDanhSachHeThongRap = () => {
  return async (dispatch) => {
    try {
      const result = await theaterManagerService.layDanhSachHeThongRap();
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        data: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const result = await theaterManagerService.getMovieShowtimeInfo(id);
      dispatch({ type: SET_CHI_TIET_PHIM, data: result.data.content });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
