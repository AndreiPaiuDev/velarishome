import { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";

const projects = [
  {
    className: "masonry-item masonry-item-tall",
    img: p1,
    label: "Residential",
    title: "The Glass Pavilion"
  },
  {
    className: "masonry-item",
    img: p2,
    label: "Residential",
    title: "Ochre Retreat"
  },
  {
    className: "masonry-item masonry-item-wide",
    img: p3,
    label: "Hospitality",
    title: "Digital Loft HQ"
  },
  {
    className: "masonry-item",
    img: p4,
    label: "Residential",
    title: "The Bio-Lime Kitchen"
  },
  {
    className: "masonry-item masonry-item-tall",
    img: p5,
    label: "Residential",
    title: "Skyline Penthouse"
  }
];

const filters = ["All Projects", "Residential", "Hospitality"];

const Portfolio = () => {
  const [active, setActive] = useState("All Projects");

  const filtered = active === "All Projects"
    ? projects
    : projects.filter(p => p.label === active);

  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-inner">
        <div className="portfolio-header">
          <div>
            <h2>Selected Portfolio</h2>
            <p>A curated collection of residential and commercial spaces defined by innovation.</p>
          </div>
          <div className="portfolio-filters">
            {filters.map(f => (
              <button
                key={f}
                className={active === f ? "active" : ""}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="masonry-grid">
          {filtered.map((project) => (
            <div key={project.title} className={project.className}>
              <img alt={project.title} src={project.img} />
              <div className="masonry-overlay">
                {project.label && <span className="masonry-overlay-label">{project.label}</span>}
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-cta">
          <Link to="/portfolio" className="portfolio-cta-btn">
            View Full Portfolio
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
