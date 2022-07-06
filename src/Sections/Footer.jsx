import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="probootstrap-footer">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            &copy; 2019 - <Link to="/">412labs.com</Link>.
            <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
