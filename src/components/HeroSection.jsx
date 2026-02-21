import React from 'react';
import './HeroSection.css';

const stats = [
  { value: '50+', label: 'Lending Partners' },
  { value: '98%', label: 'Approval Rate' },
  { value: '5 Min', label: 'Application' },
  { value: '$0', label: 'Application Fee' },
];

export default function HeroSection({ data }) {
  if (!data) return null;

  return (
    <section data-component="heroSection" className="hero-section">
      {/* Background image */}
      <div className="hero-bg-image" />

      {/* Dark scrim overlay */}
      <div className="hero-scrim" />

      {/* Dot grid pattern */}
      <div className="hero-dot-grid" />

      {/* Floating decorative numerals */}
      <div className="hero-deco-numeral hero-deco-1" aria-hidden="true">0%</div>
      <div className="hero-deco-numeral hero-deco-2" aria-hidden="true">APR</div>
      <div className="hero-deco-numeral hero-deco-3" aria-hidden="true">$</div>

      {/* Floating orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      {/* Main content */}
      <div className="hero-content container mx-auto px-6">
        <div className="hero-inner">
          {/* Badge */}
          <div className="hero-badge hero-animate-1" aria-hidden="true">
            <span className="hero-badge-dot" />
            Trusted by thousands of car buyers
          </div>

          {/* Headline */}
          <h1 className="hero-headline hero-animate-2 font-heading">
            {data.headline}
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline hero-animate-3 font-body">
            {data.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas hero-animate-4">
            <a href={data.ctaButtonUrl || '/contact'} className="hero-cta-primary">
              <span>{data.ctaButtonLabel}</span>
              <svg className="hero-cta-arrow" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={data.secondaryCtaUrl || '/about'} className="hero-cta-secondary">
              {data.secondaryCtaLabel}
            </a>
          </div>

          {/* Stat badges */}
          <div className="hero-stats hero-animate-5">
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat-badge">
                <span className="hero-stat-value font-heading">{stat.value}</span>
                <span className="hero-stat-label font-body">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
