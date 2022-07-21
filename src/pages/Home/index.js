import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Layout/Carousel/Carousel";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import TabMovieTheater from "../../components/Layout/TabMovieTheater";
import { layDanhSachHeThongRap } from "../../redux/actions/quanLyRapAction";
import ListMovie from "./_components/ListMovie";

function Home(props) {
  const { heThongRapChieu } = useSelector((state) => state.quanLyRapReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachHeThongRap());
  }, []);
  return (
    <>
      <Header />
      <Carousel />
      <ListMovie />
      <div className="container">
        <TabMovieTheater heThongRapChieu={heThongRapChieu} />
      </div>
      <Footer heThongRapChieu={heThongRapChieu} />
    </>
  );
}

export default Home;
