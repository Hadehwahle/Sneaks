import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h1>SNEAKS</h1>
        <div className="footer-links">
          <div className="combo">
            <div className="footer1">
              <h3>Quick Links</h3>
              <NavLink to="#">Home</NavLink>
              <NavLink to="/">Product</NavLink>
              <NavLink to="#">About</NavLink>
              <NavLink to="#">Contact US</NavLink>
            </div>
            <div className="footer2">
              <h3>About</h3>
              <NavLink>FAQs</NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Careers</NavLink>
              <NavLink>
                Terms <span className="social-media">of Service</span>
              </NavLink>
            </div>
            <div className="footer3">
              <h3>Social Media</h3>
              <p>
                Follow us on social media to find out
                <span className="social-media">
                  the latest updates on our progress
                </span>
                .
              </p>
              <div className="footer-icon">
                <img src="icons/Facebook.svg" alt="facebook-icon" />
                <img src="icons/twitter.svg" alt="twitter-icon" />
                <img src="icons/instagram.svg" alt="instagram-icon" />
              </div>
            </div>
          </div>
          <div className="footer4">
            <h3>Newsletter</h3>
            <p>Subscribe for Latest Updates</p>
            <div className="footer-input">
              <input type="text" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <p className="copyright">Sneaks/All Right Reserved</p>
    </footer>
  );
}

export default Footer;
