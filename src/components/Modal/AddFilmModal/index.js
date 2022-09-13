import { Button, Modal } from 'antd';
import { DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieUploadPictureAction } from '../../../redux/actions/movieManagerAction';
import { GROUPID } from '../../../util/settings/config';

const AddFilmModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      maNhom: GROUPID,
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      //hình ảnh là 1 object dữ liệu dạng file gửi đi
      hinhAnh: {},
    },
    onSubmit: (values, { resetForm }) => {
      values.maNhom = GROUPID;
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
          formData.append('File', values.hinhAnh, values.hinhAnh.name);
        }
      }

      dispatch(addMovieUploadPictureAction(formData));
      resetForm();
      handleCancel();
    },
  });

  const handleChangeDatePicker = (value) => {
    //chuyển đổi object moment thành chuỗi để gửi đi
    let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => formik.setFieldValue(name, value);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => formik.setFieldValue(name, value);
  };

  const handleChangeFile = (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/gif' ||
      file.type === 'image/png'
    ) {
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      //Đem dữ liệu file lưu vào formik
      formik.setFieldValue('hinhAnh', file);
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Button
        style={{ backgroundColor: 'green' }}
        type="primary"
        onClick={showModal}
      >
        Thêm phim mới
      </Button>
      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <div className="container">
          <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <h1>Thêm phim mới </h1>
            <Form.Item label="Tên phim">
              <Input name="tenPhim" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">
              <Input name="trailer" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mô tả">
              <Input name="moTa" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
              <DatePicker
                format={'DD/MM/YYYY'}
                onChange={handleChangeDatePicker}
              />
            </Form.Item>
            <Form.Item label="Đang chiếu">
              <Switch onChange={handleChangeSwitch('dangChieu')} />
            </Form.Item>
            <Form.Item label="Sắp chiếu">
              <Switch onChange={handleChangeSwitch('sapChieu')} />
            </Form.Item>
            <Form.Item label="Hot">
              <Switch onChange={handleChangeSwitch('hot')} />
            </Form.Item>

            <Form.Item label="Số sao">
              <InputNumber
                onChange={handleChangeInputNumber('danhGia')}
                min={1}
                max={10}
              />
            </Form.Item>

            <Form.Item label="Hình ảnh">
              <input
                type="file"
                accept="image/png, image/jpeg,image/gif,image/png"
                onChange={handleChangeFile}
              />
              <br />
              <img
                style={{ width: 150, height: 150 }}
                src={imgSrc}
                alt="..."
                accept="image/png, image/jpeg,image/gif,image/png"
              />
            </Form.Item>
            <div style={{ textAlign: 'right' }}>
              <button type="submit" className="bg-success text-white p-2">
                Thêm phim
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddFilmModal;
