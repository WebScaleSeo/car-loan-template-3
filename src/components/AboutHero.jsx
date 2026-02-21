import React from 'react';
import './AboutHero.css';

const stats = [
  { value: '10,000+', label: 'Drivers Served' },
  { value: '4.9 / 5', label: 'Customer Rating' },
  { value: 'Zero', label: 'Hidden Fees' },
];

export default function AboutHero({ data }) {
  if (!data) return null;

  return (
    <section data-component="aboutHero" className="aboutHero-section">
      {/* CSS dot pattern layer */}
      <div className="aboutHero-dots" aria-hidden="true" />

      {/* Noise/grain texture layer */}
      <div className="aboutHero-noise" aria-hidden="true" />

      {/* Oversized decorative numeral */}
      <div className="aboutHero-deco" aria-hidden="true">01</div>

      <div className="aboutHero-inner">

        {/* Label pill */}
        <div className="aboutHero-label-wrap aboutHero-anim-1">
          <span className="aboutHero-label font-body">Our Story</span>
        </div>

        {/* Headline */}
        {data.headline && (
          <h1 className="aboutHero-headline font-heading aboutHero-anim-2">
            {data.headline}
          </h1>
        )}

        {/* Subheadline */}
        {data.subheadline && (
          <p className="aboutHero-subheadline font-body aboutHero-anim-3">
            {data.subheadline}
          </p>
        )}

        {/* CTA Button */}
        <div className="aboutHero-cta-wrap aboutHero-anim-4">
          <a href="/contact" className="aboutHero-cta font-heading">
            Get Started Today
          </a>
        </div>

        {/* Stat Badges — secondary content element */}
        <div className="aboutHero-stats aboutHero-anim-5">
          {stats.map((stat, i) => (
            <div key={i} className="aboutHero-stat">
              <span className="aboutHero-stat-value font-heading">{stat.value}</span>
              <span className="aboutHero-stat-label font-body">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
