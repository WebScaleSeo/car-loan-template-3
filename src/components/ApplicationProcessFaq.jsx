import React, { useState } from 'react';
import './ApplicationProcessFaq.css';

export default function ApplicationProcessFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const { sectionTitle, questions } = data;

  return (
    <section data-component="applicationProcessFaq" className="apfaq-section">
      <div className="apfaq-dot-grid" aria-hidden="true" />

      <div className="apfaq-container">
        {/* Header */}
        <div className="apfaq-header">
          <div className="apfaq-label-chip">FAQ</div>
          {sectionTitle && (
            <h2 className="apfaq-title font-heading">{sectionTitle}</h2>
          )}
          <p className="apfaq-subtitle font-body">
            Everything you need to know about applying, getting approved, and moving forward with confidence.
          </p>
        </div>

        {/* Accordion */}
        {questions && Array.isArray(questions) && (
          <div className="apfaq-list">
            {questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`apfaq-item${isOpen ? ' apfaq-item--open' : ''}`}
                >
                  <button
                    className="apfaq-question font-heading"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="apfaq-q-number font-heading">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="apfaq-q-text">{item.question}</span>
                    <span className="apfaq-chevron" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="apfaq-answer font-body"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
