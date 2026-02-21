import React from 'react';
import './OurMission.css';

export default function OurMission({ data }) {
  if (!data) return null;

  return (
    <section data-component="ourMission" className="om-section">
      {/* Decorative geometric shapes */}
      <div className="om-geo om-geo--circle-lg" aria-hidden="true" />
      <div className="om-geo om-geo--circle-sm" aria-hidden="true" />
      <div className="om-geo om-geo--ring" aria-hidden="true" />
      <div className="om-geo om-geo--diamond" aria-hidden="true" />
      <div className="om-glow om-glow--left" aria-hidden="true" />
      <div className="om-glow om-glow--right" aria-hidden="true" />

      <div className="om-inner">
        {/* Header */}
        <div className="om-header">
          <div className="om-eyebrow">
            <span className="om-eyebrow-line" />
            <span className="om-eyebrow-text">Who We Are</span>
            <span className="om-eyebrow-line" />
          </div>
          {data.sectionTitle && (
            <h2 className="om-title font-heading">{data.sectionTitle}</h2>
          )}
        </div>

        {/* Paragraphs as cascading glassmorphism cards */}
        {data.paragraphs && Array.isArray(data.paragraphs) && (
          <div className="om-cards">
            {data.paragraphs.map((item, i) => (
              <div
                key={i}
                className="om-card"
                style={{ animationDelay: `${i * 0.18}s` }}
              >
                <div className="om-card-number font-heading">{String(i + 1).padStart(2, '0')}</div>
                <p className="om-card-text font-body">
                  {item.text || (typeof item === 'string' ? item : '')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
