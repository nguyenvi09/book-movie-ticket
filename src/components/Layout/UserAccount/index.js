import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Space } from "antd";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../../redux/contants/movie-booking";

function UserAccount(props) {
  const dispatch = useDispatch();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <NavLink id="userAccount" to="/profile">
              Thông tin tài khoản
            </NavLink>
          ),
          key: "0",
        },
        {
          label: (
            <a
              id="userAccount"
              onClick={() => {
                localStorage.removeItem("USER_LOGIN");
                dispatch({
                  type: LOG_OUT,
                  payload: {},
                });
                window.alert("Đăng xuất thành công");
              }}
            >
              Đăng xuất
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <i
            className="fa-solid fa-user"
            style={{ color: "white", fontSize: "2.5rem" }}
          />{" "}
          <span style={{ color: "white", fontSize: "2rem", fontWeight: "800" }}>
            {props.user.taiKhoan}
          </span>
        </Space>
      </a>
    </Dropdown>
  );
}

export default UserAccount;
