import React from 'react';
import './AboutPageCta.css';

export default function AboutPageCta({ data }) {
  if (!data) return null;

  return (
    <section data-component="aboutPageCta" className="cta-section">
      {/* Image background */}
      <div className="cta-bg-image" aria-hidden="true" />
      {/* Dark scrim */}
      <div className="cta-scrim" aria-hidden="true" />
      {/* Aurora gradient overlay */}
      <div className="cta-aurora" aria-hidden="true" />
      {/* Split color zone — left */}
      <div className="cta-zone-left" aria-hidden="true" />

      <div className="cta-inner container mx-auto px-6">
        <div className="cta-content-wrap">
          {/* Sliding content block */}
          <div className="cta-content">
            <span className="cta-eyebrow">DriveRate — Auto Financing</span>
            {data.headline && (
              <h2 className="cta-headline font-heading">{data.headline}</h2>
            )}
            {data.description && (
              <p className="cta-description font-body">{data.description}</p>
            )}
            {data.ctaButtonLabel && data.ctaButtonUrl && (
              <a href={data.ctaButtonUrl} className="cta-button font-heading">
                {data.ctaButtonLabel}
                <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>

          {/* Decorative card — right zone */}
          <div className="cta-deco-card" aria-hidden="true">
            <div className="cta-deco-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
                <path d="M16 38l5-12 6 4 5-10 5 8 6-14" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="44" cy="46" r="8" fill="var(--accent-color)" opacity="0.9"/>
                <path d="M41 46l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="cta-deco-label">Fast Approvals</p>
            <p className="cta-deco-sub">Get your rate in minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
