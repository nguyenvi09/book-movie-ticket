import { GET_LIST_MOVIE } from "../contants/movie-booking";
import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const getListMovie = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
      dispatch({
        type: GET_LIST_MOVIE,
        data: result.data.content,
      });
    } catch (errors) {
      console.log("error", errors);
    }
  };
};
