import React from "react";
import styles from "./login.module.scss";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/actions/quanLyNguoiDungAction";
import { USER_LOGIN } from "../../util/settings/config";

function Login(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  const navigate = useNavigate();

  console.log("userLogin", userLogin);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("values", values);
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
            onChange={formik.handleChange}
            placeholder="Nhập tài khoản"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            className="form-control form-control-lg"
            name="matKhau"
            onChange={formik.handleChange}
            placeholder="Nhập mật khẩu"
          />
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
