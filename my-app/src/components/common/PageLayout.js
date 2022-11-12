import React from "react";
import { useLocation } from "react-router-dom";
function PageLayout({ LeftComponent, RightComponent }) {
  const location = useLocation();
  return (
    <div className="container pageLayout">
      <div className="row mt-5 mb-3">
        <div className="col-sm-12 col-md-8 my-">
          {location.pathname === "/dashboard" && (
            <h1 className="fs-1">Your Blogs</h1>
          )}
          {location.pathname === "/blogs" && (
            <h1 className="fs-1">Explore Blogs</h1>
          )}
        </div>
      </div>
      <div className="row h-100">
        <div className="col-sm-12 col-md-8">{LeftComponent}</div>
        <div className="col-sm-12 col-md-4 bg-danger">Right component here</div>
      </div>
    </div>
  );
}

export default PageLayout;
