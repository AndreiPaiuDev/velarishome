import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";
import Newsletter from "../../components/Newsletter/Newsletter";
import styles from "./ServicesPage.module.css";
import p4 from "../../images/p4.jpg";

const services = [
  {
    icon: "home",
    accent: "#13b6ec",
    label: "Signature Service",
    title: "Residential Interior Design",
    description:
      "Complete interior transformations for private homes, apartments, and villas. From concept to completion, we craft living environments that are uniquely yours.",
    features: ["Full-space planning", "Material & finish selection", "Furniture curation", "Lighting design"],
  },
  {
    icon: "business",
    accent: "#008c99",
    label: "Corporate & Commercial",
    title: "Commercial & Hospitality",
    description:
      "Bespoke design for offices, boutique hotels, restaurants, and retail. We create high-performance environments that express your brand identity.",
    features: ["Brand-aligned spaces", "Flow & ergonomics", "Hospitality detailing", "Project management"],
  },
  {
    icon: "palette",
    accent: "#d2e037",
    label: "Trend Intelligence",
    title: "Color & Trend Consulting",
    description:
      "Stay ahead of the curve with expert guidance on the 2026 digital-organic palette. We translate global trends into actionable, personalised design decisions.",
    features: ["Annual trend reports", "Bespoke palette curation", "Seasonal workshops", "Digital colour tools"],
  },
  {
    icon: "eco",
    accent: "#b68d40",
    label: "Conscious Living",
    title: "Sustainable Luxury Design",
    description:
      "Luxury and sustainability are not opposites. We source certified eco-materials and apply biophilic principles to deliver spaces that are kind to the planet.",
    features: ["Certified eco-materials", "Biophilic design", "Carbon-conscious sourcing", "Lifecycle analysis"],
  },
  {
    icon: "grid_view",
    accent: "#13b6ec",
    label: "Spatial Strategy",
    title: "Space Planning & Architecture",
    description:
      "Optimise every square metre. Our spatial strategy service re-imagines floor plans, circulation, and light to unlock the true potential of any property.",
    features: ["Floor plan analysis", "3D visualisation", "Natural light mapping", "Zoning strategy"],
  },
  {
    icon: "chair",
    accent: "#008c99",
    label: "Curated Selection",
    title: "Furniture & Materials Sourcing",
    description:
      "Access our curated network of artisan makers, European design houses, and sustainable suppliers to find the perfect pieces for your project.",
    features: ["Trade-only access", "Custom furniture", "Artisan commissions", "Sample library"],
  },
];

const steps = [
  {
    number: "01",
    icon: "forum",
    title: "Discovery",
    description:
      "An in-depth consultation to understand your vision, lifestyle, and aspirations. We listen before we design.",
  },
  {
    number: "02",
    icon: "draw",
    title: "Concept & Design",
    description:
      "Space planning, mood boards, material selections, and 3D renders brought together into a cohesive design direction.",
  },
  {
    number: "03",
    icon: "construction",
    title: "Implementation",
    description:
      "We manage every artisan, supplier, and contractor to ensure your project is delivered on time and on budget.",
  },
  {
    number: "04",
    icon: "star",
    title: "Reveal & Styling",
    description:
      "The final walk-through and styling session — where your space comes to life exactly as envisioned.",
  },
];

