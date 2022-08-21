import {
  DELETE_MOVIE,
  GET_LIST_MOVIE,
  SET_MOVIE_INFO,
} from "../contants/movie-booking";
import { movieManagerService } from "../../services/MovieManagerService";

export const getListMovieAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.getListMovie(tenPhim);
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
      dispatch(getListMovieAction());
    } catch (errors) {
      console.log("error", errors);
      alert("Lỗi: " + errors.response.data.content);
    }
  };
};

export const updateMovieUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await movieManagerService.updateMovieUpload(formData);
      if (result.data.statusCode == 200) {
        alert("Cập nhật phim thành công");
        dispatch(getListMovieAction());
      }
    } catch (errors) {
      console.log("error", errors);
      alert(errors.response?.data.content);
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
      dispatch(getListMovieAction());
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
