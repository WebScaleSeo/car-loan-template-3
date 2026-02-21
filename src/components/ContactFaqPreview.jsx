import React, { useState } from 'react';
import './ContactFaqPreview.css';

export default function ContactFaqPreview({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section data-component="contactFaqPreview" className="cfq-section">
      <div className="cfq-glow" aria-hidden="true" />
      <div className="cfq-inner">
        <div className="cfq-header">
          {data.sectionTitle && (
            <h2 className="cfq-title font-heading">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="cfq-subtitle font-body">{data.sectionSubtitle}</p>
          )}
        </div>

        {data.questions && Array.isArray(data.questions) && (
          <div className="cfq-accordion">
            {data.questions.map((item, i) => (
              <div
                key={i}
                className={`cfq-item${openIndex === i ? ' cfq-item--open' : ''}`}
              >
                <button
                  className="cfq-question font-heading"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="cfq-question-text">{item.question}</span>
                  <span className="cfq-icon" aria-hidden="true">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
                <div
                  className="cfq-answer-wrap"
                  style={{ display: openIndex === i ? 'block' : 'none' }}
                >
                  <p className="cfq-answer font-body">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {(data.faqLinkLabel || data.faqLinkUrl) && (
          <div className="cfq-footer">
            <a
              href={data.faqLinkUrl || '/contact'}
              className="cfq-link font-heading"
            >
              {data.faqLinkLabel || 'View all FAQs'}
              <span className="cfq-link-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
