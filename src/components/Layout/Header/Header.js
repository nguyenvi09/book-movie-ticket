import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav
      className="navbar navbar-inverse position-fixed w-100 pl-5 pr-5"
      style={{ zIndex: "2", backgroundColor: "rgba(0,0,0,.5)" }}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="cybersoft logo"
              style={{ width: "80%" }}
            />
          </NavLink>
        </div>
        <ul className="nav" style={{ gap: "2rem" }}>
          <li className="active">
            <a
              style={{
                color: "white",
                fontSize: "2rem",
                fontWeight: "600",
                fontWeight: "600",
              }}
              href="#"
            >
              Trang chủ
            </a>
          </li>
          <li>
            <a
              style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
              href="#"
            >
              Blog phim ảnh{" "}
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
          <li>
            <a
              style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
              href="#"
            >
              <span className="fa-solid fa-user" /> Sign Up
            </a>
          </li>
          <li>
            <NavLink
              to="/login"
              style={{ color: "white", fontSize: "2rem", fontWeight: "600" }}
            >
              <span className="fa-solid fa-right-to-bracket" /> Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
