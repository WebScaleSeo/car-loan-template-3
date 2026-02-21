import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ navigation, branding }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      data-component="header"
      className={`header${scrolled ? ' header--scrolled' : ''}`}
    >
      <div className="header__inner">
        {/* Brand lockup */}
        <a href="/" className="header__brand" aria-label="DriveRate Auto Loans — Home">
          <div className="header__logo-icon" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="var(--primary-color)" />
              {/* Steering wheel / road icon */}
              <path d="M18 8C12.477 8 8 12.477 8 18C8 23.523 12.477 28 18 28C23.523 28 28 23.523 28 18C28 12.477 23.523 8 18 8Z" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="18" cy="18" r="3" fill="white"/>
              <line x1="18" y1="8" x2="18" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="18" y1="21" x2="18" y2="28" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="8" y1="18" x2="15" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="21" y1="18" x2="28" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="header__brand-text">
            <div className="header__brand-name">
              <span className="header__brand-core">
                {branding?.brandNameCore || 'DriveRate'}
              </span>
              <span className="header__brand-qualifier">
                {branding?.brandNameQualifier || 'Auto Loans'}
              </span>
            </div>
            <div className="header__tagline">
              {branding?.tagline || 'Your Road to Better Car Financing'}
            </div>
          </div>
        </a>

        {/* Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list" role="list">
            {navigation?.items?.map((item, i) =>
              item.type === 'cta' ? (
                <li key={i} className="header__nav-item">
                  <a href={item.url} className="header__cta-btn">
                    <span>{item.label}</span>
                    <svg className="header__cta-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              ) : (
                <li key={i} className="header__nav-item">
                  <a href={item.url} className="header__nav-link">
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* Decorative speed stripe */}
      <div className="header__accent-stripe" aria-hidden="true" />
    </header>
  );
}
