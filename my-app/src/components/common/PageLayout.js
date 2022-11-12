import React from "react";

function PageLayout({ LeftComponent, RightComponent }) {
  return (
    <div className="container pageLayout">
      <div className="row h-100">
        <div className="col-sm-12 col-md-8 bg-success">Left component here</div>
        <div className="col-sm-12 col-md-4 bg-danger">Right component here</div>
      </div>
    </div>
  );
}

export default PageLayout;
