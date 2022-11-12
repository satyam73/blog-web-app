import React from "react";

function BlogCard({ title, fullPost, img }) {
  return (
    <div className="blogCard w-100 mt-3 p-2 rounded-3">
      <div className="row h-100">
        <div className="col-sm-12 col-md-8">
          <div className="row">
            <h1 className="fs-1">{title}</h1>
          </div>
        </div>
        <div className="col-sm-12 col-md-4" style={{ height: "100%" }}>
          <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
