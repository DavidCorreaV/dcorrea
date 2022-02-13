import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar shadow-lg">
      <div className="container mx-auto">
        <div className="flex-none px-1 mx-1">
          <Link
            to="/"
            className="btn btn-ghost h-full"
            style={{ fontFamily: "'Iosevka',sans-serif" }}
          >
            <img
              src={logo}
              alt="isologo"
              className="inline my-2"
              style={{ width: "8rem" }}
            />
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: `David Correa`,
};
export default Navbar;
