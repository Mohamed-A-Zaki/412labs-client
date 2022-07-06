import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed-top navbar-default">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src="img/banner.jpg" alt="..." />
          </Link>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar-collapse" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link id="home" to="/">
                Home
              </Link>
            </li>
            <li className="active">
              <Link id="alumni" to="/alumni">
                Alumni
              </Link>
            </li>
            <li>
              <Link id="about" to="/">
                About
              </Link>
            </li>
            <li>
              <Link id="faq" to="/">
                FAQ
              </Link>
            </li>
            <li>
              <a href="#apply" data-nav-section="apply">
                Apply
              </a>
            </li>
            <li>
              <a href="#contact" data-nav-section="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
