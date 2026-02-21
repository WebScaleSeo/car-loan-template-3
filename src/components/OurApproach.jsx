import React, { useEffect, useRef, useState } from 'react';
import './OurApproach.css';

function useCounter(target, duration = 1200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const raf = requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return count;
}

function PillarCard({ pillar, index, active }) {
  const num = useCounter(index + 1, 800, active);
  return (
    <div className="oa-pillar" style={{ '--stagger': `${index * 0.1 + 0.3}s` }}>
      <div className="oa-pillar-inner">
        <div className="oa-pillar-num-wrap">
          <div className="oa-pillar-num-glow" />
          <span className="oa-pillar-num">
            {String(active ? num : index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="oa-pillar-title font-heading">{pillar.title}</h3>
        <p className="oa-pillar-desc font-body">{pillar.description}</p>
        <div className="oa-pillar-accent-line" />
      </div>
    </div>
  );
}

export default function OurApproach({ data }) {
  if (!data) return null;

  const sectionRef = useRef(null);
  const [counterActive, setCounterActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounterActive(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-component="ourApproach"
      className="oa-section"
      ref={sectionRef}
    >
      {/* Aurora mesh layers */}
      <div className="oa-aurora oa-aurora-1" />
      <div className="oa-aurora oa-aurora-2" />
      <div className="oa-aurora oa-aurora-3" />
      <div className="oa-grid-overlay" />

      <div className="oa-container">
        {/* Header */}
        <div className="oa-header">
          <div className="oa-eyebrow font-body">Our Methodology</div>
          <h2 className="oa-title font-heading">{data.sectionTitle}</h2>
          <p className="oa-desc font-body">{data.description}</p>
        </div>

        {/* Pillars grid */}
        {data.pillars && Array.isArray(data.pillars) && (
          <div className="oa-pillars-grid">
            {data.pillars.map((pillar, i) => (
              <PillarCard key={i} pillar={pillar} index={i} active={counterActive} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
