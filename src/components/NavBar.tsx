import { KeyboardEvent, useState } from "react";
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

  // Handle Escape Key
  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <header className="und-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo-wrapper">
              <a href="/">
                <img src={logo} alt="und-logo" />
              </a>
              <button
                className="hamburger"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
              >
                &#x2630;
              </button>
            </div>
          </div>
          {/* Off-Canvas Menu */}
          <div
            className={`off-canvas-menu ${isOpen ? "open" : ""}`}
            role="dialog"
            aria-hidden={!isOpen}
            onKeyDown={handleKeyDown}
            tabIndex={isOpen ? 0 : -1}
          >
            <div
              className="close-btn"
              aria-label="Close menu"
              onClick={toggleMenu}
            >
              <span>&#215;</span>
            </div>
            <div className="und-mob-logo">
              <img src={logo} alt="und-logo" />
            </div>
            <nav
              className="mobile-nav"
              id="mobile-menu"
              aria-hidden={!isOpen}
              aria-label="Mobile navigation"
            >
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
            <nav
              className="navbar"
              role="navigation"
              aria-label="Main navigation"
            >
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
