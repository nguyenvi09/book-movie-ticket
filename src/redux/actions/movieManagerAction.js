import {
  DELETE_MOVIE,
  GET_LIST_MOVIE,
  SET_MOVIE_INFO,
} from "../contants/movie-booking";
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

export const addMovieUploadPictureAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await movieManagerService.addMovieUploadPicture(formData);
      alert("Thêm phim thành công");
    } catch (errors) {
      console.log("error", errors);
    }
  };
};

export const updateMovieUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await movieManagerService.updateMovieUpload(formData);
      alert("Cập nhật phim thành công");
      dispatch(getListMovieAction());
    } catch (errors) {
      console.log("error", errors);
    }
  };
};

export const getMovieInfoAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.getMovieInfo(maPhim);
      dispatch({
        type: SET_MOVIE_INFO,
        payload: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const deleteMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.deleteMovie(maPhim);
      alert("Xóa phim thành công!");
      dispatch({
        type: DELETE_MOVIE,
        payload: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
