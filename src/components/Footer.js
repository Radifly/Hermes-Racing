import React from "react";
import "./css/Footer.css";

const date = new Date().getFullYear;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul className="footer-link-container">
            <h1>Home</h1>
            <li>
              <a href="/#meet-the-team">Meet The team</a>
            </li>
            <li>
              <a href="/">Team Car</a>
            </li>
            <li>
              <a href="/">Stay Connected</a>
            </li>
          </ul>

          <ul className="footer-link-container">
            <h1>Vision</h1>
            <li>
              <a href="/Vision/#mission-statement">Mission Statement</a>
            </li>
            <li>
              <a href="/Vision/#vision">Vision</a>
            </li>
          </ul>

          <ul className="footer-link-container">
            <h1>Team</h1>
            <li>
              <a href="/">Team Statement</a>
            </li>
            <li>
              <a href="/">Meet The Team</a>
            </li>
          </ul>

          <ul className="footer-link-container">
            <h1>Sponsors</h1>
            <li>
              <a href="/">Why Sponsor?</a>
            </li>
            <li>
              <a href="/">Sponsorship Documents</a>
            </li>
            <li>
              <a href="/">Sponsor Message</a>
            </li>
            <li>
              <a href="/">Sponsor Details</a>
            </li>
          </ul>

          <ul className="footer-link-container">
            <h1>Learning</h1>
            <li>
              <a href="/">Video</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
          </ul>

          <ul className="footer-link-container">
            <h1>Sustainability</h1>
            <li>
              <a href="/">Sustainability Practices</a>
            </li>
          </ul>
        </div>

        <div className="footer-section-break"></div>

        <div className="footer-social">
          <div className="social-icons">
            <a href="/">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a
              href="https://www.youtube.com/@officialf1hermesracing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          <p>Stay Connected!</p>
        </div>

        <div className="footer-section-break"></div>

        <div className="footer-copyright">
          <p>Copyright &copy; {date} Hermes Racing</p>
          <p>Website Designed and Created by Nishant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
