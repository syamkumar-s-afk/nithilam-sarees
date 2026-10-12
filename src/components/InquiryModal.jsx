import React from 'react';
import WholesaleInquiryForm from './WholesaleInquiryForm';

export default function InquiryModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm transition-opacity overflow-y-auto">
      <div className="relative w-full max-w-xl bg-surface border border-outline-variant p-6 md:p-8 shadow-2xl transition-all duration-300 my-8">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <WholesaleInquiryForm 
          product={product} 
          variant="modal"
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
}
