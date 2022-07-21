import {
  GET_LIST_MOVIE,
  SET_CHI_TIET_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../contants/movie-booking";

const initialState = {
  arrMovie: [],
  dangChieu: true,
  sapChieu: true,
  arrMovieDefault: [],
  movieDetail: {},
};

const quanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MOVIE: {
      state.arrMovie = action.data;
      state.arrMovieDefault = state.arrMovie;
      return { ...state };
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrMovie = state.arrMovieDefault.filter(
        (movie) => movie.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrMovie = state.arrMovieDefault.filter(
        (movie) => movie.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_CHI_TIET_PHIM: {
      state.movieDetail = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default quanLyPhimReducer;
