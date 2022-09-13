import { Button, Modal } from 'antd';
import { DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovieUploadAction } from '../../../redux/actions/movieManagerAction';
import { GROUPID } from '../../../util/settings/config';

const EditFilmModal = (props) => {
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

  const { film } = props;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      //cần trường mã phim để POST cập nhật phim
      maPhim: film.maPhim,
      tenPhim: film.tenPhim,
      trailer: film.trailer,
      moTa: film.moTa,
      ngayKhoiChieu: film.ngayKhoiChieu,
      dangChieu: film.dangChieu,
      sapChieu: film.sapChieu,
      hot: film.hot,
      danhGia: film.danhGia,
      hinhAnh: null,
      maNhom: GROUPID,
    },
    onSubmit: (values) => {
      values.maNhom = GROUPID;
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append('File', values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(updateMovieUploadAction(formData));
      handleCancel();
    },
  });

  const handleChangeDatePicker = (value) => {
    //chuyển đổi object moment thành chuỗi để gửi đi
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => formik.setFieldValue(name, value);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => formik.setFieldValue(name, value);
  };

  const handleChangeFile = async (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/gif' ||
      file.type === 'image/png'
    ) {
      //Đem dữ liệu file lưu vào formik
      await formik.setFieldValue('hinhAnh', file);
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sửa
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
            <h3>Cập nhật phim </h3>
            <Form.Item label="Tên phim">
              <Input
                name="tenPhim"
                onChange={formik.handleChange}
                value={formik.values.tenPhim}
              />
            </Form.Item>
            <Form.Item label="Trailer">
              <Input
                name="trailer"
                onChange={formik.handleChange}
                value={formik.values.trailer}
              />
            </Form.Item>
            <Form.Item label="Mô tả">
              <Input
                name="moTa"
                onChange={formik.handleChange}
                value={formik.values.moTa}
              />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
              <DatePicker
                format={'DD/MM/YYYY'}
                onChange={handleChangeDatePicker}
                value={moment(formik.values.ngayKhoiChieu)}
              />
            </Form.Item>
            <Form.Item label="Đang chiếu">
              <Switch
                onChange={handleChangeSwitch('dangChieu')}
                checked={formik.values.dangChieu}
              />
            </Form.Item>
            <Form.Item label="Sắp chiếu">
              <Switch
                onChange={handleChangeSwitch('sapChieu')}
                checked={formik.values.sapChieu}
              />
            </Form.Item>
            <Form.Item label="Hot">
              <Switch
                onChange={handleChangeSwitch('hot')}
                checked={formik.values.hot}
              />
            </Form.Item>

            <Form.Item label="Số sao">
              <InputNumber
                onChange={handleChangeInputNumber('danhGia')}
                min={1}
                max={10}
                value={formik.values.danhGia}
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
                src={imgSrc === '' ? film.hinhAnh : imgSrc}
                alt="..."
                accept="image/png, image/jpeg,image/gif,image/png"
              />
            </Form.Item>
            <div style={{ textAlign: 'right' }}>
              <button type="submit" className="bg-success text-white p-2">
                Cập nhật phim
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default EditFilmModal;
