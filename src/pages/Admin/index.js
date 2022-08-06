import { NavLink, Outlet, Link } from "react-router-dom";
import { Space, Tabs } from "antd";
import React from "react";

const AdminPage = () => {
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <Link to="films">Danh sách phim</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <a href="#">Shortcuts</a>
          </li>
        </ul>
      </div>

      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h1>Admin Page</h1>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPage;
