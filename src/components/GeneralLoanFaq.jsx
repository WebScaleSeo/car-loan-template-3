import React, { useState } from 'react';
import './GeneralLoanFaq.css';

export default function GeneralLoanFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const handleToggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section data-component="generalLoanFaq" className="glf-section">
      <div className="glf-aurora" aria-hidden="true">
        <div className="glf-orb glf-orb-1" />
        <div className="glf-orb glf-orb-2" />
        <div className="glf-orb glf-orb-3" />
      </div>

      <div className="glf-container">
        {data.sectionTitle && (
          <div className="glf-header">
            <div className="glf-eyebrow">FAQ</div>
            <h2 className="glf-title font-heading">{data.sectionTitle}</h2>
            <div className="glf-title-line" aria-hidden="true" />
          </div>
        )}

        {data.questions && Array.isArray(data.questions) && (
          <div className="glf-accordion">
            {data.questions.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`glf-item${isOpen ? ' glf-item--open' : ''}`}
                >
                  <button
                    className="glf-question font-heading"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className="glf-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="glf-question-text">
                      {item.question}
                    </span>
                    <span className="glf-icon" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`glf-chevron${isOpen ? ' glf-chevron--open' : ''}`}
                      >
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
                    className="glf-answer font-body"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    <p className="glf-answer-text">{item.answer}</p>
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
