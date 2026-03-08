import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";
import styles from "./PortfolioPage.module.css";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";
import p7 from "../../images/p7.jpg";
import p8 from "../../images/p8.jpg";
import p9 from "../../images/p9.jpg";

const allProjects = [
  {
    id: 1, category: "Residential", size: "tall",
    img: p1,
    title: "The Glass Pavilion", location: "Chelsea, London", year: "2025",
  },
  {
    id: 2, category: "Residential", size: "normal",
    img: p2,
    title: "Ochre Retreat", location: "The Cotswolds", year: "2025",
  },
  {
    id: 3, category: "Hospitality", size: "wide",
    img: p3,
    title: "Digital Loft HQ", location: "Shoreditch, London", year: "2024",
  },
  {
    id: 4, category: "Residential", size: "normal",
    img: p4,
    title: "The Bio-Lime Kitchen", location: "Notting Hill, London", year: "2024",
  },
  {
    id: 5, category: "Residential", size: "tall",
    img: p5,
    title: "Skyline Penthouse", location: "Canary Wharf, London", year: "2024",
  },
  {
    id: 6, category: "Commercial", size: "wide",
    img: p6,
    title: "Studio Meridian", location: "Mayfair, London", year: "2025",
  },
  {
    id: 7, category: "Hospitality", size: "normal",
    img: p7,
    title: "The Velvet Suite", location: "Edinburgh, Scotland", year: "2025",
  },
  {
    id: 8, category: "Commercial", size: "normal",
    img: p8,
    title: "Teal & Co. HQ", location: "Manchester", year: "2024",
  },
  {
    id: 9, category: "Residential", size: "wide",
    img: p9,
    title: "Dusk Villa", location: "Ibiza, Spain", year: "2025",
  },
];

const filters = ["All Projects", "Residential", "Hospitality", "Commercial"];
const stats    = [
  { value: "120+", label: "Projects delivered" },
  { value: "14",   label: "Design awards" },
  { value: "8",    label: "Countries" },
  { value: "98%",  label: "Client satisfaction" },
];
const sizeClass = { tall: "gridItemTall", wide: "gridItemWide", normal: "" };

/* ── Carousel ────────────────────────────────── */
const INTERVAL = 5000;

const Carousel = () => {
  const [current, setCurrent]   = useState(0);
  const [paused,  setPaused]    = useState(false);
  const [prev,    setPrev]      = useState(null);
  const total = allProjects.length;

  const goTo = useCallback((idx) => {
    setPrev(current);
    setCurrent(idx);
  }, [current]);

  const goNext = useCallback(() => goTo((current + 1) % total), [goTo, current, total]);
  const goPrev = useCallback(() => goTo((current - 1 + total) % total), [goTo, current, total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(goNext, INTERVAL);
    return () => clearInterval(t);
  }, [paused, goNext]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {allProjects.map((project, i) => (
        <div
          key={project.id}
          className={`${styles.slide} ${i === current ? styles.slideActive : ""} ${i === prev ? styles.slidePrev : ""}`}
        >
          <img src={project.img} alt={project.title} className={styles.slideImg} />
          <div className={styles.slideGradient} />
        </div>
      ))}

      {/* Content — keyed so it re-animates on slide change */}
      <div className={styles.carouselContent} key={current}>
        <div className={styles.carouselCounter}>
          <span className={styles.counterCurrent}>{String(current + 1).padStart(2, "0")}</span>
          <span className={styles.counterSep} />
          <span className={styles.counterTotal}>{String(total).padStart(2, "0")}</span>
        </div>
        <span className={styles.carouselCategory}>{allProjects[current].category}</span>
        <h1 className={styles.carouselTitle}>{allProjects[current].title}</h1>
        <div className={styles.carouselMeta}>
          <span><span className="material-symbols-outlined">location_on</span>{allProjects[current].location}</span>
          <span><span className="material-symbols-outlined">calendar_today</span>{allProjects[current].year}</span>
        </div>
      </div>

      {/* Arrow buttons */}
      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={goPrev} aria-label="Previous">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={goNext} aria-label="Next">
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {allProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === current && !paused && (
              <span className={styles.dotProgress} style={{ animationDuration: `${INTERVAL}ms` }} />
            )}
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </div>
  );
};

/* ── Page ─────────────────────────────────────── */
const PortfolioPage = () => {
  const [active, setActive] = useState("All Projects");

  const [statsRef,   statsInView]   = useInView();
  const [filtersRef, filtersInView] = useInView();
  const [gridRef,    gridInView]    = useInView();
  const [ctaRef,     ctaInView]     = useInView();

  const filtered = active === "All Projects"
    ? allProjects
    : allProjects.filter((p) => p.category === active);

  return (
    <>
      {/* ── Carousel Hero ── */}
      <Carousel />

      {/* ── Stats Strip ── */}
      <div
        ref={statsRef}
        className={`${styles.statsStrip} reveal-fade ${statsInView ? "visible" : ""}`}
      >
        <div className={styles.statsInner}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`${styles.statItem} reveal ${statsInView ? `visible d${i + 1}` : ""}`}
            >
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>

          <div
            ref={filtersRef}
            className={`${styles.filters} reveal ${filtersInView ? "visible" : ""}`}
          >
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${active === f ? styles.filterBtnActive : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
                {f !== "All Projects" && (
                  <span className={styles.filterCount}>
                    {allProjects.filter((p) => p.category === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div ref={gridRef} className={styles.grid}>
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={`${styles.gridItem} ${styles[sizeClass[project.size]] || ""} reveal-scale ${gridInView ? "visible" : ""}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <img src={project.img} alt={project.title} className={styles.gridImg} />
                <div className={styles.gridOverlay}>
                  <span className={styles.gridCategory}>{project.category}</span>
                  <h3 className={styles.gridTitle}>{project.title}</h3>
                  <div className={styles.gridMeta}>
                    <span><span className="material-symbols-outlined">location_on</span>{project.location}</span>
                    <span><span className="material-symbols-outlined">calendar_today</span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && <p className={styles.empty}>No projects in this category yet.</p>}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        className={`${styles.ctaSection} reveal ${ctaInView ? "visible" : ""}`}
      >
        <div className={styles.ctaInner}>
          <div className={styles.ctaGradient} />
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Ready to Begin?</span>
            <h2 className={styles.ctaTitle}>Your space could be <span>next.</span></h2>
            <p className={styles.ctaDesc}>Every project in this portfolio began with a single conversation. Let's have ours.</p>
            <Link to="/contact" className={styles.ctaBtn}>
              Start Your Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
