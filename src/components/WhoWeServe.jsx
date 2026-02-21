import React from 'react';
import './WhoWeServe.css';

export default function WhoWeServe({ data }) {
  if (!data) return null;

  const { sectionTitle, sectionSubtitle, profiles = [] } = data;

  return (
    <section data-component="whoWeServe" className="wws-section">
      {/* Decorative background elements */}
      <div className="wws-bg-orb wws-orb-1" aria-hidden="true" />
      <div className="wws-bg-orb wws-orb-2" aria-hidden="true" />
      <div className="wws-bg-orb wws-orb-3" aria-hidden="true" />

      <div className="wws-container">
        {/* Section Header */}
        <div className="wws-header">
          <div className="wws-header-inner">
            <span className="wws-eyebrow">Our Customers</span>
            <h2 className="wws-title font-heading">{sectionTitle}</h2>
            <p className="wws-subtitle font-body">{sectionSubtitle}</p>
          </div>
          <div className="wws-ghost-text font-heading" aria-hidden="true">
            WHO
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="wws-profiles">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="wws-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="wws-card-num font-heading" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="wws-card-body">
                <h3 className="wws-card-title font-heading">{profile.title}</h3>
                <p className="wws-card-desc font-body">{profile.description}</p>
              </div>
              <div className="wws-card-accent" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
