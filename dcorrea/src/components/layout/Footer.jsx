import React from "react";
import { IoColorFilterOutline } from "react-icons/io5";
import SocialBox from "../shared/SocialBox";
const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-1 footer-center gap-9">
      <IoColorFilterOutline color="lightgray" size="48" />
      <SocialBox />
      <p> &copy; David Correa {footerYear}. </p>
    </footer>
  );
};

export default Footer;
