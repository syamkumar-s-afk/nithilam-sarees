import React, { useState } from 'react';

export default function InquiryModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    estimatedQty: product?.moq || 5,
    message: `Hello, we are interested in placing a wholesale order inquiry for the "${product?.name}" (SKU: ${product?.sku}). Please provide shipping terms and custom pricing options.`
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    const ref = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-lg bg-surface border border-outline-variant p-8 md:p-10 shadow-2xl transition-all duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {!isSubmitted ? (
          <div>
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-[0.15em] block mb-2">B2B INQUIRY</span>
            <h2 className="text-headline-md font-headline-md text-primary mb-4">Request Wholesale Details</h2>
            
            {product && (
              <div className="mb-6 p-4 border border-outline-variant/30 bg-surface-container-low flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-on-surface text-sm">{product.name}</h4>
                  <p className="text-xs text-on-surface-variant">SKU: {product.sku} | {product.fabric}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-on-surface-variant block">MOQ</span>
                  <span className="text-sm font-bold text-primary">{product.moq} Units</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor="fullName">
                  Contact Name *
                </label>
                <input
                  required
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2.5 text-body-md font-body-md outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor="businessName">
                    Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2.5 text-body-md font-body-md outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor="email">
                    Corporate Email *
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2.5 text-body-md font-body-md outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2.5 text-body-md font-body-md outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor="estimatedQty">
                    Est. Quantity (units) *
                  </label>
                  <input
                    required
                    type="number"
                    min={product?.moq || 1}
                    id="estimatedQty"
                    name="estimatedQty"
                    value={formData.estimatedQty}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2.5 text-body-md font-body-md outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor="message">
                  Inquiry Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2.5 text-body-md font-body-md outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 px-6 text-label-sm font-label-sm uppercase tracking-widest hover:bg-primary-container transition-colors duration-300"
              >
                Submit Wholesale RFQ
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <span className="material-symbols-outlined text-6xl text-tertiary-container bg-tertiary/10 p-4 mb-4">
              check_circle
            </span>
            <h2 className="text-headline-md font-headline-md text-primary mb-2">Inquiry Submitted</h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              Thank you, {formData.fullName}. Your catalog inquiry for <strong>{product?.name}</strong> has been received. Our B2B accounts executive will contact you at <strong>{formData.email}</strong> within 24 hours.
            </p>
            
            <div className="p-4 border border-outline-variant/30 bg-surface-container-low max-w-sm mx-auto mb-6">
              <span className="text-label-sm text-on-surface-variant block">REFERENCE NUMBER</span>
              <span className="font-mono text-lg font-bold text-primary">{referenceId}</span>
            </div>

            <button
              onClick={onClose}
              className="border border-outline text-primary px-8 py-3 text-label-sm font-label-sm uppercase tracking-widest hover:border-primary transition-colors bg-transparent"
            >
              Back to Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
