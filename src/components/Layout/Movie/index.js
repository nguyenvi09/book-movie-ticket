import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Movie.module.scss";
function Movie(props) {
  const { movie } = props;
  console.log(movie);
  return (
    <div
      id={styles.card}
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
      <div id={styles.cardName} className="card-body">
        <p
          style={{ fontWeight: "800", fontSize: "1.5rem" }}
          className="card-text text-center text-white"
        >
          {movie.tenPhim}
        </p>
      </div>
      <div id={styles.play}>
        <i className="fas fa-play"></i>
      </div>
      <NavLink to={`detail/${movie.maPhim}`}>
        <button id={styles.btn}>Đặt vé</button>
      </NavLink>
    </div>
  );
}

export default Movie;
