import React from "react";
import { NavLink } from "react-router-dom";

function Movie(props) {
  const { movie } = props;
  return (
    <NavLink to={`detail/${movie.maPhim}`}>
      <div
        className="card"
        style={{
          width: "23rem",
          height: "35rem",
          border: "none",
          background: "transparent",
        }}
      >
        <img
          style={{ width: "100%", height: "28rem", borderRadius: "10px" }}
          src={movie.hinhAnh}
          className="card-img-top"
          alt={movie.hinhAnh}
        />
        <div className="card-body">
          <p
            style={{ fontWeight: "800", fontSize: "1.5rem" }}
            className="card-text text-center text-white"
          >
            {movie.tenPhim}
          </p>
        </div>
      </div>
    </NavLink>
  );
}

export default Movie;
