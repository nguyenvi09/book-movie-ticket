import { GET_CAROUSEL } from "../../contants/movie-booking";

const initialState = {
  arrBanner: [],
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL: {
      return { ...state, arrBanner: action.data };
    }
    default:
      return { ...state };
  }
};

export default carouselReducer;