const ServicesPage = () => {
  const [heroRef,     heroInView]     = useInView();
  const [svcHdrRef,  svcHdrInView]   = useInView();
  const [svcGridRef, svcGridInView]  = useInView();
  const [procHdrRef, procHdrInView]  = useInView();
  const [procRef,    procInView]     = useInView();
  const [featImgRef, featImgInView]  = useInView();
  const [featTxtRef, featTxtInView]  = useInView();

  return (
  <>
    {/* ── Hero ── */}
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div
        ref={heroRef}
        className={`${styles.heroContent} reveal ${heroInView ? "visible" : ""}`}
      >
        <span className={styles.heroEyebrow}>Our Services</span>
        <h1 className={styles.heroTitle}>
          Spaces Designed to <span>Inspire</span>
        </h1>
        <p className={styles.heroDesc}>
          From private residences to flagship commercial interiors — every project begins with listening and ends with a space that endures.
        </p>
        <div className={styles.heroActions}>
          <a href="#services-grid" className={styles.btnPrimary}>
            Explore Services
            <span className="material-symbols-outlined">arrow_downward</span>
          </a>
          <a href="#process" className={styles.btnSecondary}>
            Our Process
          </a>
        </div>
      </div>
    </section>

    {/* ── Services Grid ── */}
    <section className={styles.servicesSection} id="services-grid">
      <div className={styles.container}>
        <div
          ref={svcHdrRef}
          className={`${styles.sectionHeader} reveal ${svcHdrInView ? "visible" : ""}`}
        >
          <span className={styles.eyebrow}>What We Do</span>
          <h2 className={styles.sectionTitle}>
            Services Built for <span className={styles.highlightOchre}>Every Vision</span>
          </h2>
          <p className={styles.sectionDesc}>
            Each service is tailored to the unique needs of our clients — never templated, always considered.
          </p>
        </div>

        <div ref={svcGridRef} className={styles.servicesGrid} id="services">
          {services.map((svc, i) => (
            <div
              className={`${styles.serviceCard} reveal-scale ${svcGridInView ? "visible" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              key={i}
            >
              <div
                className={styles.serviceCardIcon}
                style={{ background: `${svc.accent}18`, color: svc.accent }}
              >
                <span className="material-symbols-outlined">{svc.icon}</span>
              </div>
              <span className={styles.serviceLabel}>{svc.label}</span>
              <h3 className={styles.serviceTitle}>{svc.title}</h3>
              <p className={styles.serviceDesc}>{svc.description}</p>
              <ul className={styles.serviceFeatures}>
                {svc.features.map((f, j) => (
                  <li key={j} className={styles.serviceFeature}>
                    <span
                      className={`material-symbols-outlined ${styles.featureIcon}`}
                      style={{ color: svc.accent }}
                    >
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={styles.serviceBtn} style={{ color: svc.accent }}>
                Learn more
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Process ── */}
    <section className={styles.processSection} id="process">
      <div className={styles.container}>
        <div
          ref={procHdrRef}
          className={`${styles.sectionHeader} reveal ${procHdrInView ? "visible" : ""}`}
        >
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.highlightCyan}>Process</span>
          </h2>
          <p className={styles.sectionDesc}>
            A refined four-step methodology that keeps you informed and in control from first sketch to final reveal.
          </p>
        </div>

        <div ref={procRef} className={styles.processGrid}>
          {steps.map((step, i) => (
            <div
              className={`${styles.processCard} reveal ${procInView ? "visible" : ""}`}
              style={{ animationDelay: `${i * 0.12}s` }}
              key={i}
            >
              <div className={styles.processNumber}>{step.number}</div>
              <div className={styles.processIconWrap}>
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDesc}>{step.description}</p>
              {i < steps.length - 1 && <div className={styles.processConnector} />}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Feature Highlight ── */}
    <section className={styles.featureSection}>
      <div className={styles.featureInner}>
        <div
          ref={featImgRef}
          className={`${styles.featureImage} reveal-right ${featImgInView ? "visible" : ""}`}
        >
          <img
            src={p4}
            alt="Bespoke interior consultation"
          />
          <div className={styles.featureImageBadge}>
            <span className="material-symbols-outlined">verified</span>
            Award-winning studio
          </div>
        </div>
        <div
          ref={featTxtRef}
          className={`${styles.featureContent} reveal-left ${featTxtInView ? "visible" : ""}`}
        >
          <span className={styles.eyebrow}>Bespoke Consultation</span>
          <h2 className={styles.sectionTitle}>
            Every Project Starts with <span className={styles.highlightLime}>a Conversation</span>
          </h2>
          <p className={styles.featureDesc}>
            Our discovery sessions go beyond floor plans. We explore how you live, what inspires you, and what legacy you want your space to hold. From there, we translate feeling into form.
          </p>
          <div className={styles.featureStats}>
            <div className={styles.featureStat}>
              <span className={styles.statValue}>120+</span>
              <span className={styles.statLabel}>Projects completed</span>
            </div>
            <div className={styles.featureStat}>
              <span className={styles.statValue}>14</span>
              <span className={styles.statLabel}>Design awards</span>
            </div>
            <div className={styles.featureStat}>
              <span className={styles.statValue}>8</span>
              <span className={styles.statLabel}>Countries served</span>
            </div>
          </div>
          <Link to="/" className={styles.featureBtn}>
            View Our Portfolio
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>

    {/* ── Newsletter / CTA ── */}
    <Newsletter />
  </>
  );
};

export default ServicesPage;
