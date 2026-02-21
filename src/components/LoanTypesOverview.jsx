import React from 'react';
import './LoanTypesOverview.css';

const ICONS = {
  newCar: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="loan-icon-svg">
      <path d="M8 30L12 18H36L40 30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="4" y="30" width="40" height="10" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="13" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="35" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M22 14L24 10L26 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 22H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  usedCar: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="loan-icon-svg">
      <path d="M8 30L13 18H35L40 30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <rect x="4" y="30" width="40" height="10" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="13" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="35" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M16 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 18L16 12H32L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  refinance: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="loan-icon-svg">
      <path d="M10 24C10 16.268 16.268 10 24 10C28.5 10 32.5 12.1 35.1 15.4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38 24C38 31.732 31.732 38 24 38C19.5 38 15.5 35.9 12.9 32.6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M35 10L35.1 15.4L40 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 38L12.9 32.6L8 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 28V20H23L26 25L29 20H31V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function LoanTypesOverview({ data }) {
  if (!data) return null;

  return (
    <section data-component="loanTypesOverview" className="lto-section">
      {/* Decorative aurora orbs */}
      <div className="lto-orb lto-orb--1" aria-hidden="true" />
      <div className="lto-orb lto-orb--2" aria-hidden="true" />
      <div className="lto-orb lto-orb--3" aria-hidden="true" />

      <div className="lto-container">
        {/* Header */}
        <div className="lto-header">
          <div className="lto-eyebrow">Loan Solutions</div>
          {data.sectionTitle && (
            <h2 className="lto-title">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="lto-subtitle">{data.sectionSubtitle}</p>
          )}
        </div>

        {/* Cards */}
        {data.loanTypes && Array.isArray(data.loanTypes) && (
          <div className="lto-cards">
            {data.loanTypes.map((loan, i) => (
              <div key={i} className={`lto-card lto-card--${i}`}>
                <div className="lto-card-glow" aria-hidden="true" />
                <div className="lto-card-icon">
                  {ICONS[loan.iconName] || ICONS['newCar']}
                </div>
                <h3 className="lto-card-title">{loan.title}</h3>
                <p className="lto-card-desc">{loan.description}</p>
                <div className="lto-card-footer">
                  <a href="/contact" className="lto-card-link">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
