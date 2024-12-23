import { SocialMedia } from "../data/socialMedia";
import { undMenuItems } from "../helper/menuItems";
import undLogo from "../assets/images/und-footer-logo.svg";

function Footer() {
  return (
    <footer className="und-footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="und-logo text-center">
              <img src={undLogo} alt="footer-logo" />
            </div>
            <div className="social-media">
              <ul>
                {SocialMedia.map(({ icon, url }, index) => (
                  <li key={index}>
                    <a href={url}>{icon}</a>
                  </li>
                ))}
              </ul>
            </div>
            <nav className="footer-nav">
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
    </footer>
  );
}

export default Footer;
