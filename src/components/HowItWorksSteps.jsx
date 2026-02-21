import React from 'react';
import './HowItWorksSteps.css';

export default function HowItWorksSteps({ data }) {
  if (!data) return null;

  return (
    <section data-component="howItWorksSteps" className="hiw-section">
      {/* Decorative geometric background shapes */}
      <div className="hiw-geo hiw-geo--tl" aria-hidden="true" />
      <div className="hiw-geo hiw-geo--br" aria-hidden="true" />
      <div className="hiw-geo hiw-geo--mid" aria-hidden="true" />

      <div className="hiw-inner container mx-auto px-6">
        {/* Header */}
        <div className="hiw-header">
          {data.sectionTitle && (
            <div className="hiw-eyebrow" aria-hidden="true">
              <span className="hiw-eyebrow-line" />
              <span className="hiw-eyebrow-text">{data.sectionTitle}</span>
              <span className="hiw-eyebrow-line" />
            </div>
          )}
          {data.sectionTitle && (
            <h2 className="hiw-title font-heading">{data.sectionTitle}</h2>
          )}
          {data.sectionSubtitle && (
            <p className="hiw-subtitle font-body">{data.sectionSubtitle}</p>
          )}
        </div>

        {/* Steps */}
        {data.steps && Array.isArray(data.steps) && (
          <div className="hiw-steps">
            {data.steps.map((step, i) => (
              <div key={i} className="hiw-step-wrapper">
                {/* Connector line between steps */}
                {i < data.steps.length - 1 && (
                  <div className="hiw-connector" aria-hidden="true">
                    <div className="hiw-connector-line" />
                    <div className="hiw-connector-arrow" />
                  </div>
                )}
                <div className="hiw-card">
                  {/* Glass card inner */}
                  <div className="hiw-card-glow" aria-hidden="true" />
                  <div className="hiw-card-content">
                    <div className="hiw-step-num-wrap">
                      <span className="hiw-step-num font-heading" aria-label={`Step ${step.stepNumber}`}>
                        {step.stepNumber}
                      </span>
                      <div className="hiw-step-ring" aria-hidden="true" />
                    </div>
                    {step.title && (
                      <h3 className="hiw-step-title font-heading">{step.title}</h3>
                    )}
                    {step.description && (
                      <p className="hiw-step-desc font-body">{step.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
