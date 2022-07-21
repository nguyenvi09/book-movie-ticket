import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel as Banner } from "antd";
import { getCarouselAction } from "../../../redux/actions/carouselAction";
import "./Carousel.css";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};
function Carousel() {
  const { arrBanner } = useSelector((state) => state.carouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //1. dispatch action = {type, data}
    //2. dispatach hàm thì phải cài middleware

    //khi gọi hàm getCarouselAction() -> return về 1 hàm
    //hàm này truyền vào dispatch
    // lúc này dispatch bên trong redux-thunk tạm hoãn gửi lên reducer
    //vì chờ gọi xong api => thành công  => dispatch({
    //   type: GET_CAROUSEL,
    //   arrBanner: result.content,
    // }); lên reducer
    dispatch(getCarouselAction());
  }, []);

  const renderBanner = () => {
    return arrBanner?.map((banner) => {
      return (
        <div key={banner.maBanner}>
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${banner.hinhAnh})`,
            }}
          >
            <img
              style={{ width: "100%", opacity: 0 }}
              src={banner.hinhAnh}
              alt={banner.maPhim}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Banner autoplay effect="fade">
      {renderBanner()}
    </Banner>
  );
}

export default Carousel;
