import React, { useState } from 'react';

const WHATSAPP_NUMBER = '917339260199';
const DISPLAY_PHONE = '+91 73392 60199';

const COMMON_POSITIONS = [
  'Boutique Owner / Founder',
  'Purchasing Manager / Buyer',
  'Retail Store Partner',
  'Saree Reseller',
  'Sourcing Specialist',
  'Curator / Fashion Designer',
  'Other'
];

export default function WholesaleInquiryForm({ 
  product = null, 
  variant = 'sidebar', // 'sidebar' | 'section' | 'modal'
  title,
  subtitle,
  className = '',
  onSuccess
}) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    position: '',
    mobile: '',
    quantity: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageLines = [
      'Wholesale Order Inquiry — Nithilam Sarees',
      '----------------------------------------',
      `Name: ${formData.name.trim()}`,
      `Business: ${formData.businessName.trim()}`,
      `Role: ${formData.position.trim()}`,
      `Mobile: ${formData.mobile.trim()}`,
      `Estimated Quantity: ${formData.quantity.trim()} units`,
      product 
        ? `Saree: ${product.name} (SKU: ${product.sku || product.id || 'N/A'})` 
        : 'Scope: Wholesale Catalogue & Volume Pricing',
    ];

    if (formData.notes && formData.notes.trim()) {
      messageLines.push(`Notes: ${formData.notes.trim()}`);
    }

    messageLines.push('----------------------------------------');
    messageLines.push('Sent via Nithilam Sarees Showroom');

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const targetUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setWhatsappUrl(targetUrl);
    setIsSubmitted(true);

    if (onSuccess) {
      onSuccess(formData);
    }

    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Popup blocked, direct link available:', err);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      position: '',
      mobile: '',
      quantity: '',
      notes: ''
    });
    setIsSubmitted(false);
    setWhatsappUrl('');
  };

  const isSection = variant === 'section';

  return (
    <div 
      className={`bg-surface-container-lowest border border-outline-variant/30 ${
        isSection ? 'p-6 md:p-10' : 'p-6'
      } ${className}`}
    >
      {!isSubmitted ? (
        <div>
          {/* Form Header */}
          <div className="mb-6 border-b border-outline-variant/20 pb-4">
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-[0.24em] block mb-2 font-semibold">
              Wholesale Inquiries
            </span>

            <h3 className="text-xl md:text-2xl font-headline-md text-primary font-normal leading-snug">
              {title || (product ? `Inquire for "${product.name}"` : 'Request Wholesale Details')}
            </h3>

            <p className="text-body-md text-on-surface-variant mt-1.5 leading-relaxed text-sm">
              {subtitle || 'Share your store details to connect with our Erode workshop directly via WhatsApp.'}
            </p>

            {product && (
              <div className="mt-3.5 py-2.5 px-3.5 bg-surface-container-low border border-outline-variant/20 flex items-center justify-between text-xs">
                <span className="font-semibold text-primary truncate">
                  Selected: {product.name}
                </span>
                <span className="text-on-surface-variant font-mono text-[11px] shrink-0 ml-2">
                  SKU: {product.sku || product.id}
                </span>
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={isSection ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
              {/* Name */}
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor={`name-${variant}`}>
                  Your Name <span className="text-error">*</span>
                </label>
                <input
                  required
                  type="text"
                  id={`name-${variant}`}
                  name="name"
                  placeholder="e.g. Priya Sundaram"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-surface border border-outline-variant/40 focus:border-primary focus:ring-0 px-3.5 py-2.5 text-body-md font-body-md outline-none transition-colors"
                />
              </div>

              {/* Name of Business */}
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor={`businessName-${variant}`}>
                  Name of Business <span className="text-error">*</span>
                </label>
                <input
                  required
                  type="text"
                  id={`businessName-${variant}`}
                  name="businessName"
                  placeholder="e.g. Sundaram Silks & Boutique"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-surface border border-outline-variant/40 focus:border-primary focus:ring-0 px-3.5 py-2.5 text-body-md font-body-md outline-none transition-colors"
                />
              </div>
            </div>

            <div className={isSection ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
              {/* Position in Business */}
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor={`position-${variant}`}>
                  Position in the Business <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <input
                    required
                    list={`positions-list-${variant}`}
                    id={`position-${variant}`}
                    name="position"
                    placeholder="e.g. Boutique Owner / Purchasing Head"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full bg-surface border border-outline-variant/40 focus:border-primary focus:ring-0 px-3.5 py-2.5 text-body-md font-body-md outline-none transition-colors"
                  />
                  <datalist id={`positions-list-${variant}`}>
                    {COMMON_POSITIONS.map((pos) => (
                      <option key={pos} value={pos} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor={`mobile-${variant}`}>
                  Mobile Number (WhatsApp) <span className="text-error">*</span>
                </label>
                <input
                  required
                  type="tel"
                  id={`mobile-${variant}`}
                  name="mobile"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setFormData(prev => ({ ...prev, mobile: val }));
                  }}
                  className="w-full bg-surface border border-outline-variant/40 focus:border-primary focus:ring-0 px-3.5 py-2.5 text-body-md font-body-md outline-none transition-colors"
                />
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor={`quantity-${variant}`}>
                Approximate Quantity (Pieces) <span className="text-error">*</span>
              </label>
              <input
                required
                type="text"
                id={`quantity-${variant}`}
                name="quantity"
                placeholder="e.g. 10 sarees, 25 pieces, or 50+ bulk"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full bg-surface border border-outline-variant/40 focus:border-primary focus:ring-0 px-3.5 py-2.5 text-body-md font-body-md outline-none transition-colors"
              />
            </div>

            {/* Optional Specific Note */}
            <div>
              <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1" htmlFor={`notes-${variant}`}>
                Specific Requirements <span className="text-xs text-on-surface-variant/60 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id={`notes-${variant}`}
                name="notes"
                rows={isSection ? 3 : 2}
                placeholder="Specific colours, weave preferences, or delivery timeline"
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-surface border border-outline-variant/40 focus:border-primary focus:ring-0 px-3.5 py-2.5 text-body-md font-body-md outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 px-6 text-label-sm font-label-sm uppercase tracking-widest hover:bg-primary-container transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Wholesale Inquiry via WhatsApp</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <p className="text-xs text-on-surface-variant/70 text-center mt-3">
                Connects directly to our wholesale coordinator on <span className="font-semibold text-primary">{DISPLAY_PHONE}</span>
              </p>
            </div>
          </form>
        </div>
      ) : (
        /* Submission Success State */
        <div className="text-center py-6 px-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high text-primary mb-4 border border-outline-variant/30">
            <span className="material-symbols-outlined text-2xl text-primary">done</span>
          </div>

          <h3 className="text-xl md:text-2xl font-headline-md text-primary mb-2">
            Inquiry Prepared
          </h3>
          <p className="text-body-md text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed text-sm">
            Thank you, <strong className="text-on-surface">{formData.name}</strong> from <strong className="text-on-surface">{formData.businessName}</strong>. 
            Your inquiry is ready on WhatsApp with Nithilam Sarees (<span className="text-primary font-semibold">{DISPLAY_PHONE}</span>).
          </p>

          <div className="p-4 bg-surface-container-low border border-outline-variant/20 text-left max-w-md mx-auto mb-6 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Role:</span>
              <span className="font-semibold text-on-surface">{formData.position}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Mobile:</span>
              <span className="font-semibold text-on-surface">{formData.mobile}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Approx Quantity:</span>
              <span className="font-semibold text-on-surface">{formData.quantity}</span>
            </div>
            {product && (
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Saree:</span>
                <span className="font-semibold text-primary truncate max-w-[200px]">{product.name}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-6 py-3.5 text-label-sm font-label-sm uppercase tracking-wider transition-colors"
            >
              <span>Open WhatsApp Chat</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto border border-outline text-primary hover:border-primary px-5 py-3.5 text-label-sm font-label-sm uppercase tracking-wider transition-colors bg-transparent"
            >
              New Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
