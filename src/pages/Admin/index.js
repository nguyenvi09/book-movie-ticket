import { Outlet, Link } from "react-router-dom";
import React from "react";

const AdminPage = () => {
  return (
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <Link to="films">Danh sách phim</Link>
          </li>
          <li>
            <Link to="add-new-film">Thêm mới phim</Link>
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
