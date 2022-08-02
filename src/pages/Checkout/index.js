import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, NavLink, useParams } from "react-router-dom";
import {
  datVeAction,
  getOfficeDetailAction,
} from "../../redux/actions/ticketManagerAction";
import { USER_LOGIN } from "../../util/settings/config";
import "./checkout.scss";
import { CloseOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../redux/contants/movie-booking";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Tabs } from "antd";
import moment from "moment";
import _ from "lodash";
import { getUserInfoAction } from "../../redux/actions/userManagementAction";

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.userManagerReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.ticketManagerReducer
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getOfficeDetailAction(id);
    dispatch(action);
  }, []);

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate replace to="/login" />;
  }

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      if (indexGheDD !== -1) {
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
              classGheDaDuocDat !== "" ? (
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
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div>{renderSeats()}</div>
          </div>

          <div className="mt-4">
            <table className="table">
              <thead className="bg-gray text-white">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế bạn đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody>
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
                      <CloseOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheDaDuocDat text-center">
                      {" "}
                      <UserOutlined
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
        <div className="col-3 text-white">
          <div
            style={{
              backgroundColor: "#00000069",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h2 className="text-white text-center">{thongTinPhim.tenPhim}</h2>
            <p>
              <span className="text-secondary">Ngày giờ chiếu:</span>{" "}
              {thongTinPhim.ngayChieu} -{thongTinPhim.gioChieu}
            </p>
            <p>
              <span className="text-secondary">Cụm rạp:</span>{" "}
              {thongTinPhim.tenCumRap}
            </p>
            <p>
              <span className="text-secondary">Rạp:</span> {thongTinPhim.tenRap}
            </p>
            <div className="row">
              <div className="col-12" style={{ minHeight: "70px" }}>
                <span className="text-secondary">Ghế chọn: </span>
                <span>
                  {danhSachGheDangDat.map((gheDD, index) => {
                    return (
                      <span key={index} className="text-success">
                        G{gheDD.stt}
                        {"-"}
                        {gheDD.giaVe.toLocaleString()}
                        {"đ "}
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
            <hr />
            <h3 className="display-5 text-white">
              <span className="text-secondary">Tổng tiền:</span>{" "}
              {danhSachGheDangDat
                .reduce((tongTien, ghe) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
              đ
            </h3>
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
    </div>
  );
}

const { TabPane } = Tabs;

export default function CheckoutTab(props) {
  const { tabActive } = useSelector((state) => state.ticketManagerReducer);
  const dispatch = useDispatch();
  return (
    <div className="p-5 bg-checkout">
      <Tabs
        tabBarStyle={{ color: "white" }}
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
          <TicketBookingResults />
        </TabPane>
      </Tabs>
    </div>
  );
}

function TicketBookingResults(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.userManagerReducer
  );

  useEffect(() => {
    const action = getUserInfoAction();
    dispatch(action);
  }, []);

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div
          style={{
            display: "flex",
            gap: "20px",
            border: "1px solid white",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          key={index}
        >
          <img
            alt={ticket.tenPhim}
            style={{ width: "20%" }}
            src={ticket.hinhAnh}
          />
          <div className="text-white">
            <h1 className="text-white">{ticket.tenPhim}</h1>
            <p className="text-gray-500">
              <span className="font-bold">Giờ chiếu:</span>{" "}
              {moment(ticket.ngayDat).format("hh:mm A")} -{" "}
              <span className="font-bold">Ngày chiếu:</span>{" "}
              {moment(ticket.ngayDat).format("DD-MM-YYYY")}
            </p>
            <p>
              <span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}{" "}
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
      );
    });
  };

  return (
    <div className="p-5 container">
      <div className="text-center mb-5">
        <h1 style={{ fontSize: "4rem", fontWeight: "900", color: "white" }}>
          Lịch sử đặt vé khách hàng
        </h1>
      </div>
      <div className="render-ticket">{renderTicketItem()}</div>
    </div>
  );
}
