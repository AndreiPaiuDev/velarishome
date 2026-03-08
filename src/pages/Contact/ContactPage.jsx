import { useState } from "react";
import useInView from "../../hooks/useInView";
import styles from "./ContactPage.module.css";

const contactInfo = [
  {
    icon: "mail",
    label: "Email",
    value: "contact@velarishome.com",
    href: "mailto:contact@velarishome.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+44 20 7946 0321",
    href: "tel:+442079460321",
  },
  {
    icon: "location_on",
    label: "Studio",
    value: "88 Design District, London, UK",
    href: null,
  },
  {
    icon: "schedule",
    label: "Hours",
    value: "Mon – Fri, 9:00 – 18:00",
    href: null,
  },
];

const projectTypes = [
  "Residential Interior Design",
  "Commercial & Hospitality",
  "Color & Trend Consulting",
  "Sustainable Luxury Design",
  "Space Planning",
  "Furniture & Materials Sourcing",
  "Other",
];

const budgets = [
  "Under £20,000",
  "£20,000 – £50,000",
  "£50,000 – £100,000",
  "£100,000 – £250,000",
  "£250,000+",
  "Not sure yet",
];

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", projectType: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [headerRef, headerInView] = useInView();
  const [formRef,   formInView]   = useInView();
  const [infoRef,   infoInView]   = useInView();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Page Header ── */}
      <section className={styles.pageHeader}>
        <div
          ref={headerRef}
          className={`${styles.container} reveal ${headerInView ? "visible" : ""}`}
        >
          <span className={styles.eyebrow}>Get in Touch</span>
          <h1 className={styles.pageTitle}>
            Let's Create Something <span className={styles.highlight}>Extraordinary</span>
          </h1>
          <p className={styles.pageDesc}>
            Every great space begins with a conversation. Tell us about your project and we'll be in touch within one working day.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.layout}>

            {/* ── Form ── */}
            <div
              ref={formRef}
              className={`${styles.formCol} reveal-right ${formInView ? "visible" : ""}`}
            >
              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <h2 className={styles.successTitle}>Message Received</h2>
                  <p className={styles.successDesc}>
                    Thank you for reaching out. A member of our studio team will be in contact within one working day.
                  </p>
                  <button
                    className={styles.btnPrimary}
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h2 className={styles.formTitle}>Enquiry Form</h2>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Full Name <span className={styles.req}>*</span></label>
                      <input
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Email Address <span className={styles.req}>*</span></label>
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Phone <span className={styles.optional}>(optional)</span></label>
                      <input
                        className={styles.input}
                        type="tel"
                        name="phone"
                        placeholder="+44 7700 000000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Project Type <span className={styles.req}>*</span></label>
                      <select
                        className={styles.select}
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a service…</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Approximate Budget</label>
                    <div className={styles.budgetGrid}>
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`${styles.budgetBtn} ${form.budget === b ? styles.budgetBtnActive : ""}`}
                          onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Tell us about your project <span className={styles.req}>*</span></label>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      placeholder="Describe your space, vision, timeline, and any specific requirements…"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className={styles.btnPrimary}>
                    Send Enquiry
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              )}
            </div>

            {/* ── Info Sidebar ── */}
            <div
              ref={infoRef}
              className={`${styles.infoCol} reveal-left ${infoInView ? "visible" : ""}`}
            >
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Studio Details</h2>
                <ul className={styles.infoList}>
                  {contactInfo.map((item) => (
                    <li key={item.label} className={styles.infoItem}>
                      <div className={styles.infoIconWrap}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <span className={styles.infoLabel}>{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className={styles.infoValue}>{item.value}</a>
                        ) : (
                          <span className={styles.infoValue}>{item.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.quoteCard}>
                <span className={styles.quoteMark}>"</span>
                <p className={styles.quoteText}>
                  We don't just design rooms. We design the way you experience your life within them.
                </p>
                <cite className={styles.quoteCite}>— Velaris Home Studio</cite>
              </div>

              <div className={styles.socialCard}>
                <span className={styles.socialLabel}>Follow our work</span>
                <div className={styles.socialRow}>
                  <a href="#" className={styles.socialBtn} aria-label="Instagram">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </a>
                  <a href="#" className={styles.socialBtn} aria-label="Pinterest">
                    <span className="material-symbols-outlined">interests</span>
                  </a>
                  <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a href="#" className={styles.socialBtn} aria-label="Website">
                    <span className="material-symbols-outlined">public</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
