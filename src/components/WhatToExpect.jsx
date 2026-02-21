import React from 'react';
import './WhatToExpect.css';

export default function WhatToExpect({ data }) {
  if (!data) return null;

  return (
    <section data-component="whatToExpect" className="wte-section">
      {/* Decorative geometric shapes */}
      <div className="wte-geo wte-geo--circle-lg" aria-hidden="true" />
      <div className="wte-geo wte-geo--circle-sm" aria-hidden="true" />
      <div className="wte-geo wte-geo--rect" aria-hidden="true" />

      <div className="wte-inner">
        {/* Header */}
        {data.sectionTitle && (
          <div className="wte-header">
            <span className="wte-eyebrow">Process</span>
            <h2 className="wte-title">
              {data.sectionTitle.split(' ').slice(0, 3).join(' ')}{' '}
              <em className="wte-title-stroke">
                {data.sectionTitle.split(' ').slice(3).join(' ')}
              </em>
            </h2>
          </div>
        )}

        {/* Steps grid */}
        {data.steps && Array.isArray(data.steps) && (
          <div className="wte-grid">
            {data.steps.map((step, i) => (
              <div
                key={i}
                className="wte-card"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                <div className="wte-card-inner">
                  <span className="wte-step-num" aria-hidden="true">
                    {step.stepNumber}
                  </span>
                  <div className="wte-card-body">
                    <div className="wte-step-label">Step {step.stepNumber}</div>
                    {step.title && (
                      <h3 className="wte-card-title">{step.title}</h3>
                    )}
                    {step.description && (
                      <p className="wte-card-desc">{step.description}</p>
                    )}
                  </div>
                </div>
                <div className="wte-card-accent" aria-hidden="true" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
