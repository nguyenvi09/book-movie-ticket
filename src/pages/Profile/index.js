import React, { useState } from "react";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import styles from "./Profile.module.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

function Profile() {
  const { userLogin } = useSelector((state) => state.userManagerReducer);
  // console.log(userLogin);
  const [display, setDisplay] = useState("none");
  const [btnDisplay, setBtnDisplay] = useState("block");
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      hoTen: userLogin.hoTen,
      email: "",
      soDienThoai: "",
      matKhau: "",
      xacNhanMatKhau: "",
    },
    validationSchema: Yup.object({
      // taiKhoan: Yup.string()
      //   .required("Tài khoản không được bỏ trống!")
      //   .min(6, "Tài khoản tối thiểu 6 ký tự"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống!"),
      xacNhanMatKhau: Yup.string()
        .label("confirm password")
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div>
      <Header />
      <div
        style={{ minHeight: "80vh", paddingTop: "100px", textAlign: "center" }}
      >
        <h1> Thông tin tài khoản</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src="https://i.pravatar.cc/"
                alt="https://i.pravatar.cc/"
                style={{
                  width: "70%",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <h1 className="mt-4">{userLogin.taiKhoan}</h1>
            </div>
            <div className="col-8">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Tài khoản</label>
                  <div className="col-sm-10">
                    <input
                      id={`${styles[`input`]}`}
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      value={userLogin.taiKhoan}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Họ tên</label>
                  <div className="col-sm-10">
                    <input
                      id={`${styles[`input`]}`}
                      type="text"
                      className="form-control"
                      name="hoTen"
                      value={userLogin.hoTen}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input
                      id={`${styles[`input`]}`}
                      type="email"
                      className="form-control"
                      name="email"
                      value={userLogin.email}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Số điện thoại
                  </label>
                  <div className="col-sm-10">
                    <input
                      id={`${styles[`input`]}`}
                      type="text"
                      className="form-control"
                      name="soDienThoai"
                      value={userLogin.soDT}
                    />
                  </div>
                </div>

                <div
                  style={{ display: `${display}` }}
                  className="form-group row"
                >
                  <label className="col-sm-2 col-form-label">Mật khẩu</label>
                  <div className="col-sm-10">
                    <input
                      id={`${styles[`input`]}`}
                      type="password"
                      className="form-control"
                    />
                    {formik.errors.matKhau && (
                      <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
                        {formik.errors.matKhau}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  style={{ display: `${display}` }}
                  className="form-group row"
                >
                  <label className="col-sm-2 col-form-label">
                    Nhập lại mật khẩu
                  </label>
                  <div className="col-sm-10">
                    <input
                      id={`${styles[`input`]}`}
                      type="password"
                      className="form-control"
                      name="xacNhanMatKhau"
                    />
                    {formik.errors.xacNhanMatKhau && (
                      <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
                        {formik.errors.xacNhanMatKhau}
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    style={{ display: `${btnDisplay}` }}
                    className="btn btn-danger mb-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setDisplay("flex");
                      setBtnDisplay("none");
                    }}
                  >
                    Cập nhật thông tin
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "end",
                  }}
                >
                  <button
                    style={{ display: `${display}` }}
                    className="btn btn-danger mb-2"
                    type="submit"
                  >
                    Lưu
                  </button>
                  <button
                    style={{ display: `${display}` }}
                    className="btn btn-danger mb-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setDisplay("none");
                      setBtnDisplay("block");
                    }}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
