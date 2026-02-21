import React from 'react';
import './WhyChooseUs.css';

const ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  thumbsUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/>
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
};

export default function WhyChooseUs({ data }) {
  if (!data) return null;

  return (
    <section data-component="whyChooseUs" className="wcu-section">
      {/* Decorative background elements */}
      <div className="wcu-bg-orb wcu-bg-orb--1" aria-hidden="true" />
      <div className="wcu-bg-orb wcu-bg-orb--2" aria-hidden="true" />
      <div className="wcu-bg-grid" aria-hidden="true" />

      <div className="wcu-inner container mx-auto px-6">

        {/* Header */}
        <div className="wcu-header">
          <div className="wcu-ribbon" aria-hidden="true">
            <span className="wcu-ribbon__bar" />
            <span className="wcu-ribbon__bar wcu-ribbon__bar--wide" />
            <span className="wcu-ribbon__bar" />
          </div>

          {data.sectionTitle && (
            <h2 className="wcu-title font-heading">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="wcu-subtitle font-body">{data.sectionSubtitle}</p>
          )}
        </div>

        {/* Benefits grid */}
        {data.benefits && Array.isArray(data.benefits) && (
          <div className="wcu-grid">
            {data.benefits.map((benefit, i) => (
              <div
                key={i}
                className="wcu-card"
                style={{ '--delay': `${0.5 + i * 0.1}s` }}
              >
                <div className="wcu-card__border" aria-hidden="true" />
                <div className="wcu-card__body">
                  <div className="wcu-icon">
                    {ICONS[benefit.iconName] || ICONS.shield}
                  </div>
                  {benefit.title && (
                    <h3 className="wcu-card__title font-heading">{benefit.title}</h3>
                  )}
                  {benefit.description && (
                    <p className="wcu-card__desc font-body">{benefit.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
