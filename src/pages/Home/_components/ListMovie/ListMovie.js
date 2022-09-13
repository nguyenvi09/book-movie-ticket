import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styleSlick from './ListMovie.module.scss';
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Movie from '../../../../components/Layout/Movie';
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from '../../../../redux/contants/movie-booking';
import { getListMovieAction } from '../../../../redux/actions/movieManagerAction';

const { TabPane } = Tabs;

const onChange = (key) => {};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block', left: '-50px' }}
      onClick={onClick}
    ></div>
  );
}
const settings = {
  className: 'center variable-width',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 2,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function ListMovie() {
  const { arrMovie } = useSelector((state) => state.movieManagerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovieAction());
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
    <div
      style={{
        backgroundImage:
          'url(https://static.mservice.io/img/momo-upload-api-210701105436-637607336767432408.jpg)',
        padding: '70px 0',
      }}
    >
      <div className="container">
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          tabBarStyle={{
            color: 'white',
            textAlign: 'center',
            zoom: 1.3,
            margin: 'auto',
            marginBottom: '20px',
            fontWeight: 900,
          }}
        >
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
    </div>
  );
}

export default ListMovie;
