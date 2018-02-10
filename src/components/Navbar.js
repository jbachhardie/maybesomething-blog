import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="Kaldi" />
        </Link>
      </div>
      <div className="navbar-start" />
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <a
          className="navbar-item"
          href="https://github.com/jbachhardie/maybesomething-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
