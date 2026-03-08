import { useState } from "react";
import useInView from "../../hooks/useInView";
import Newsletter from "../../components/Newsletter/Newsletter";
import styles from "./TrendsPage.module.css";
import p2 from "../../images/p2.jpg";
import p5 from "../../images/p5.jpg";
import p7 from "../../images/p7.jpg";
import p9 from "../../images/p9.jpg";

/* ── Data ─────────────────────────────────────── */

const palette = [
  {
    name: "Digital Teal",
    subtitle: "Electronic Serenity",
    hex: "#008C99",
    rgb: "0, 140, 153",
    cmyk: "100, 9, 0, 40",
    role: "Primary Tone",
    roleBg: "rgba(0,140,153,0.12)",
    roleColor: "#008c99",
    bg: "#008c99",
    text: "#fff",
    desc: "A tech-inspired aqua bridging the gap between screens and nature. It promotes focus and calm in hybrid live-work environments — the defining colour mood of 2026.",
    applications: ["Feature walls", "Cabinetry", "Soft furnishings", "Architectural accents"],
    psychology: "Calm · Focus · Innovation",
  },
  {
    name: "Bio-Lime",
    subtitle: "Vibrant Vitality",
    hex: "#D2E037",
    rgb: "210, 224, 55",
    cmyk: "6, 0, 75, 12",
    role: "Accent Tone",
    roleBg: "rgba(210,224,55,0.18)",
    roleColor: "#8a9400",
    bg: "#d2e037",
    text: "#1a1a1a",
    desc: "Representing lab-grown materials and sustainable growth, this high-energy shade brings natural optimism to interior details. Use it to punctuate and electrify.",
    applications: ["Cushions & throws", "Artwork", "Plant displays", "Statement furniture"],
    psychology: "Energy · Optimism · Growth",
  },
  {
    name: "Earthy Ochre",
    subtitle: "Terracotta Roots",
    hex: "#B68D40",
    rgb: "182, 141, 64",
    cmyk: "0, 22, 65, 29",
    role: "Grounding Tone",
    roleBg: "rgba(182,141,64,0.12)",
    roleColor: "#b68d40",
    bg: "#b68d40",
    text: "#fff",
    desc: "A fundamental warm neutral that grounds the futuristic palette in ancient earth tones. It provides comfort, stability, and warmth — the anchor every bold scheme needs.",
    applications: ["Flooring", "Natural stone", "Textured plaster", "Woven textiles"],
    psychology: "Warmth · Comfort · Stability",
  },
  {
    name: "Cyan Spark",
    subtitle: "Digital Pulse",
    hex: "#13B6EC",
    rgb: "19, 182, 236",
    cmyk: "92, 23, 0, 7",
    role: "Brand Accent",
    roleBg: "rgba(19,182,236,0.12)",
    roleColor: "#13b6ec",
    bg: "#13b6ec",
    text: "#fff",
    desc: "The brightest point in the palette — pure digital energy. Used sparingly, it activates any composition and signals modernity, precision, and forward motion.",
    applications: ["Lighting accents", "Hardware & fixtures", "Graphic elements", "Neon art"],
    psychology: "Clarity · Precision · Future",
  },
];

