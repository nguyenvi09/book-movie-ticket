import { SET_HE_THONG_RAP_CHIEU } from "../../contants/movie-booking";

const initialState = {
  heThongRapChieu: [],
};

const quanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU: {
      state.heThongRapChieu = action.data;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default quanLyRapReducer;
