
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.heroSection}>
    <div className={styles.heroBgWrap}>
      <div className={styles.heroBg} />
    </div>
    <div className={styles.heroContentWrap}>
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>Established 2024</span>
        <h1 className={styles.heroTitle}>
          Shaping the <span>Future</span> of Living
        </h1>
        <p className={styles.heroDesc}>
          Award-winning interior design focusing on luxury, sustainability, and the 2026 digital-organic color palette.
        </p>
        <div className={styles.heroActions}>
          <Link to="/services" className={styles.heroButtonPrimary}>
            Explore Work
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link to="/trends" className={styles.heroButtonSecondary}>
            View 2026 Trends
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
