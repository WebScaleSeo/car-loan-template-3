import React from 'react';
import './CoreValuesGrid.css';

const icons = {
  transparency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  integrity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  accessibility: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v8"/>
      <path d="M8 10h8"/>
      <path d="M9 21l3-4 3 4"/>
    </svg>
  ),
  empowerment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  simplicity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  ),
  accountability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  ),
};

export default function CoreValuesGrid({ data }) {
  if (!data) return null;

  return (
    <section data-component="coreValuesGrid" className="cvg-section">
      <div className="cvg-pattern" aria-hidden="true" />
      <div className="cvg-noise" aria-hidden="true" />

      <div className="cvg-container">
        {data.sectionTitle && (
          <div className="cvg-header">
            <span className="cvg-eyebrow">Who We Are</span>
            <h2 className="cvg-title font-heading">{data.sectionTitle}</h2>
            <div className="cvg-title-bar" />
          </div>
        )}

        {data.values && Array.isArray(data.values) && (
          <div className="cvg-grid">
            {data.values.map((item, i) => (
              <div key={i} className="cvg-card" style={{ '--delay': `${i * 0.1}s` }}>
                <div className="cvg-card-accent" />
                <div className="cvg-icon-wrap">
                  {icons[item.iconName] || icons.transparency}
                </div>
                <div className="cvg-card-body">
                  {item.title && (
                    <h3 className="cvg-card-title font-heading">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="cvg-card-desc font-body">{item.description}</p>
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
