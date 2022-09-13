import React, { useState } from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import styles from './Profile.module.scss';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Button, Modal } from 'antd';
import { GROUPID } from '../../util/settings/config';
import { updateAccountAction } from '../../redux/actions/userManagementAction';
import HomeTemplate from '../../components/HomeTemplate/HomeTemplate';

function Profile() {
  const { userLogin } = useSelector((state) => state.userManagerReducer);
  return (
    <div>
      <HomeTemplate>
        <div
          style={{
            minHeight: '80vh',
            paddingTop: '100px',
            textAlign: 'center',
          }}
        >
          <h1> Thông tin tài khoản</h1>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://i.pravatar.cc/"
                  alt="https://i.pravatar.cc/"
                  style={{
                    width: '70%',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                <h1 className="mt-4">{userLogin.taiKhoan}</h1>
              </div>
              <div className="col-8">
                <form>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Tài khoản</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className={`form-control ${styles[`input`]}`}
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
                        type="text"
                        className={`form-control ${styles[`input`]}`}
                        name="hoTen"
                        value={userLogin.hoTen}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className={`form-control ${styles[`input`]}`}
                        name="email"
                        value={userLogin.email}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                      Số điện thoại
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className={`form-control ${styles[`input`]}`}
                        name="soDienThoai"
                        value={userLogin.soDT}
                        disabled
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <UpdateProfileModal />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </HomeTemplate>
    </div>
  );
}

const UpdateProfileModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { userLogin } = useSelector((state) => state.userManagerReducer);
  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      maNhom: GROUPID,
      taiKhoan: userLogin.taiKhoan,
      hoTen: userLogin.hoTen,
      email: userLogin.email,
      soDT: userLogin.soDT,
      matKhau: '',
      maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required('Họ tên không được bỏ trống!'),
      matKhau: Yup.string().required('Mật khẩu không được bỏ trống!'),
      email: Yup.string()
        .required('Email không được bỏ trống!')
        .email('Email không hợp lệ, ví dụ: example@gmail.com'),
      soDT: Yup.string()
        .required('Số điện thoại không được bỏ trống!')
        .max(10, 'Tối ta 10 chữ số!')
        .matches(phoneRegExp, 'Số điện thoại không hợp lệ!'),
    }),
    onSubmit: (values) => {
      dispatch(updateAccountAction(values));
      handleCancel();
    },
  });
  const handleOK = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <Button type="danger" onClick={showModal}>
        Cập nhật thông tin
      </Button>
      <Modal
        title="Cập nhật thông tin"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOK}
        okType="primary"
        okText="Lưu"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tài khoản</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${styles[`input`]}`}
                name="taiKhoan"
                value={formik.values.taiKhoan}
                disabled
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Họ tên</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${styles[`input`]}`}
                name="hoTen"
                value={formik.values.hoTen}
                onChange={formik.handleChange}
              />
              {formik.errors.hoTen && (
                <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
                  {formik.errors.hoTen}
                </span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className={`form-control ${styles[`input`]}`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
                  {formik.errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Số điện thoại</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${styles[`input`]}`}
                name="soDT"
                value={formik.values.soDT}
                onChange={formik.handleChange}
              />
              {formik.errors.soDT && (
                <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
                  {formik.errors.soDT}
                </span>
              )}
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Mật khẩu</label>
            <div className="col-sm-10">
              <input
                type="password"
                className={`form-control ${styles[`input`]}`}
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
              />
              {formik.errors.matKhau && (
                <span style={{ fontSize: '1.6rem', color: '#ff0000c2' }}>
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

export default Profile;
