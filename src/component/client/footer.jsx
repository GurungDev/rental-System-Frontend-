import React from "react";
import "./css/footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer-section">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link">
              <BsFacebook />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link">
              <BsLinkedin />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link">
              <BsInstagram />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link">
              <BsTwitter />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/" className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/aboutUs" className="menu__link">
              About
            </Link>
          </li>
          <li className="menu__item">
            <a className="menu__link">Services</a>
          </li>
          <li className="menu__item">
            <a className="menu__link">Team</a>
          </li>
          <li className="menu__item">
            <a className="menu__link">Contact</a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
