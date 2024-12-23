import { useState } from "react";
import logo from "../assets/images/und-logo.svg";
import { undMenuItems } from "../helper/menuItems";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.body;
    setIsOpen(!isOpen);

    if (!isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  };

  return (
    <header className="und-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo-wrapper">
              <img src={logo} alt="und-logo" />
              <button className="hamburger" onClick={toggleMenu}>
                &#x2630;
              </button>
            </div>
          </div>
          {/* Off-Canvas Menu */}
          <div className={`off-canvas-menu ${isOpen ? "open" : ""}`}>
            <div className="close-btn" onClick={toggleMenu}>
              <span>&#215;</span>
            </div>
            <div className="und-mob-logo">
              <img src={logo} alt="und-logo" />
            </div>
            <nav className="mobile-nav">
              <ul>
                {undMenuItems.map(({ item, url }, index) => (
                  <li key={index}>
                    <a href={url} onClick={toggleMenu}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Regular Menu  */}
          <div className="col-lg-9">
            <nav className="navbar">
              <ul>
                {undMenuItems.map(({ item, url }, index) => (
                  <li key={index}>
                    <a href={url}>{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Overlay for Mobile Menu */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Navbar;
