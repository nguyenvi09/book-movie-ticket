import React from "react";

function Footer(props) {
  const { heThongRapChieu } = props;

  const renderRapChieu = () => {
    return heThongRapChieu?.map((item, index) => {
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
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#222222" }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className>
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <img
                  src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
                  alt="Cybersoft"
                />
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
                <h6 className="text-white text-uppercase mb-4 font-weight-bold display-4">
                  Partner
                </h6>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    gap: "20px",
                  }}
                >
                  {renderRapChieu()}
                </ul>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold text-white display-4">
                  Contact
                </h6>
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
              {/* Grid column */}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
          <hr className="my-3" />
          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">© 2020 Copyright: All rights reserved</div>
                {/* Copyright */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </div>
  );
  {
    /* End of .container */
  }
}

export default Footer;
