import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm({ data }) {
  if (!data) return null;

  const [formState, setFormState] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section data-component="contactForm" className="contactForm-section">
      <div className="contactForm-bg-layer" aria-hidden="true">
        <div className="contactForm-orb contactForm-orb--1" />
        <div className="contactForm-orb contactForm-orb--2" />
        <div className="contactForm-orb contactForm-orb--3" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="contactForm-inner">
          {/* Left — intro panel */}
          <div className="contactForm-intro">
            <div className="contactForm-badge">Get In Touch</div>
            {data.formTitle && (
              <h2 className="contactForm-title font-heading">{data.formTitle}</h2>
            )}
            {data.formDescription && (
              <p className="contactForm-description font-body">{data.formDescription}</p>
            )}

            <div className="contactForm-trust">
              <div className="contactForm-trust-item">
                <span className="contactForm-trust-icon">⚡</span>
                <span>Fast response within 24 hours</span>
              </div>
              <div className="contactForm-trust-item">
                <span className="contactForm-trust-icon">🔒</span>
                <span>Your information is kept secure</span>
              </div>
              <div className="contactForm-trust-item">
                <span className="contactForm-trust-icon">🤝</span>
                <span>No obligation, no pressure</span>
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div className="contactForm-card">
            {submitted ? (
              <div className="contactForm-success">
                <div className="contactForm-success-icon">✓</div>
                <h3 className="font-heading">Message Sent!</h3>
                <p className="font-body">A DriveRate specialist will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contactForm-form" noValidate>
                {data.fields && data.fields.map((field, i) => (
                  <div key={i} className="contactForm-field">
                    <label className="contactForm-label font-body" htmlFor={field.fieldName}>
                      {field.label}
                    </label>

                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.fieldName}
                        name={field.fieldName}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={4}
                        className="contactForm-input contactForm-textarea font-body"
                        onChange={handleChange}
                        value={formState[field.fieldName] || ''}
                      />
                    ) : field.type === 'tel' ? (
                      <input
                        id={field.fieldName}
                        name={field.fieldName}
                        type="tel"
                        placeholder={field.placeholder}
                        required={field.required}
                        maxLength={14}
                        pattern="[\d\s\-\(\)\+]{10,14}"
                        className="contactForm-input font-body"
                        onChange={handleChange}
                        value={formState[field.fieldName] || ''}
                      />
                    ) : (
                      <input
                        id={field.fieldName}
                        name={field.fieldName}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="contactForm-input font-body"
                        onChange={handleChange}
                        value={formState[field.fieldName] || ''}
                      />
                    )}
                  </div>
                ))}

                {data.submitButtonLabel && (
                  <button type="submit" className="contactForm-submit font-heading">
                    {data.submitButtonLabel}
                    <span className="contactForm-submit-arrow">→</span>
                  </button>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
