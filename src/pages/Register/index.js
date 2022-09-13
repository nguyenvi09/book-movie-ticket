import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import styles from './Register.module.scss';
import { useDispatch } from 'react-redux';
import { registerAccountAction } from '../../redux/actions/userManagementAction';
function Register() {
  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      email: '',
      soDienThoai: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .required('Tài khoản không được bỏ trống!')
        .min(6, 'Tài khoản tối thiểu 6 ký tự'),
      matKhau: Yup.string().required('Mật khẩu không được bỏ trống!'),
      hoTen: Yup.string().required('Họ tên không được bỏ trống!'),
      email: Yup.string()
        .required('Email không được bỏ trống!')
        .email('Email không hợp lệ, ví dụ: example@gmail.com'),
      soDienThoai: Yup.string()
        .required('Số điện thoại không được bỏ trống!')
        .max(10, 'Tối ta 10 chữ số!')
        .matches(phoneRegExp, 'Số điện thoại không hợp lệ!'),
    }),
    onSubmit: (values) => {
      dispatch(registerAccountAction(values));
    },
  });
  return (
    <div className={`${styles['register__background']}`}>
      <form
        onSubmit={formik.handleSubmit}
        className={`${styles['register__form']}`}
      >
        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            name="taiKhoan"
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
            placeholder="Tên đăng nhập"
          />
          {formik.errors.taiKhoan && (
            <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
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
            <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
              {formik.errors.matKhau}
            </span>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            name="hoTen"
            value={formik.values.hoTen}
            onChange={formik.handleChange}
            placeholder="Họ và tên"
          />
          {formik.errors.hoTen && (
            <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
              {formik.errors.hoTen}
            </span>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            className="form-control form-control-lg"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Nhập Email"
          />
          {formik.errors.email && (
            <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
              {formik.errors.email}
            </span>
          )}
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            name="soDienThoai"
            value={formik.values.soDienThoai}
            onChange={formik.handleChange}
            placeholder="Nhập số điện thoại"
          />
          {formik.errors.soDienThoai && (
            <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
              {formik.errors.soDienThoai}
            </span>
          )}
        </div>
        <div className="pt-1 mb-4">
          <button className="btn btn-danger btn-lg btn-block" type="submit">
            Đăng ký
          </button>
        </div>
        <span>Bạn đã có tài khoản? </span>
        <NavLink to="/login">Đăng nhập</NavLink>
        <NavLink className={`${styles['close']}`} to="/">
          X
        </NavLink>
      </form>
    </div>
  );
}

export default Register;
