import React from "react";

function Home() {
  return (
    <div>
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
                <button className="btn btn-dark">Login</button>
              </div>
              <div className="col-3">
                <button className="btn btn-light">Register</button>
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
