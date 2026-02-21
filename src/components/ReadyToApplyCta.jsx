import React, { useState, useEffect, useRef } from 'react';
import './ReadyToApplyCta.css';

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (target === 0) { setCount(0); return; }
    const steps = 50;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      setCount(value);
      if (current >= steps) clearInterval(timer);
    }, stepDuration);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 98, suffix: '%', label: 'Approval Rate' },
  { value: 5, suffix: ' Min', label: 'Application Time' },
  { value: 500, suffix: '+', label: 'Lender Network' },
];

export default function ReadyToApplyCta({ data }) {
  if (!data) return null;

  return (
    <section data-component="readyToApplyCta" className="rtac-section">
      {/* Background layers */}
      <div className="rtac-bg-image" aria-hidden="true" />
      <div className="rtac-aurora" aria-hidden="true" />
      <div className="rtac-scrim" aria-hidden="true" />

      {/* Content */}
      <div className="rtac-content">
        {/* Trust stats row */}
        <div className="rtac-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="rtac-stat">
              <div className="rtac-stat-number font-heading">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="rtac-stat-label font-body">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Glassmorphism CTA card */}
        <div className="rtac-card">
          <div className="rtac-card-glow" aria-hidden="true" />
          <div className="rtac-card-body">
            <div className="rtac-badge font-body">
              <span className="rtac-badge-dot" />
              DriveRate Financing
            </div>
            <h2 className="rtac-headline font-heading">{data.headline}</h2>
            <p className="rtac-description font-body">{data.description}</p>
            <a
              href={data.ctaButtonUrl || '/contact'}
              className="rtac-cta-btn font-heading"
            >
              {data.ctaButtonLabel}
              <svg className="rtac-btn-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom reassurance */}
        <p className="rtac-reassurance font-body">
          No obligation · No hard credit pull · Response within minutes
        </p>
      </div>
    </section>
  );
}
