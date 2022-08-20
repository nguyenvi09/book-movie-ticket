import React, { useState } from "react";
import styles from "./AddUserModal.module.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Button, Modal } from "antd";
import { GROUPID } from "../../util/settings/config";
import {
  addUserAction,
  editUserAction,
} from "../../redux/actions/userManagementAction";

const AddUserModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})/;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      maNhom: GROUPID,
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "KhachHang",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .required("Tài khoản không được bỏ trống!")
        .min(6, "Tài khoản tối thiểu 6 ký tự!"),
      hoTen: Yup.string().required("Họ tên không được bỏ trống!"),
      matKhau: Yup.string()
        .required("Mật khẩu không được bỏ trống!")
        .min(8, "Mật khẩu tối thiểu 6 ký tự!"),
      email: Yup.string()
        .required("Email không được bỏ trống!")
        .email("Email không hợp lệ, ví dụ: example@gmail.com"),
      soDT: Yup.string()
        .required("Số điện thoại không được bỏ trống!")
        .max(10, "Tối ta 10 chữ số!")
        .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addUserAction(values));
      handleCancel();
      resetForm();
    },
  });
  const handleOK = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <Button
        style={{ backgroundColor: "green" }}
        type="primary"
        onClick={showModal}
      >
        Thêm người dùng
      </Button>
      <Modal
        title="Thêm người dùng"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOK}
        okType="primary"
        okText="Thêm"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group row">
            <label className="col-3 col-form-label">Tài khoản</label>
            <div className="col-9">
              <input
                type="text"
                className={`form-control ${styles[`input`]}`}
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
              />
              {formik.errors.taiKhoan && (
                <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
                  {formik.errors.taiKhoan}
                </span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Họ tên</label>
            <div className="col-9">
              <input
                type="text"
                className={`form-control ${styles[`input`]}`}
                name="hoTen"
                value={formik.values.hoTen}
                onChange={formik.handleChange}
              />
              {formik.errors.hoTen && (
                <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
                  {formik.errors.hoTen}
                </span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Email</label>
            <div className="col-9">
              <input
                type="email"
                className={`form-control ${styles[`input`]}`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
                  {formik.errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Loại người dùng</label>
            <div className="col-9">
              <select
                name="maLoaiNguoiDung"
                className={`form-control ${styles[`input`]}`}
                onChange={formik.handleChange}
                value={formik.values.maLoaiNguoiDung}
              >
                <option value="QuanTri">Quản trị</option>
                <option value="KhachHang">Khách hàng</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Số điện thoại</label>
            <div className="col-9">
              <input
                type="text"
                className={`form-control ${styles[`input`]}`}
                name="soDT"
                value={formik.values.soDT}
                onChange={formik.handleChange}
              />
              {formik.errors.soDT && (
                <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
                  {formik.errors.soDT}
                </span>
              )}
            </div>
          </div>

          <div className="form-group row">
            <label className="col-3 col-form-label">Mật khẩu</label>
            <div className="col-9">
              <input
                type="text"
                className={`form-control ${styles[`input`]}`}
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
              />
              {formik.errors.matKhau && (
                <span style={{ fontSize: "1.6rem", color: "#ff0000c2" }}>
                  {formik.errors.matKhau}
                </span>
              )}
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddUserModal;
