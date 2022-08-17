import React, { Fragment, useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieAction,
  getListMovieAction,
} from "../../../redux/actions/movieManagerAction";
import { Outlet } from "react-router-dom";
import FilmModal from "../../../components/FilmModal";
import {
  deleteUserAction,
  getUserListAction,
} from "../../../redux/actions/userManagementAction";
function UserManagement() {
  const { userList } = useSelector((state) => state.userManagerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  const { Search } = Input;

  const onSearch = (value) => {
    dispatch(getUserListAction(value));
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",

      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      defaultSortOrder: "descend",
      width: "15%",
    },

    {
      title: "Họ tên",
      dataIndex: "hoTen",

      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return -1;
        }
        return 1;
      },
      sortDirections: ["ascend", "descend"],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      width: "15%",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      width: "15%",
    },
    {
      title: "Thao tác",
      dataIndex: "maPhim",
      render: (text, user) => {
        return (
          <Fragment>
            {/* <FilmModal maPhim={user.taiKhoan} /> */}
            <Button
              type="danger"
              key={2}
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xóa phim: " + user.hoTen)
                ) {
                  dispatch(deleteUserAction(user.taiKhoan));
                }
              }}
            >
              Xóa
            </Button>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
  ];
  const data = userList;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="container">
      <Search
        placeholder="Tìm kiếm phim"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="taiKhoan"
      />
      <Outlet />
    </div>
  );
}

export default UserManagement;
