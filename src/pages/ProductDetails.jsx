import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productsData';
import InquiryModal from '../components/InquiryModal';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  
  // States
  const [activeImage, setActiveImage] = useState('');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [lensStyle, setLensStyle] = useState({ display: 'none' });
  const [zoomRatio] = useState(2.5);

  // Refs for zoom
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Update active image when product changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.mainImage);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-container-max mx-auto px-margin-mobile py-20 text-center">
        <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
        <h2 className="text-headline-lg font-headline-lg text-primary mb-4">Saree Showcase Not Found</h2>
        <p className="text-body-md text-on-surface-variant mb-8 max-w-md mx-auto">
          The requested saree collection could not be located in our wholesale inventory.
        </p>
        <Link 
          to="/collections"
          className="bg-primary text-on-primary px-8 py-3 text-label-sm font-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  // Similar products (filter current out, pick up to 3 of the same category, or else any)
  const similarProducts = products
    .filter(p => p.id !== product.id)
    .sort((a, b) => (a.category === product.category ? -1 : 1))
    .slice(0, 3);

  // Zoom logic
  const handleMouseEnter = () => {
    setLensStyle(prev => ({ ...prev, display: 'block' }));
  };

  const handleMouseLeave = () => {
    setLensStyle({ display: 'none' });
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || !imageRef.current) return;

    const container = containerRef.current;
    const image = imageRef.current;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Lens dimensions are 160x160 as styled in CSS
    const lensWidth = 160;
    const lensHeight = 160;

    let lensX = x - lensWidth / 2;
    let lensY = y - lensHeight / 2;

    // Boundary constraints
    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > rect.width - lensWidth) lensX = rect.width - lensWidth;
    if (lensY > rect.height - lensHeight) lensY = rect.height - lensHeight;

    const bgX = -((lensX / rect.width) * (rect.width * zoomRatio - lensWidth));
    const bgY = -((lensY / rect.height) * (rect.height * zoomRatio - lensHeight));

    setLensStyle({
      display: 'block',
      left: `${lensX}px`,
      top: `${lensY}px`,
      backgroundImage: `url('${activeImage}')`,
      backgroundSize: `${rect.width * zoomRatio}px ${rect.height * zoomRatio}px`,
      backgroundPosition: `${bgX}px ${bgY}px`
    });
  };

  return (
    <main className="flex-1 px-margin-mobile md:px-margin-desktop py-stack-lg md:py-[60px] max-w-container-max mx-auto w-full page-transition">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant mb-stack-lg border-b border-outline-variant/10 pb-4">
        <Link className="hover:text-primary transition-colors" to="/collections">Wholesale Catalog</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="hover:text-primary transition-colors">{product.category} Silk</span>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-primary">{product.name}</span>
      </div>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-section-gap">
        
        {/* Left: Image Gallery (Span 7) */}
        <div className="lg:col-span-7 flex flex-col gap-stack-md">
          {/* Main Image with Fabric Zoom */}
          <div 
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="fabric-zoom-container bg-surface-container-lowest border border-outline-variant/20 p-stack-md aspect-[3/2] w-full relative select-none"
          >
            <img 
              ref={imageRef}
              src={activeImage} 
              alt={product.name}
              className="w-full h-full object-contain main-image"
            />
            {/* Interactive Zoom Lens */}
            <div className="fabric-zoom-lens" style={lensStyle}></div>
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 0 && (
            <div className="grid grid-cols-4 gap-stack-md h-28">
              {product.images.map((imgUrl, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`bg-surface-container-lowest border p-2 h-full w-full transition-all duration-300 ${
                    activeImage === imgUrl ? 'border-primary shadow-sm' : 'border-outline-variant/20 hover:border-outline-variant'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
              {/* Extra thumbnail for aesthetic padding if there is only 1 image */}
              {product.images.length === 1 && (
                <>
                  <div className="bg-surface-container-low/20 border border-dashed border-outline-variant/10 p-2 h-full w-full flex items-center justify-center text-xs text-on-surface-variant/40">
                    Saree drape view
                  </div>
                  <div className="bg-surface-container-low/20 border border-dashed border-outline-variant/10 p-2 h-full w-full flex items-center justify-center text-xs text-on-surface-variant/40">
                    Zari reverse weave
                  </div>
                  <div className="bg-surface-container-low/20 border border-dashed border-outline-variant/10 p-2 h-full w-full flex items-center justify-center text-xs text-on-surface-variant/40">
                    Artisan zoom
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right: Product Details & Pricing (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Title & Badges */}
            <div className="mb-stack-lg">
              <div className="flex gap-2 mb-stack-sm">
                <span className="inline-block px-2.5 py-1 bg-primary/5 text-primary text-label-sm font-label-sm uppercase">
                  Hand-woven
                </span>
              </div>
              <h1 className="text-headline-lg font-headline-lg text-on-surface mb-2">{product.name}</h1>
              <p className="text-body-md font-body-md text-on-surface-variant font-mono">SKU: {product.sku}</p>
            </div>
            
            <hr className="border-t border-outline-variant/30 mb-stack-lg" />

            {/* Description */}
            <div className="mb-stack-lg">
              <h3 className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-2">COLLECTION OVERVIEW</h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications (Bento style cards) */}
            <div className="mb-stack-lg">
              <h3 className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-2">TECHNICAL SPECIFICATIONS</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-outline-variant/20 bg-surface-container-low">
                  <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">Fabric</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.fabric}</span>
                </div>
                <div className="p-4 border border-outline-variant/20 bg-surface-container-low">
                  <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">Zari Type</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.zariType}</span>
                </div>
                <div className="p-4 border border-outline-variant/20 bg-surface-container-low">
                  <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">Weight</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.weight}</span>
                </div>
                <div className="p-4 border border-outline-variant/20 bg-surface-container-low">
                  <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">Colours Used</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.colors}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ordering Form (No active checkouts, purely wholesale catalog inquiry form trigger) */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 mt-4">
            <h4 className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-1">Wholesale Interest</h4>
            <p className="text-body-md text-on-surface-variant mb-4">
              We exclusively cater to wholesale and bulk B2B ordering. To request official pricing lists, custom weaving options, or shipping estimates, submit a wholesale RFQ.
            </p>
            <button 
              onClick={() => setShowInquiryModal(true)}
              className="w-full bg-primary text-on-primary py-4 px-6 text-label-sm font-label-sm uppercase tracking-widest hover:bg-primary-container transition-colors duration-300 shadow-sm"
            >
              Contact for Wholesale Inquiries
            </button>
          </div>
        </div>
      </div>

      {/* Similar Collections (High-end layout) */}
      <section className="mt-section-gap border-t border-outline-variant/20 pt-12">
        <div className="flex justify-between items-end mb-stack-lg pb-4">
          <h2 className="text-headline-md font-headline-md text-on-surface">Explore Similar Weaves</h2>
          <Link className="text-label-sm font-label-sm text-primary hover:underline decoration-1 flex items-center gap-1" to="/collections">
            View All Catalogue <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {similarProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group cursor-pointer block">
              <div className="bg-surface-container-lowest p-4 border border-outline-variant/10 mb-4 aspect-[3/2] w-full relative overflow-hidden">
                <img 
                  src={p.mainImage} 
                  alt={p.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h4 className="text-body-lg font-body-lg text-on-surface group-hover:text-primary transition-colors mb-1 font-semibold">
                {p.name}
              </h4>
              <p className="text-body-md font-body-md text-on-surface-variant font-mono text-sm mb-1">{p.sku}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Inquiry Modal Overlay */}
      {showInquiryModal && (
        <InquiryModal 
          product={product} 
          onClose={() => setShowInquiryModal(false)} 
        />
      )}
    </main>
  );
}
