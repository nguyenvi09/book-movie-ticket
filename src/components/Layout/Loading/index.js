import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function Loading(props) {
  const { isLoading } = useSelector((state) => state.loadingReducer);

  return (
    <Fragment>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-white">...</h1>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Loading;
