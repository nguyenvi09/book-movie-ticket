import React, { Fragment, useEffect } from "react";
import { Table, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  deleteUserAction,
  getUserListAction,
} from "../../../redux/actions/userManagementAction";

import AddUserModal from "../../../components/AddUserModal";
import EditUserModal from "../../../components/Modal/EditUserModal";
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

      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend", "descend"],
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
      dataIndex: "taiKhoan",
      render: (text, user) => {
        return (
          <Fragment key={user.taiKhoan}>
            <EditUserModal user={user} />
            <Button
              type="danger"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa người dùng: " + user.hoTen
                  )
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
      <AddUserModal />
      <Search
        placeholder="Tìm kiếm người dùng"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={(r) => r.taiKhoan}
      />
      <Outlet />
    </div>
  );
}

export default UserManagement;
