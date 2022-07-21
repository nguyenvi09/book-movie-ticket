import { GET_CAROUSEL } from "../../contants/movie-booking";

const initialState = {
  arrBanner: [],
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL: {
      // state.arrBanner = action.data;
      // console.log(state);
      // return { ...state };
      return { ...state, arrBanner: action.data };
    }
    default:
      return { ...state };
  }
};

export default carouselReducer;
