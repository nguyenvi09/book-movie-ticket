import { GET_CAROUSEL } from "../contants/movie-booking";
import { movieManagerService } from "../../services/MovieManagerService";
export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await movieManagerService.getBanners();

      dispatch({
        type: GET_CAROUSEL,
        data: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
