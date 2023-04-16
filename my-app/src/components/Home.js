import React, { useState } from "react";
import Register from "./Register";
import slider1 from "../images/slider1_img.png";
import slider2 from "../images/slider2_img.png";
import slider3 from "../images/slider3_img.png";

function Home() {
  // const [loginDetails, setLoginDetails] = useState({
  //   mail: "",
  //   password: "",
  // });
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div>
      {/* <Login
        loginDetails={loginDetails}
        setLoginDetails={setLoginDetails}
      ></Login> */}
      <Register
        registerDetails={registerDetails}
        setRegisterDetails={setRegisterDetails}
      ></Register>
      <div
        className="container homeContainer justify-content-center"
        style={{ width: "calc(100vw - 50px)", height: "90vh" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-12">
                <h1>Welcome to Quarks!</h1>
              </div>
            </div>
            <div className="row">
              <p>
                Quarks provides offers a wide variety of blogs, one can interact, create and learn from these blogs.
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <button
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-light"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-4">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src={slider1}
                    className="d-block w-100"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src={slider2}
                    className="d-block w-100"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={slider3}
                    className="d-block w-100"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
