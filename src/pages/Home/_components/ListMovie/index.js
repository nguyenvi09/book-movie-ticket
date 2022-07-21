import React, { useEffect } from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getListMovie } from "../../../../redux/actions/quanLyPhimAction";
import Movie from "../../../../components/Layout/Movie";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../../../redux/contants/movie-booking";

const { TabPane } = Tabs;

const onChange = (key) => {};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}
const settings = {
  className: "center variable-width",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function ListMovie() {
  const { arrMovie } = useSelector((state) => state.quanLyPhimReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch function từ redux thunk
    dispatch(getListMovie());
  }, []);

  const renderListMovie = () => {
    return arrMovie?.map((movie) => {
      return (
        <div key={movie.maPhim}>
          <Movie movie={movie} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane
          tab="Phim đang chiếu"
          key="1"
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          <Slider {...settings}>{renderListMovie()}</Slider>
        </TabPane>
        <TabPane
          tab="Phim sắp chiếu"
          key="2"
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          <Slider {...settings}>{renderListMovie()}</Slider>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ListMovie;
