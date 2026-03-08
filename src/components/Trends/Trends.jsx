import React from "react";
import { Link } from "react-router-dom";
import "./Trends.css";

const trends = [
  {
    swatchClass: "swatch-teal",
    title: "Digital Teal",
    subtitle: "Electronic Serenity",
    description: "A tech-inspired aqua that bridges the gap between screens and nature, promoting focus and calm in hybrid environments.",
    label: "Primary Tone"
  },
  {
    swatchClass: "swatch-lime",
    title: "Bio-Lime",
    subtitle: "Vibrant Vitality",
    description: "Representing lab-grown materials and sustainable growth, this high-energy shade brings natural optimism to interior details.",
    label: "Accent Tone"
  },
  {
    swatchClass: "swatch-ochre",
    title: "Earthy Ochre",
    subtitle: "Terracotta Roots",
    description: "A fundamental, warm neutral that grounds the futuristic palette in ancient earth tones, providing comfort and stability.",
    label: "Grounding Tone"
  }
];

const Trends = () => (
  <section className="trends-section" id="trends">
    <div className="trends-inner">
      <div className="trends-header">
        <span className="trends-eyebrow">Forecasting</span>
        <h2>2026 Color Narrative</h2>
        <p>Exploring the intersection of the digital realm and organic matter through our curated 2026 palette.</p>
      </div>
      <div className="trends-grid">
        {trends.map((trend, idx) => (
          <div className="trend-card-wrap" key={idx}>
            <div className={`trend-swatch ${trend.swatchClass}`}>
              <div>
                <span className="trend-swatch-label">{trend.label}</span>
                <h3>{trend.title}</h3>
              </div>
            </div>
            <p className="trend-subtitle">{trend.subtitle}</p>
            <p className="trend-desc">{trend.description}</p>
          </div>
        ))}
      </div>
      <div className="trends-cta">
        <Link to="/trends" className="trends-cta-btn">
          View Full 2026 Report
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Trends;
