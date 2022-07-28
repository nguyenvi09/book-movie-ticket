import React from "react";
import { useSelector } from "react-redux";

function Footer(props) {
  const { cinemaSystem } = useSelector((state) => state.theaterManagerReducer);

  const renderCinema = () => {
    return cinemaSystem?.map((item, index) => {
      return (
        <li key={index}>
          <img
            style={{ width: "60px" }}
            src={item.logo}
            alt="item.maHeThongRap"
          />
        </li>
      );
    });
  };
  return (
    <div id="contact" className=" my-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#222222" }}
      >
        <div className="container p-4 pb-0">
          <section className>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <img
                  src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
                  alt="Cybersoft"
                />
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
                <h1 className="text-white text-uppercase mb-4 font-weight-bold">
                  Đối tác
                </h1>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    gap: "20px",
                  }}
                >
                  {renderCinema()}
                </ul>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h1 className="text-uppercase mb-4 font-weight-bold text-white">
                  Liên hệ
                </h1>
                <p>
                  <i className="fas fa-home mr-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">© 2022 Copyright: All rights reserved</div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
