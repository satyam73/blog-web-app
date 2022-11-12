import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import slider1 from "../images/slider1_img.png";
import slider2 from "../images/slider2_img.png";
import slider3 from "../images/slider3_img.png";

function Home() {
  const [loginDetails, setLoginDetails] = useState({
    mail: "",
    password: "",
  });
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div>
      <Login
        loginDetails={loginDetails}
        setLoginDetails={setLoginDetails}
      ></Login>
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
                <h1>This is the blog website!</h1>
              </div>
            </div>
            <div className="row">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti dolore nesciunt adipisci rerum? A, magnam.
              </p>
            </div>
            <div className="row">
              <div className="col-3">
                <button
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </div>
              <div className="col-3">
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
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src={slider1}
                    class="d-block w-100"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src={slider2}
                    class="d-block w-100"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={slider3}
                    class="d-block w-100"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
