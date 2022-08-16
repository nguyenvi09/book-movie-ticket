import React from "react";
import { useSelector } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import AppImages from "../../components/AppImages/AppImages";

const AdminPage = () => {
  return (
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li style={{ textAlign: "center", marginTop: "10px" }}>
            <AppImages width="55%" />
          </li>
          <li className="sidebar-brand">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="films"
            >
              Danh sách phim
            </NavLink>
          </li>
          <li className="sidebar-brand">
            <NavLink
              className={({ isActive }) => (isActive ? "active " : "inactive")}
              to="add-new-film"
            >
              Thêm mới phim
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-8">
              <h1>Admin Page</h1>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPage;
