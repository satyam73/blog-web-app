import React from "react";

function Profile() {
  return (
    <div className="row bg-light my-1">
      <div className="col-12 text-center">
        <div className="row pt-4">
          <div className="col-12">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
              style={{ width: "100px", height: "100px", borderRadius: "50px" }}
              className="profileImg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>David George</h5>
            <p className="userBio">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, eum?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p
              className="text-primary text-decoration-underline"
              style={{ cursor: "pointer" }}
            >
              Edit Profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
