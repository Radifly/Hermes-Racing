import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isSticky, setIsSticky] = useState(false); // Track if the navbar is sticky

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HERMES RACING
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/vision"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Vision
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sponsors"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sponsors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/learning"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Learning
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sustainability"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sustainability
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navbar-placeholder"></div>
    </>
  );
}

export default Navbar;
