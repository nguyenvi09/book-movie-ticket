import styles from "./Login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInAction } from "../../redux/actions/userManagementAction";

function Login(props) {
  const dispatch = useDispatch();

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
      dispatch(logInAction(values));
    },
  });

  return (
    <div className={`${styles["login__background"]}`}>
      <form
        onSubmit={formik.handleSubmit}
        className={`${styles["login__form"]}`}
      >
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
          <button className="btn btn-danger btn-lg btn-block" type="submit">
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
        <NavLink className={`${styles["close"]}`} to="/">
          X
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
