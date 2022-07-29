import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInAction } from "../../redux/actions/userManagementAction";
import { USER_LOGIN } from "../../util/settings/config";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .required("Tài khoản không được bỏ trống!")
        .min(6, "Tài khoản tối thiểu 6 ký tự"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống!"),
    }),
    onSubmit: (values) => {
      const action = logInAction(values);
      dispatch(action);
      if (localStorage.getItem(USER_LOGIN)) {
        navigate(-1);
      }
    },
  });

  return (
    <div className={`${styles["login__background"]}`}>
      <form
        onSubmit={formik.handleSubmit}
        className={`${styles["login__form"]}`}
      >
        <h1>Đăng nhập</h1>
        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            name="taiKhoan"
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
            placeholder="Nhập tài khoản"
          />
          {formik.errors.taiKhoan && (
            <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
              {formik.errors.taiKhoan}
            </span>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            className="form-control form-control-lg"
            name="matKhau"
            value={formik.values.matKhau}
            onChange={formik.handleChange}
            placeholder="Nhập mật khẩu"
          />
          {formik.errors.matKhau && (
            <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
              {formik.errors.matKhau}
            </span>
          )}
        </div>
        <div className="pt-1 mb-4">
          <button className="btn btn-info btn-lg btn-block" type="submit">
            Đăng nhập
          </button>
        </div>
        <p className="small mb-5 pb-lg-2">
          <a href="#!">Quên mật khẩu?</a>
        </p>
        <p>
          Don't have an account?{" "}
          <NavLink to="/register" className="link-info">
            Đăng ký
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
