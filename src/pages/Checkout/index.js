import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { layChiTietPhongVeAction } from "../../redux/actions/quanLyDatVeAction";
import { USER_LOGIN } from "../../util/settings/config";
import styles from "./checkout.module.css";
import "./checkout.css";
import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../redux/contants/movie-booking";
function Checkout(props) {
  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.quanLyDatVeReducer
  );
  console.log(chiTietPhongVe);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layChiTietPhongVeAction(id);
    dispatch(action);
  }, []);

  //kiểm tra nếu chưa đăng nhập thì chuyển hướng sang trang đăng nhập
  //nếu chưa tồn tại localStorage thì ko cho vào
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate replace to="/login" />;
  }
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      //kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD != -1) {
        classGheDaDat = "gheDangDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat}`}
            key={index}
          >
            {ghe.daDat ? <CloseOutlined /> : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-9">
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div
              className="bg-dark"
              style={{ width: "80%", height: "10px" }}
            ></div>
            <div className={`${styles["trapezoid"]}`}>
              <h2 style={{ marginTop: "10px", textAlign: "center" }}>
                Màn hình
              </h2>
            </div>
            <div>{renderSeats()}</div>
          </div>
        </div>
        <div className="col-3">
          <h3 className="display-4">
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}
          </h3>
          <div>{thongTinPhim.tenPhim}</div>
          <p>
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>
            Ngày chiếu: {thongTinPhim.gioChieu} - {thongTinPhim.ngayChieu}
          </p>
          <div className="row">
            <div className="col-6">
              <span>Ghế</span>
              <span>
                {danhSachGheDangDat.map((gheDD, index) => {
                  return (
                    <span key={index} className="text-success">
                      {gheDD.stt}{" "}
                    </span>
                  );
                })}
              </span>
            </div>
            <div className="col-6">
              <span>
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <div className="mt-2">
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              style={{ fontSize: "2rem", width: "100%", fontWeight: "700" }}
              className="btn btn-danger px-3"
            >
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
