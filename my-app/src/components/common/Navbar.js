import React from 'react'
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth } from "../firebase-config";
import { Link } from 'react-router-dom';
import "./styles/Navbar.css"

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    })
  }
  return (
    <nav className="main-nav">
      <div className="logo">
          <h2>
            <span>Q</span>UARKS
          </h2>
          </div>
        <div className ="menu-link">
          <ul>
            <li>
              < a href="#">Home</a>
            </li>
            <li>
            < a href="#">About</a>
            </li>
            <li>
            < a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
  )
}

export default Navbar
