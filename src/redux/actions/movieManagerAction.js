import { GET_LIST_MOVIE } from "../contants/movie-booking";
import { movieManagerService } from "../../services/MovieManagerService";

export const getListMovieAction = () => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.layDanhSachPhim();
      dispatch({
        type: GET_LIST_MOVIE,
        data: result.data.content,
      });
    } catch (errors) {
      console.log("error", errors);
    }
  };
};
