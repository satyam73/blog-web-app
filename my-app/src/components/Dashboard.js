import React from "react";
import PageLayout from "./common/PageLayout";
import BlogCard from "./common/BlogCard";
function Dashboard() {
  const posts = Array(10).fill({
    title: "How to style like a professional?",
    fullPost:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae exercitationem consequatur provident veniam. Reiciendis consequatur cupiditate voluptates ipsam quod error, odit quae laborum eum suscipit tempore ea. Voluptates, numquam?",
    img: "https://images.pexels.com/photos/159108/light-lamp-electricity-power-159108.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  });

  return (
    <div>
      <PageLayout
        LeftComponent={
          <>
            {posts.map((post) => {
              return <BlogCard title={post.title} img={post.img} />;
            })}
          </>
        }
      />
    </div>
  );
}

export default Dashboard;
