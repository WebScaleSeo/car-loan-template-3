import React from 'react';
import './CustomerTestimonials.css';

export default function CustomerTestimonials({ data }) {
  if (!data) return null;

  return (
    <section data-component="customerTestimonials" className="ct-section">
      {/* Dot grid overlay */}
      <div className="ct-dot-grid" aria-hidden="true" />
      {/* Decorative radial glows */}
      <div className="ct-glow ct-glow--left" aria-hidden="true" />
      <div className="ct-glow ct-glow--right" aria-hidden="true" />

      <div className="ct-container">
        {/* Header */}
        {data.sectionTitle && (
          <div className="ct-header">
            <span className="ct-eyebrow">Customer Stories</span>
            <h2 className="ct-title">{data.sectionTitle}</h2>
            <div className="ct-title-underline" />
          </div>
        )}

        {/* Testimonial Cards */}
        {data.testimonials && Array.isArray(data.testimonials) && (
          <div className="ct-grid">
            {data.testimonials.map((item, i) => (
              <div
                key={i}
                className="ct-card"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Gradient border glow layer */}
                <div className="ct-card-glow" aria-hidden="true" />

                <div className="ct-card-inner">
                  {/* Large decorative quote mark */}
                  <span className="ct-quote-mark" aria-hidden="true">&ldquo;</span>

                  {/* Stars */}
                  <div className="ct-stars" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="ct-star" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote text */}
                  {item.quote && (
                    <blockquote className="ct-quote">
                      {item.quote}
                    </blockquote>
                  )}

                  {/* Customer info */}
                  <div className="ct-customer">
                    <div className="ct-avatar" aria-hidden="true">
                      {item.customerName ? item.customerName.charAt(0) : '?'}
                    </div>
                    <div className="ct-customer-info">
                      {item.customerName && (
                        <span className="ct-customer-name">{item.customerName}</span>
                      )}
                      {item.context && (
                        <span className="ct-customer-context">{item.context}</span>
                      )}
                    </div>
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
