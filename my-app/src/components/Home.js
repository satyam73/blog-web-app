import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
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
        className="container homeContainer"
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
          <div className="col-sm-12 col-md-6">slider here</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
