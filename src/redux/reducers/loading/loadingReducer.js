import { DISPLAY_LOADING, HIDE_LOADING } from "../../contants/movie-booking";

const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case HIDE_LOADING: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default loadingReducer;
