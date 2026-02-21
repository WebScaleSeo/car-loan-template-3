import React from 'react';
import './FaqBottomCta.css';

export default function FaqBottomCta({ data }) {
  if (!data) return null;

  return (
    <section data-component="faqBottomCta" className="faq-cta-section">
      {/* Decorative radial glow layers */}
      <div className="faq-cta-glow faq-cta-glow--primary" aria-hidden="true" />
      <div className="faq-cta-glow faq-cta-glow--accent" aria-hidden="true" />

      <div className="faq-cta-content">
        {/* Icon badge */}
        <div className="faq-cta-badge" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        {data.headline && (
          <h2 className="faq-cta-headline">{data.headline}</h2>
        )}

        {data.description && (
          <p className="faq-cta-description">{data.description}</p>
        )}

        {data.ctaButtonLabel && data.ctaButtonUrl && (
          <a
            href={data.ctaButtonUrl}
            className="faq-cta-button"
          >
            <span>{data.ctaButtonLabel}</span>
            <svg
              className="faq-cta-button-arrow"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
