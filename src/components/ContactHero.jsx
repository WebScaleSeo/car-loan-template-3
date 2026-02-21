import React from 'react';
import './ContactHero.css';

export default function ContactHero({ data }) {
  if (!data) return null;

  return (
    <section data-component="contactHero" className="contact-hero">
      {/* Decorative background orbs */}
      <div className="ch-orb ch-orb--1" aria-hidden="true" />
      <div className="ch-orb ch-orb--2" aria-hidden="true" />
      <div className="ch-orb ch-orb--3" aria-hidden="true" />
      <div className="ch-grid-pattern" aria-hidden="true" />

      <div className="ch-inner">
        {/* Content — wider left column */}
        <div className="ch-content">
          <span className="ch-eyebrow">DriveRate Auto Loans</span>

          <h1 className="ch-headline font-heading">
            {data.headline}
          </h1>

          <p className="ch-subheadline font-body">{data.subheadline}</p>

          {/* Feature pills — secondary content element */}
          <div className="ch-pills" role="list">
            {[
              { icon: '🚗', label: 'First-time buyers' },
              { icon: '🔄', label: 'Refinancing options' },
              { icon: '📊', label: 'Rate comparison' },
              { icon: '✅', label: 'No obligations' },
            ].map((pill) => (
              <span key={pill.label} className="ch-pill" role="listitem">
                <span className="ch-pill__dot" aria-hidden="true" />
                {pill.label}
              </span>
            ))}
          </div>

          {/* CTA button with pulsing glow */}
          <div className="ch-cta-wrap">
            <a href="/contact" className="ch-cta">
              <span className="ch-cta__glow" aria-hidden="true" />
              <span className="ch-cta__text">Start Your Application</span>
              <svg className="ch-cta__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <p className="ch-cta-note">Free consultation · No credit impact</p>
          </div>
        </div>

        {/* Stats sidebar — asymmetric right element */}
        <aside className="ch-sidebar" aria-label="Why DriveRate">
          <div className="ch-stats-card">
            <p className="ch-stats-card__label">Why choose DriveRate?</p>

            <div className="ch-stat">
              <div className="ch-stat__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="ch-stat__body">
                <span className="ch-stat__value">&lt; 24 hrs</span>
                <span className="ch-stat__desc">Guaranteed response time</span>
              </div>
            </div>

            <div className="ch-stat">
              <div className="ch-stat__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="ch-stat__body">
                <span className="ch-stat__value">100% Free</span>
                <span className="ch-stat__desc">No-cost consultation, always</span>
              </div>
            </div>

            <div className="ch-stat">
              <div className="ch-stat__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="ch-stat__body">
                <span className="ch-stat__value">Expert Team</span>
                <span className="ch-stat__desc">Dedicated loan advisors</span>
              </div>
            </div>

            <div className="ch-stats-card__footer">
              <span className="ch-trust-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L3.09 6.26A2 2 0 002 8.07v8c0 3.8 3.6 6.84 10 8.93C18.4 22.91 22 19.87 22 16.07v-8a2 2 0 00-1.09-1.81L12 2z"/>
                </svg>
                Trusted by thousands of drivers
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
