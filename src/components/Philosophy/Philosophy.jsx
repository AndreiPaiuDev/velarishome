
import styles from "./Philosophy.module.css";
import philosophyImg from "../../images/philosophy.jpg";

const Philosophy = () => (
  <section className={styles.philosophySection}>
    <div className={styles.philosophyContainer}>
      <div className={styles.leftContent}>
        <h2 className={styles.heading}>
          Our <span className={styles.highlight}>Philosophy</span>
        </h2>
        <p className={styles.description}>
          We believe in creating spaces that resonate with the soul, blending timeless design with future-forward sensibilities. Our approach marries human-centric design with the emerging trends of the next decade.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.cardIcon} role="img" aria-label="leaf">🌿</span>
            <div>
              <h3>Sustainable Luxury</h3>
              <p>Conscious materials, eco-friendly processes, and lasting elegance.</p>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon} role="img" aria-label="clock">🕰️</span>
            <div>
              <h3>Timeless Minimalist</h3>
              <p>Human-centric design, future-forward aesthetics, and simplicity.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.quoteBox}>
          <span className={styles.quoteLabel}>"Design is not just what it looks like. It's how it feels."</span>
        </div>
        <div className={styles.philosophyImage}>
          <img
            src={philosophyImg}
            alt="Philosophy visual"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Philosophy;
