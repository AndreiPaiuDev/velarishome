
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home",      to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services",  to: "/services" },
  { label: "Trends",    to: "/trends" },
  { label: "Contact",   to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerInner}>

        <div className={styles.headerBrand}>
          <Link to="/" className={styles.headerBrandLink}>
            <div className={styles.headerLogo}>
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h1 className={styles.headerTitle}>Velaris Home</h1>
          </Link>
        </div>

        <nav className={styles.headerNav}>
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.headerNavLink} ${location.pathname === to ? styles.headerNavLinkActive : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.headerRight}>
          <Link to="/contact" className={styles.headerButton}>
            Inquire Now
          </Link>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      <div className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}>
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`${styles.mobileNavLink} ${location.pathname === to ? styles.mobileNavLinkActive : ""}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" className={styles.mobileNavBtn}>
          Inquire Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
