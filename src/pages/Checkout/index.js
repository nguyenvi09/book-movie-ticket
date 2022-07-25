import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/quanLyDatVeAction";
import { USER_LOGIN } from "../../util/settings/config";
import styles from "./checkout.module.css";
import "./checkout.css";
import { CloseOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../redux/contants/movie-booking";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Tabs } from "antd";
import moment from "moment";
import _ from "lodash";
import { layThongTinNguoiDungAction } from "../../redux/actions/quanLyNguoiDungAction";

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

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

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
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDaDuocDat}`}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat != "" ? (
                <UserOutlined />
              ) : (
                <CloseOutlined />
              )
            ) : (
              ghe.stt
            )}
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

          <div className="mt-4">
            <table className="table">
              <thead className="bg-gray">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td>
                    <button className="ghe text-center">
                      {" "}
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheDangDat text-center">
                      {" "}
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheVip text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheDaDat text-center">
                      {" "}
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheDaDuocDat text-center">
                      {" "}
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheKhachDat text-center">
                      {" "}
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
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
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                dispatch(datVeAction(thongTinDatVe));
              }}
            >
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function CheckoutTab(props) {
  const { tabActive } = useSelector((state) => state.quanLyDatVeReducer);
  const dispatch = useDispatch();
  return (
    <div className="p-5">
      <Tabs
        defaultActiveKey="1"
        activeKey={tabActive}
        onChange={(key) => {
          dispatch({
            type: "CHANGE_TAB_ACTIVE",
            number: key.toString(),
          });
        }}
      >
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
          <Checkout />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe />
        </TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungReducer
  );

  // const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  // console.log("userLogin", userLogin);
  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  console.log("thongTinNguoiDung", thongTinNguoiDung);

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);

      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-pink-500 title-font font-medium text-2xl">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                <span className="font-bold">Giờ chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("hh:mm A")} -{" "}
                <span className="font-bold">Ngày chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("DD-MM-YYYY")} .
              </p>
              <p>
                <span className="font-bold">Địa điểm:</span>{" "}
                {seats.tenHeThongRap}{" "}
              </p>
              <p>
                <span className="font-bold">Tên rạp:</span> {seats.tenCumRap} -{" "}
                <span className="font-bold">Ghế:</span>{" "}
                {ticket.danhSachGhe.map((ghe, index) => {
                  return (
                    <span className="text-green-500 text-xl" key={index}>
                      {" "}
                      [ {ghe.tenGhe} ]{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !
            </p>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
}
