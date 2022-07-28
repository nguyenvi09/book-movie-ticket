import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Layout/Carousel/Carousel";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import TabMovieTheater from "../../components/Layout/TabMovieTheater";
import { layDanhSachHeThongRap } from "../../redux/actions/theaterManagerAction";
import ListMovie from "./_components/ListMovie";

function Home(props) {
  const { cinemaSystem } = useSelector((state) => state.theaterManagerReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachHeThongRap());
  }, []);
  return (
    <>
      <Header />
      <Carousel />
      <ListMovie />
      <div className="p-5">
        <h1
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "3rem",
            fontWeight: "800",
          }}
        >
          Lịch chiếu phim
        </h1>
        <div className="container">
          <TabMovieTheater cinemaSystem={cinemaSystem} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
