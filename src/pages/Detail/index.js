import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import { Tabs, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "../../redux/actions/theaterManagerAction";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
function Detail(props) {
  const { movieDetail } = useSelector((state) => state.movieMangerReducer);
  console.log(movieDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movieDetail.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100vw",
      }}
    >
      <Header />

      <div
        style={{ height: "100vh" }}
        className="container d-flex align-items-center"
      >
        <div className="row">
          <div className="col-4">
            <img
              style={{ width: "80%", borderRadius: "20px" }}
              src={movieDetail.hinhAnh}
            />
          </div>
          <div className="col-8 text-white">
            <div
              style={{
                padding: "20px",
                backgroundColor: "rgba(34, 34, 34, .8)",
                borderRadius: "20px",
              }}
            >
              <p className="display-4">{movieDetail.tenPhim}</p>
              <p>Tình trạng: đang chiếu</p>
              <p>
                Đánh giá:{" "}
                <span>
                  <Rate
                    allowHalf
                    value={movieDetail.danhGia / 2}
                    style={{ color: "yellow", fontSize: "3rem" }}
                  />
                </span>
              </p>
              <p>{movieDetail.moTa}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-light p-3">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Lịch chiếu" key="1">
            <Tabs tabPosition={"left"}>
              {movieDetail.heThongRapChieu?.map((item, index) => {
                return (
                  <TabPane
                    tab={
                      <div>
                        <img
                          src={item.logo}
                          width="50"
                          height="50"
                          alt={item.logo}
                        />
                        {item.tenHeThongRap}
                      </div>
                    }
                    key={index}
                  >
                    {item.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div key={index}>
                          <div className="d-flex">
                            <img
                              style={{ width: "60px", height: "60px" }}
                              src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                            />
                            <div className="ml-3">
                              <p>{cumRap.tenCumRap}</p>
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns:
                                    "auto auto  auto auto auto auto",
                                  gap: "20px",
                                }}
                              >
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
          <TabPane tab="Thông tin" key="2">
            Thông tin
          </TabPane>
          <TabPane tab="Đánh giá" key="3">
            Đánh giá
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
