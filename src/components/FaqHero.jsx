import React from 'react';
import './FaqHero.css';

export default function FaqHero({ data }) {
  if (!data) return null;

  const stats = [
    { value: '50+', label: 'Questions Answered' },
    { value: '6', label: 'Topic Categories' },
    { value: '24/7', label: 'Expert Support' },
  ];

  return (
    <section data-component="faqHero" className="faqhero-section">
      {/* Noise texture overlay */}
      <div className="faqhero-noise" aria-hidden="true" />

      {/* Aurora gradient orbs */}
      <div className="faqhero-orb faqhero-orb--1" aria-hidden="true" />
      <div className="faqhero-orb faqhero-orb--2" aria-hidden="true" />
      <div className="faqhero-orb faqhero-orb--3" aria-hidden="true" />

      <div className="faqhero-inner">
        {/* Label pill */}
        <div className="faqhero-label faqhero-anim-1">
          <span className="faqhero-label__dot" aria-hidden="true" />
          Support Center
        </div>

        {/* Headline */}
        {data.headline && (
          <h1 className="faqhero-headline faqhero-anim-2">
            {data.headline}
          </h1>
        )}

        {/* Subheadline */}
        {data.subheadline && (
          <p className="faqhero-sub faqhero-anim-3">{data.subheadline}</p>
        )}

        {/* CTA button */}
        <a href="#faq-list" className="faqhero-cta faqhero-anim-4">
          Browse Questions
          <svg className="faqhero-cta__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M9 3L15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>

        {/* Stat badges */}
        <div className="faqhero-stats faqhero-anim-5">
          {stats.map((stat, i) => (
            <div key={i} className="faqhero-stat">
              <span className="faqhero-stat__value">{stat.value}</span>
              <span className="faqhero-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="faqhero-divider" aria-hidden="true" />
    </section>
  );
}
