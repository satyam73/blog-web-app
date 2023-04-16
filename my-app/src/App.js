import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Home from "./components/Home";
import Blog from "./components/Blog";
import CreateBlog from "./components/CreateBlog";
import Navbar from "./components/common/Navbar";
import Dashboard from "./components/Dashboard";
import BlogPost from "./components/BlogPost";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Blog />} path="/blogs" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<CreateBlog />} path="/create" />
          <Route element={"hello this is about page"} path="/about" />
          <Route element={<BlogPost />} path="/blog/id" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
