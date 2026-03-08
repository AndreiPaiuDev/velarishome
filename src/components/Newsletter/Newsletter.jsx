
import styles from "./Newsletter.module.css";

const Newsletter = () => (
  <section className={styles.newsletterSection}>
    <div className={styles.newsletterContainer}>
      <div className={styles.newsletterGradient}></div>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>
          Start your journey into the <span>next decade</span> of design.
        </h2>
        <p className={styles.newsletterDesc}>
          Join our exclusive circle for seasonal trend reports and early access to our new furniture collections.
        </p>
        <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
          <input
            className={styles.newsletterInput}
            placeholder="Email address"
            type="email"
            required
          />
          <button className={styles.newsletterButton} type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
);

export default Newsletter;
