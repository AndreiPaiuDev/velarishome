import { useState } from "react";
import { Link } from "react-router-dom";
import LegalModal from "../LegalModal/LegalModal";
import "./Footer.css";

const Footer = () => {
  const [modal, setModal] = useState(null); // null | "privacy" | "terms"

  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <div className="footer-logo-icon">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <span className="footer-brand-name">Velaris Home</span>
              </div>
              <p className="footer-brand-desc">
                Redefining the boundaries of luxury interiors with a commitment to sustainable innovation and future aesthetics.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Instagram">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a href="#" aria-label="Pinterest">
                  <span className="material-symbols-outlined">interests</span>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <span className="material-symbols-outlined">work</span>
                </a>
                <a href="#" aria-label="Website">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>

            <div className="footer-nav">
              <h4>Sitemap</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/trends">Trend Reports</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-nav">
              <h4>Contact</h4>
              <ul>
                <li>
                  <div className="footer-contact-item">
                    <span className="material-symbols-outlined">mail</span>
                    <a href="mailto:contact@velarishome.com">contact@velarishome.com</a>
                  </div>
                </li>
                <li>
                  <div className="footer-contact-item">
                    <span className="material-symbols-outlined">phone</span>
                    <a href="tel:+442079460321">+44 20 7946 0321</a>
                  </div>
                </li>
                <li>
                  <div className="footer-contact-item">
                    <span className="material-symbols-outlined">location_on</span>
                    88 Design District, London
                  </div>
                </li>
                <li>
                  <div className="footer-contact-item">
                    <span className="material-symbols-outlined">schedule</span>
                    Mon – Fri, 9:00 – 18:00
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Velaris Home Interior Design. All rights reserved.</p>
            <div className="footer-bottom-links">
              <button className="footer-legal-btn" onClick={() => setModal("privacy")}>
                Privacy Policy
              </button>
              <button className="footer-legal-btn" onClick={() => setModal("terms")}>
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {modal && <LegalModal type={modal} onClose={() => setModal(null)} />}
    </>
  );
};

export default Footer;
