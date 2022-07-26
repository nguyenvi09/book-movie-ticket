import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel as Banner } from "antd";
import { getCarouselAction } from "../../../redux/actions/carouselAction";
import "./Carousel.scss";

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
