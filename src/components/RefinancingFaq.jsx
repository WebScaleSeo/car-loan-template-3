import React, { useState } from 'react';
import './RefinancingFaq.css';

export default function RefinancingFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!data) return null;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section data-component="refinancingFaq" className="rfaq-section">
      {/* Decorative glows */}
      <div className="rfaq-glow rfaq-glow--top" aria-hidden="true" />
      <div className="rfaq-glow rfaq-glow--bottom" aria-hidden="true" />
      <div className="rfaq-noise" aria-hidden="true" />

      <div className="rfaq-inner container mx-auto px-6 py-24">
        {/* Header */}
        <div className="rfaq-header">
          <span className="rfaq-eyebrow">FAQ</span>
          {data.sectionTitle && (
            <h2 className="rfaq-title font-heading">{data.sectionTitle}</h2>
          )}
          <div className="rfaq-divider" />
        </div>

        {/* Accordion list */}
        {data.questions && Array.isArray(data.questions) && (
          <div className="rfaq-list">
            {data.questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rfaq-item ${isOpen ? 'rfaq-item--open' : ''}`}
                >
                  <button
                    className="rfaq-question font-heading"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`rfaq-answer-${i}`}
                  >
                    <span className="rfaq-q-number font-body">{String(i + 1).padStart(2, '0')}</span>
                    <span className="rfaq-q-text">{item.question}</span>
                    <span className="rfaq-icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="rfaq-icon-v" />
                        <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`rfaq-answer-${i}`}
                    className="rfaq-answer-wrapper"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    <div className="rfaq-answer font-body">
                      <p>{item.answer}</p>
                    </div>
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
