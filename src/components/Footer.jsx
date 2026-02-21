import React from 'react';
import './Footer.css';

export default function Footer({ footer }) {
  if (!footer) return null;

  const { branding, links, copyright } = footer;

  return (
    <footer data-component="footer" className="footer-root">
      <div className="footer-glow-bar" />

      <div className="footer-inner">
        {/* Branding column */}
        <div className="footer-brand-col">
          <span className="footer-brand-stroke" aria-hidden="true">
            DriveRate
          </span>
          <p className="footer-brand-name">{branding.name}</p>
          <p className="footer-brand-desc">{branding.description}</p>
        </div>

        {/* Navigation column */}
        <div className="footer-nav-col">
          <h3 className="footer-nav-heading">Quick Links</h3>
          <ul className="footer-nav-list">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.url} className="footer-nav-link">
                  <span className="footer-nav-arrow">→</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA column */}
        <div className="footer-cta-col">
          <h3 className="footer-cta-heading">Ready to Drive?</h3>
          <p className="footer-cta-text">
            Start your application today and get competitive rates in minutes.
          </p>
          <a href="/contact" className="footer-cta-btn">
            Get Started
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  );
}
