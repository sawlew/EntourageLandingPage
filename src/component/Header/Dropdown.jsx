import React from 'react';
import "./dropdown.css";
// import "./navbar.css";


const Dropdown = ({onClick}) => {
  return (
    <div className="dropdown-content">
        <div className="login">
            <a href="#">
                <p>Login / Register</p>
            </a>
        </div>
        <hr />
        <nav className="mobile-nav-links" onClick={onClick}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#howItWorks">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default Dropdown