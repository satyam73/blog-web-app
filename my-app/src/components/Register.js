import React from "react";

function Register({ registerDetails, setRegisterDetails }) {
  const handleChange = (evt) => {
    setRegisterDetails({
      ...registerDetails,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <>
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h1 className="modal-title fs-3 w-100">Register</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control p-2 fs-6"
                    id="name"
                    placeholder="name@example.com"
                    name="name"
                    onChange={(evt) => handleChange(evt)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control p-2 fs-6"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(evt) => handleChange(evt)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div className="form-check">
                    <input
                      className="form-check-input p-2 fs-6"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={(evt) => handleChange(evt)}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input p-2 fs-6"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={(evt) => handleChange(evt)}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control p-2 fs-6"
                    id="password"
                    placeholder="Enter password here"
                    name="password"
                    onChange={(evt) => handleChange(evt)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control p-2 fs-6"
                    id="confirmPassword"
                    placeholder="Enter confirm password here"
                    name="confirmPassword"
                    onChange={(evt) => handleChange(evt)}
                  />
                </div>
              </form>
              <button type="button" className="btn btn-primary w-100 p-2 fs-5">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
