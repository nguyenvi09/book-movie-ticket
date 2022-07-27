import { SET_HE_THONG_RAP_CHIEU } from "../contants/movie-booking";

const initialState = {
  cinemaSystem: [],
};

const theaterManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU: {
      state.cinemaSystem = action.data;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default theaterManagerReducer;