const macroTrends = [
  {
    icon: "memory",
    label: "Trend 01",
    title: "Digital-Organic Fusion",
    desc: "The defining macro-trend of 2026 merges the precision of technology with the softness of the natural world. Expect tactile surfaces alongside smart lighting, biomorphic forms met with clean pixel grids.",
    img: p5,
    accentColor: "#008c99",
    tags: ["Biomorphic form", "Smart surfaces", "Hybrid materials"],
  },
  {
    icon: "eco",
    label: "Trend 02",
    title: "Biophilic Minimalism",
    desc: "Less is alive. Spaces stripped to their elemental honesty — raw linen, aged timber, unfinished plaster — with living plants as architecture. Nature is not decoration; it is structure.",
    img: p9,
    accentColor: "#d2e037",
    tags: ["Natural materials", "Living walls", "Unpainted surfaces"],
  },
  {
    icon: "diamond",
    label: "Trend 03",
    title: "Tactile Luxury",
    desc: "In an increasingly screen-based world, the yearning for texture is profound. Boucle, ribbed concrete, hammered metal, and handwoven fabrics assert the irreplaceable value of the handmade.",
    img: p7,
    accentColor: "#b68d40",
    tags: ["Boucle & bouclé", "Artisan craft", "Haptic design"],
  },
  {
    icon: "palette",
    label: "Trend 04",
    title: "Chromatic Expression",
    desc: "Colour used with intention and courage. Singular hues applied across entire rooms create immersive emotional environments — moving beyond accent walls into full chromatic commitment.",
    img: p2,
    accentColor: "#13b6ec",
    tags: ["Tonal rooms", "Colour-drenching", "Expressive palettes"],
  },
];

const materials = [
  { name: "Sage Plaster", category: "Walls & Surfaces", hex: "#9ead8c", light: true },
  { name: "Ribbed Oak", category: "Millwork", hex: "#c4a87a", light: true },
  { name: "Brushed Brass", category: "Hardware", hex: "#c9a84c", light: true },
  { name: "Recycled Concrete", category: "Flooring", hex: "#8a8f8d", light: false },
  { name: "Midnight Slate", category: "Feature Surfaces", hex: "#2d3b40", light: false },
  { name: "Silk Linen", category: "Upholstery", hex: "#e8dece", light: true },
];

const stats = [
  { value: "68%", label: "of designers cite Digital Teal as their 2026 hero colour" },
  { value: "3×", label: "more biophilic elements specified vs. 2024 projects" },
  { value: "£2.4B", label: "sustainable materials market projected in UK interiors" },
  { value: "91%", label: "of clients request texture-led, screen-free spaces" },
];

/* ── Component ─────────────────────────────────── */

