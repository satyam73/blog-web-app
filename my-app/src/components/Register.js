import React from "react";

function Register() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
      >
        Launch demo modal
      </button>
      <div
        class="modal fade"
        id="registerModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-3 w-100">Register</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control p-2 fs-6"
                    id="name"
                    placeholder="name@example.com"
                    name="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control p-2 fs-6"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Gender</label>
                  <div class="form-check">
                    <input
                      class="form-check-input p-2 fs-6"
                      type="radio"
                      name="gender"
                      id="female"
                    />
                    <label class="form-check-label" for="female">
                      Female
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input p-2 fs-6"
                      type="radio"
                      name="gender"
                      id="male"
                    />
                    <label class="form-check-label" for="male">
                      Male
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control p-2 fs-6"
                    id="password"
                    placeholder="Enter password here"
                    name="password"
                  />
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control p-2 fs-6"
                    id="confirmPassword"
                    placeholder="Enter confirm password here"
                    name="confirmPassword"
                  />
                </div>
              </form>
              <button type="button" class="btn btn-primary w-100 p-2 fs-5">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
