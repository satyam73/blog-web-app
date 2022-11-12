import React from "react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
// import "./styles/Navbar.css"

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>Q</span>UARKS
        </h2>
      </div>

      {/* <Link to="/"> Home </Link> */}

      {!isAuth ? (
        <div className="menu-link">
          <ul>
            <li>
              {/* <a href="/">Home</a> */}
              <Link to="/home">Home</Link>
            </li>
            <li>
              {/* <a href="/about">About</a> */}
              <Link to="/home">About</Link>
            </li>
            <li>
              <Link to="/blogs"> Blogs </Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/create"> Create Post </Link>
            </li>
            <li>
              <Link to="/login"> Login </Link>
            </li>
          </ul>
        </div>
      ) : (
        // <Link to="/login"> Login </Link>
        <>
          <div className="menu-link">
            <ul>
              <li>
                <Link to="/createpost"> Create Post </Link>
              </li>
              <li>
                <button onClick={signUserOut}> Log Out</button>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
