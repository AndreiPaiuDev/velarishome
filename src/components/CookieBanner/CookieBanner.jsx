import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

const STORAGE_KEY = "velaris_cookie_consent";

const defaultPrefs = { analytics: false, marketing: false };

const CookieBanner = () => {
  const [status, setStatus]       = useState(null);   // null | "pending" | "saved"
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs]         = useState(defaultPrefs);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setStatus("saved");
    } else {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setStatus("pending"), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (consentPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consentPrefs, savedAt: Date.now() }));
    setStatus("saved");
    setShowSettings(false);
  };

  const acceptAll  = () => save({ analytics: true,  marketing: true });
  const rejectAll  = () => save({ analytics: false, marketing: false });
  const saveCustom = () => save(prefs);

  if (status !== "pending") return null;

  return (
    <div className={`${styles.banner} ${showSettings ? styles.bannerExpanded : ""}`}>
      {/* ── Settings Panel ── */}
      {showSettings && (
        <div className={styles.settings}>
          <h3 className={styles.settingsTitle}>Cookie Preferences</h3>
          <p className={styles.settingsDesc}>
            Manage which cookies you allow. You can change your preferences at any time. For details, see our <a href="#" onClick={(e) => e.preventDefault()}>Cookie Policy</a> and <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
          </p>

          <div className={styles.toggleList}>
            {/* Strictly necessary — always on */}
            <div className={styles.toggleRow}>
              <div>
                <span className={styles.toggleLabel}>Strictly Necessary</span>
                <p className={styles.toggleDesc}>Required for the website to function. Cannot be disabled.</p>
              </div>
              <div className={`${styles.toggle} ${styles.toggleForced}`}>
                <span className={styles.toggleThumb} />
              </div>
            </div>

            {/* Functional — always on */}
            <div className={styles.toggleRow}>
              <div>
                <span className={styles.toggleLabel}>Functional</span>
                <p className={styles.toggleDesc}>Remember your preferences (e.g. cookie settings, language).</p>
              </div>
              <div className={`${styles.toggle} ${styles.toggleForced}`}>
                <span className={styles.toggleThumb} />
              </div>
            </div>

            {/* Analytics */}
            <div className={styles.toggleRow}>
              <div>
                <span className={styles.toggleLabel}>Analytics</span>
                <p className={styles.toggleDesc}>Help us understand how visitors use our site (e.g. Google Analytics 4). Data is anonymised.</p>
              </div>
              <button
                role="switch"
                aria-checked={prefs.analytics}
                className={`${styles.toggle} ${prefs.analytics ? styles.toggleOn : ""}`}
                onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
              >
                <span className={styles.toggleThumb} />
              </button>
            </div>

            {/* Marketing */}
            <div className={styles.toggleRow}>
              <div>
                <span className={styles.toggleLabel}>Marketing & Advertising</span>
                <p className={styles.toggleDesc}>Allow us to personalise ads and measure campaign effectiveness across platforms.</p>
              </div>
              <button
                role="switch"
                aria-checked={prefs.marketing}
                className={`${styles.toggle} ${prefs.marketing ? styles.toggleOn : ""}`}
                onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
              >
                <span className={styles.toggleThumb} />
              </button>
            </div>
          </div>

          <div className={styles.settingsActions}>
            <button className={styles.btnOutline} onClick={() => setShowSettings(false)}>Back</button>
            <button className={styles.btnPrimary} onClick={saveCustom}>Save Preferences</button>
          </div>
        </div>
      )}

      {/* ── Main Banner ── */}
      {!showSettings && (
        <div className={styles.bannerMain}>
          <div className={styles.bannerText}>
            <div className={styles.bannerIcon}>
              <span className="material-symbols-outlined">cookie</span>
            </div>
            <div>
              <p className={styles.bannerTitle}>We value your privacy</p>
              <p className={styles.bannerDesc}>
                We use cookies to enhance your browsing experience, analyse site traffic, and deliver personalised content. By clicking <strong>"Accept All"</strong> you consent to our use of cookies. You can manage your preferences or reject non-essential cookies at any time. This website is operated in compliance with UK GDPR, the Data Protection Act 2018, and EU GDPR.
              </p>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <button className={styles.btnSettings} onClick={() => setShowSettings(true)}>
              <span className="material-symbols-outlined">settings</span>
              Manage Preferences
            </button>
            <button className={styles.btnReject} onClick={rejectAll}>
              Reject Non-Essential
            </button>
            <button className={styles.btnAccept} onClick={acceptAll}>
              Accept All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;
