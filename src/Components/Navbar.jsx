import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src={require("../netflix.png")}
        alt="Netflix-Logo"
        className="nav_logo"
      />
      <a
        href="https://www.linkedin.com/in/shamsad-alam-272740209/"
        target="_shamsad"
      >
        <img
          src={require("../avatar.png")}
          alt="Avatar"
          className="nav_avatar"
        />
      </a>
    </div>
  );
};

export default Navbar;
