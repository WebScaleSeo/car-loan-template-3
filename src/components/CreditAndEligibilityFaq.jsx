import React, { useState } from 'react';
import './CreditAndEligibilityFaq.css';

export default function CreditAndEligibilityFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const { sectionTitle, questions } = data;

  return (
    <section data-component="creditAndEligibilityFaq" className="ceq-section">
      {/* Animated gradient background */}
      <div className="ceq-bg-gradient" aria-hidden="true" />
      <div className="ceq-bg-orb ceq-bg-orb--1" aria-hidden="true" />
      <div className="ceq-bg-orb ceq-bg-orb--2" aria-hidden="true" />

      <div className="ceq-container">
        {/* Header */}
        <div className="ceq-header">
          <div className="ceq-eyebrow">
            <span className="ceq-eyebrow-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            Credit &amp; Eligibility
          </div>
          {sectionTitle && (
            <h2 className="ceq-title">{sectionTitle}</h2>
          )}
          <p className="ceq-subtitle">
            Understand how your credit profile affects your auto loan options — and what you can do to get the best terms available to you.
          </p>
        </div>

        {/* FAQ Accordion */}
        {questions && Array.isArray(questions) && (
          <div className="ceq-faq-list">
            {questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`ceq-faq-item${isOpen ? ' ceq-faq-item--open' : ''}`}
                >
                  <button
                    className="ceq-faq-question"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`ceq-answer-${i}`}
                  >
                    <span className="ceq-faq-number">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="ceq-faq-question-text">{item.question}</span>
                    <span className="ceq-faq-chevron" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`ceq-answer-${i}`}
                    className="ceq-faq-answer"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    <div className="ceq-faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom trust note */}
        <div className="ceq-footer-note">
          <div className="ceq-footer-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.09 7.26L17.78 7.27L13.35 10.74L15.17 16.02L10 12.77L4.83 16.02L6.65 10.74L2.22 7.27L7.91 7.26L10 2Z" fill="currentColor"/>
            </svg>
          </div>
          <span>DriveRate works with a wide network of lenders to match borrowers at all credit levels with competitive auto financing options.</span>
        </div>
      </div>
    </section>
  );
}
