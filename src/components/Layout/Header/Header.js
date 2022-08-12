import _ from "lodash";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AppImages from "../../AppImages/AppImages";
import UserAccount from "../UserAccount";
function Header() {
  const { userLogin } = useSelector((state) => state.userManagerReducer);
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <li>
            <NavLink
              style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
              to="/register"
            >
              <span className="fa-solid fa-user" /> Đăng ký
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
            >
              <span className="fa-solid fa-right-to-bracket" /> Đăng nhập
            </NavLink>
          </li>
        </Fragment>
      );
    }

    return (
      <li>
        <UserAccount user={userLogin} />
      </li>
    );
  };
  return (
    <nav
      className="navbar navbar-inverse position-fixed w-100 pl-5 pr-5"
      style={{ zIndex: "2", backgroundColor: "rgba(0,0,0,.5)" }}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">
            <AppImages width="25%" />
          </NavLink>
        </div>
        <ul className="nav" style={{ gap: "2rem" }}>
          <li className="active">
            <NavLink
              style={{
                color: "white",
                fontSize: "2rem",
                fontWeight: "600",
                fontWeight: "600",
              }}
              to="/"
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <a
              style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
              href="#movieSchedule"
            >
              Lịch chiếu phim{" "}
            </a>
          </li>
          <li>
            <a
              style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
              href="#contact"
            >
              Liên hệ
            </a>
          </li>
        </ul>
        <ul className="nav navbar-right" style={{ gap: "2rem" }}>
          {renderLogin()}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
