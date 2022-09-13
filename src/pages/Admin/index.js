import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import AppImages from '../../components/AppImages/AppImages';
import UserAccount from '../../components/Layout/UserAccount/UserAccount';

const AdminPage = () => {
  return (
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li style={{ textAlign: 'center', marginTop: '10px' }}>
            <NavLink to="/">
              <AppImages width="55%" />
            </NavLink>
          </li>
          <li className="sidebar-brand">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="film-management"
            >
              Quản lý phim
            </NavLink>
          </li>

          <li className="sidebar-brand">
            <NavLink
              className={({ isActive }) => (isActive ? 'active ' : 'inactive')}
              to="user-management"
            >
              Quản lý người dùng
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ fontSize: '4rem', fontWeight: '900' }}>
                TRANG QUẢN LÝ
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminPage;
