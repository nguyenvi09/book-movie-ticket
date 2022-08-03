import React from "react";
import styles from "./ModalTrailer.module.scss";
import { useSelector, useDispatch } from "react-redux";
function ModalTrailer() {
  const { movieTrailer, displayTrailer } = useSelector(
    (state) => state.movieManagerReducer
  );

  const dispatch = useDispatch();
  return (
    <div
      style={{ display: `${displayTrailer}` }}
      className={styles.modalTrailer}
    >
      <iframe
        width="750px"
        height="400px"
        src={movieTrailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button
        className={styles.close}
        onClick={() => {
          dispatch({
            type: "CLOSE_MODAL_TRAILER",
            display: "none",
          });
        }}
      >
        X
      </button>
    </div>
  );
}

export default ModalTrailer;
