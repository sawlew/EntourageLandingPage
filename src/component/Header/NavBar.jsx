import { useState } from "react";
import "./navbar.css";
import * as IoIcons from "react-icons/io";
import { motion } from "framer-motion";
const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const showDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <header>
        <section className="header-content">
          <div className="logo">
            <a href="#home">Entourage</a>
          </div>
          <nav className="header-nav-links" onClick={showDropDown}>
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
          <motion.div className="login-register" whileHover={{ scale: 0.9 }}>
            <a href="#">
              <p>Login / Register</p>
            </a>
          </motion.div>
          <div className="menu-bar">
            {dropDown ? (
              <IoIcons.IoMdClose className="close" onClick={showDropDown} />
            ) : (
              <IoIcons.IoIosMenu className="bars" onClick={showDropDown} />
            )}
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
