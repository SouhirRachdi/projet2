import React from "react";
import './App.css';

const Footer = () => {
  return (
    <div
      className="global-footer custom-footer x-flex-h-between-v-center"
      style={{ marginLeft: 0 }}
    >
      <div className="x-flex-h-start-v-center">
        <img
          src=""
          alt=""
          className="logo-footer"
        />
        <div className="with-margin-left">Learn by making.</div>
      </div>
      <div className="middle-item">
        <a href="https://gomycode.co/" target="_blank">
          Powered by Edu Learn
        </a>
        <br />
        <div className="footer-links">
          <a href="/privacy-policy">
            <small>Privacy Policy</small>
          </a>
        </div>
      </div>
      <div className="x-flex-h-start-v-center">© 2022 All rights reserved.</div>
    </div>
  );
};

export default Footer;