const TrendsPage = () => {
  const [activePalette, setActivePalette] = useState(0);
  const active = palette[activePalette];

  const [heroRef,       heroInView]       = useInView();
  const [statsRef,      statsInView]      = useInView();
  const [palHdrRef,     palHdrInView]     = useInView();
  const [palDetailRef,  palDetailInView]  = useInView();
  const [macroHdrRef,   macroHdrInView]   = useInView();
  const [macroGridRef,  macroGridInView]  = useInView();
  const [matHdrRef,     matHdrInView]     = useInView();
  const [matGridRef,    matGridInView]    = useInView();
  const [fcContentRef,  fcContentInView]  = useInView();
  const [fcVisualRef,   fcVisualInView]   = useInView();

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroNoise} />
        <div
          ref={heroRef}
          className={`${styles.heroContent} reveal ${heroInView ? "visible" : ""}`}
        >
          <span className={styles.heroEyebrow}>2026 Trend Report</span>
          <h1 className={styles.heroTitle}>
            The <span>Color Narrative</span><br />of Tomorrow
          </h1>
          <p className={styles.heroDesc}>
            An authoritative deep-dive into the palettes, materials, and macro-movements shaping interior design in 2026 — from our studio to the spaces you inhabit.
          </p>
          <div className={styles.heroActions}>
            <a href="#palette" className={styles.btnPrimary}>
              Explore the Palette
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
            <a href="#macro-trends" className={styles.btnSecondary}>
              2026 Macro Trends
            </a>
          </div>
          <div className={styles.heroSwatches}>
            {palette.map((p) => (
              <span
                key={p.hex}
                className={styles.heroSwatch}
                style={{ background: p.bg }}
                title={p.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        ref={statsRef}
        className={`${styles.statsBar} reveal-fade ${statsInView ? "visible" : ""}`}
      >
        <div className={styles.statsInner}>
          {stats.map((s, i) => (
            <div className={`${styles.statItem} reveal ${statsInView ? `visible d${i + 1}` : ""}`} key={i}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Interactive Colour Palette ── */}
      <section className={styles.paletteSection} id="palette">
        <div className={styles.container}>
          <div
            ref={palHdrRef}
            className={`${styles.sectionHeader} reveal ${palHdrInView ? "visible" : ""}`}
          >
            <span className={styles.eyebrow}>Forecasting</span>
            <h2 className={styles.sectionTitle}>
              The 2026 <span className={styles.highlightTeal}>Core Palette</span>
            </h2>
            <p className={styles.sectionDesc}>
              Four tones. Infinite combinations. Click each colour to explore its character, psychology, and application.
            </p>
          </div>

          {/* Selector tabs */}
          <div className={styles.paletteTabs}>
            {palette.map((p, i) => (
              <button
                key={p.hex}
                className={`${styles.paletteTab} ${activePalette === i ? styles.paletteTabActive : ""}`}
                style={activePalette === i ? { borderColor: p.bg, color: p.bg } : {}}
                onClick={() => setActivePalette(i)}
              >
                <span className={styles.paletteTabSwatch} style={{ background: p.bg }} />
                {p.name}
              </button>
            ))}
          </div>

          {/* Active colour detail */}
          <div
            ref={palDetailRef}
            className={`${styles.paletteDetail} reveal-fade ${palDetailInView ? "visible" : ""}`}
          >
            <div
              className={styles.paletteDetailSwatch}
              style={{ background: active.bg, color: active.text }}
            >
              <div className={styles.paletteSwatchInner}>
                <span className={styles.paletteSwatchRole}>{active.role}</span>
                <h3 className={styles.paletteSwatchName}>{active.name}</h3>
                <span className={styles.paletteSwatchSub}>{active.subtitle}</span>
              </div>
              <div className={styles.paletteSwatchCodes}>
                <span>HEX {active.hex}</span>
                <span>RGB {active.rgb}</span>
                <span>CMYK {active.cmyk}</span>
              </div>
            </div>

            <div className={styles.paletteDetailInfo}>
              <div
                className={styles.paletteRolePill}
                style={{ background: active.roleBg, color: active.roleColor }}
              >
                {active.role}
              </div>
              <p className={styles.paletteDetailDesc}>{active.desc}</p>

              <div className={styles.paletteMetaGrid}>
                <div className={styles.paletteMeta}>
                  <span className={styles.paletteMetaLabel}>Psychology</span>
                  <span className={styles.paletteMetaValue}>{active.psychology}</span>
                </div>
                <div className={styles.paletteMeta}>
                  <span className={styles.paletteMetaLabel}>Best used for</span>
                  <ul className={styles.paletteApps}>
                    {active.applications.map((a, i) => (
                      <li key={i}>
                        <span
                          className="material-symbols-outlined"
                          style={{ color: active.bg === "#d2e037" ? "#8a9400" : active.bg }}
                        >
                          arrow_right
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.paletteComplement}>
                <span className={styles.paletteMetaLabel}>Pairs beautifully with</span>
                <div className={styles.paletteComboRow}>
                  {palette
                    .filter((_, i) => i !== activePalette)
                    .map((p) => (
                      <button
                        key={p.hex}
                        className={styles.paletteComboSwatch}
                        style={{ background: p.bg }}
                        title={p.name}
                        onClick={() => setActivePalette(palette.indexOf(p))}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Macro Trends ── */}
      <section className={styles.macroSection} id="macro-trends">
        <div className={styles.container}>
          <div
            ref={macroHdrRef}
            className={`${styles.sectionHeader} reveal ${macroHdrInView ? "visible" : ""}`}
          >
            <span className={styles.eyebrow}>Big Ideas</span>
            <h2 className={styles.sectionTitle}>
              2026 <span className={styles.highlightOchre}>Macro Trends</span>
            </h2>
            <p className={styles.sectionDesc}>
              Four global movements redefining the language of interior space — from materiality to technology, from nature to pure colour.
            </p>
          </div>

          <div ref={macroGridRef} className={styles.macroGrid}>
            {macroTrends.map((trend, i) => (
              <div
                className={`${styles.macroCard} reveal-scale ${macroGridInView ? "visible" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
                key={i}
              >
                <div className={styles.macroImgWrap}>
                  <img src={trend.img} alt={trend.title} className={styles.macroImg} />
                  <div
                    className={styles.macroImgOverlay}
                    style={{ background: `${trend.accentColor}cc` }}
                  />
                  <div className={styles.macroImgContent}>
                    <span className={styles.macroLabel}>{trend.label}</span>
                    <div className={styles.macroIconWrap}>
                      <span className="material-symbols-outlined">{trend.icon}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.macroCardBody}>
                  <h3 className={styles.macroTitle}>{trend.title}</h3>
                  <p className={styles.macroDesc}>{trend.desc}</p>
                  <div className={styles.macroTags}>
                    {trend.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={styles.macroTag}
                        style={{ background: `${trend.accentColor}14`, color: trend.accentColor === "#d2e037" ? "#8a9400" : trend.accentColor }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials Palette ── */}
      <section className={styles.materialsSection}>
        <div className={styles.container}>
          <div
            ref={matHdrRef}
            className={`${styles.sectionHeader} reveal ${matHdrInView ? "visible" : ""}`}
          >
            <span className={styles.eyebrow}>Material Story</span>
            <h2 className={styles.sectionTitle}>
              Textures of <span className={styles.highlightCyan}>2026</span>
            </h2>
            <p className={styles.sectionDesc}>
              Colour alone does not make a room. These are the surfaces, finishes, and fabrics that complete the 2026 narrative.
            </p>
          </div>

          <div ref={matGridRef} className={styles.materialsGrid}>
            {materials.map((mat, i) => (
              <div
                className={`${styles.materialCard} reveal ${matGridInView ? "visible" : ""}`}
                style={{ animationDelay: `${i * 0.07}s` }}
                key={i}
              >
                <div
                  className={styles.materialSwatch}
                  style={{ background: mat.hex }}
                />
                <div className={styles.materialInfo}>
                  <span className={styles.materialCategory}>{mat.category}</span>
                  <span className={styles.materialName}>{mat.name}</span>
                  <span className={styles.materialHex}>{mat.hex.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Forecast Feature ── */}
      <section className={styles.forecastSection}>
        <div className={styles.forecastInner}>
          <div
            ref={fcContentRef}
            className={`${styles.forecastContent} reveal-right ${fcContentInView ? "visible" : ""}`}
          >
            <span className={styles.eyebrow}>Design Philosophy</span>
            <h2 className={styles.sectionTitle}>
              Where the <span className={styles.highlightLime}>Digital</span> Meets the <span className={styles.highlightOchre}>Organic</span>
            </h2>
            <p className={styles.forecastDesc}>
              The most profound shift in 2026 design is not stylistic — it is philosophical. We are collectively reclaiming the analogue warmth of handmade, imperfect, living things and weaving them into our most technologically advanced environments.
            </p>
            <p className={styles.forecastDesc}>
              The home is no longer a refuge from technology. It is its counterpoint. Warm plaster walls glow under precision LEDs. Linen curtains soften the edges of smart glass. The palette of 2026 holds both worlds simultaneously.
            </p>
            <div className={styles.forecastQuote}>
              <span className={styles.forecastQuoteMark}>"</span>
              <blockquote>
                The future of design is not choosing between technology and nature — it is refusing to choose at all.
              </blockquote>
              <cite>— Velaris Home, 2026 Trend Report</cite>
            </div>
          </div>
          <div
            ref={fcVisualRef}
            className={`${styles.forecastVisual} reveal-left ${fcVisualInView ? "visible" : ""}`}
          >
            <img
              src={p5}
              alt="Digital-organic interior"
              className={styles.forecastImg}
            />
            <div className={styles.forecastSwatchStack}>
              {palette.map((p, i) => (
                <div
                  key={p.hex}
                  className={styles.forecastSwatchSlice}
                  style={{ background: p.bg, flex: i === 0 ? 2 : 1 }}
                  title={p.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <Newsletter />
    </>
  );
};

export default TrendsPage;
