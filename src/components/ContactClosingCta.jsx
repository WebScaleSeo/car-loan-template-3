import React from 'react';
import './ContactClosingCta.css';

export default function ContactClosingCta({ data }) {
  if (!data) return null;

  return (
    <section data-component="contactClosingCta" className="ccc-section">
      {/* Decorative background layers */}
      <div className="ccc-bg-mesh" aria-hidden="true" />
      <div className="ccc-bg-glow ccc-bg-glow--left" aria-hidden="true" />
      <div className="ccc-bg-glow ccc-bg-glow--right" aria-hidden="true" />

      <div className="ccc-inner">
        {/* Subtle eyebrow line */}
        <div className="ccc-eyebrow" aria-hidden="true">
          <span className="ccc-eyebrow-line" />
          <span className="ccc-eyebrow-dot" />
          <span className="ccc-eyebrow-line" />
        </div>

        {/* Main content */}
        <div className="ccc-content">
          {data.headline && (
            <h2 className="ccc-headline">{data.headline}</h2>
          )}

          {data.description && (
            <p className="ccc-description">{data.description}</p>
          )}

          {/* Back to Home link */}
          {data.secondaryLinkLabel && data.secondaryLinkUrl && (
            <a href={data.secondaryLinkUrl} className="ccc-back-link">
              <span className="ccc-back-arrow" aria-hidden="true">&#8592;</span>
              <span>{data.secondaryLinkLabel}</span>
            </a>
          )}
        </div>

        {/* Bottom decorative seal */}
        <div className="ccc-seal" aria-hidden="true">
          <div className="ccc-seal-ring" />
          <div className="ccc-seal-dot" />
        </div>
      </div>
    </section>
  );
}
