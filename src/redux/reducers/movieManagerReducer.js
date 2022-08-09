import {
  DELETE_MOVIE,
  GET_LIST_MOVIE,
  SET_CHI_TIET_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_MOVIE_INFO,
} from "../contants/movie-booking";

const initialState = {
  arrMovie: [],
  dangChieu: true,
  sapChieu: true,
  arrMovieDefault: [],
  movieDetail: {},
  movieTrailer: "",
  displayTrailer: "none",
  movieInfo: {},
};

const movieManagerReducer = (state = initialState, action) => {
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
    case "SEND_TRAILER": {
      state.movieTrailer = action.payload.trailer;
      state.displayTrailer = action.payload.display;
      return { ...state };
    }
    case "CLOSE_MODAL_TRAILER": {
      state.movieTrailer = "";
      state.displayTrailer = action.display;
      return { ...state };
    }
    case SET_MOVIE_INFO: {
      state.movieInfo = action.payload;
      return { ...state };
    }
    case DELETE_MOVIE: {
      const index = state.arrMovie.findIndex(
        (movie) => movie.maPhim === action.payload.maPhim
      );
      if (index !== -1) {
        state.arrMovie.slice(index, 1);
        return { ...state };
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default movieManagerReducer;
