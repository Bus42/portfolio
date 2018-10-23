import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer-wrapper">
      <a
        className="contact-link"
        href="http://www.facebook.com/gwbrewton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-square" />
      </a>
      <a
        className="contact-link"
        href="https://twitter.com/Bus42a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        className="contact-link"
        href="https://www.linkedin.com/in/gregbrewton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        className="contact-link"
        href="https://github.com/Bus42"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
      <a
        className="contact-link"
        href="mailto:gbrewton1980@gmail.com?subject=Portfolio"
      >
        <i className="far fa-envelope" />
      </a>
    </div>
  );
};
export default Footer;
