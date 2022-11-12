import React from "react";

function Login({ loginDetails, setLoginDetails }) {
  const handleChange = (evt) => {
    setLoginDetails({
      ...loginDetails,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h1 className="modal-title fs-3 w-100" id="exampleModalLabel">
                Login
              </h1>
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
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control p-2 fs-6"
                    id="loginEmail"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(evt) => handleChange(evt)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control p-2 fs-6"
                    id="loginPassword"
                    placeholder="name@example.com"
                    name="password"
                    onChange={(evt) => handleChange(evt)}
                  />
                </div>
              </form>
              <button type="button" className="btn btn-primary w-100 p-2 fs-5">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
