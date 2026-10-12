import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productsData';
import InquiryModal from '../components/InquiryModal';
import WholesaleInquiryForm from '../components/WholesaleInquiryForm';

const isMannequinImage = (imageUrl = '') => /mannequin|model|dress-form/i.test(imageUrl);
const getProductImageFitClass = (imageUrl) => (
  isMannequinImage(imageUrl) ? 'object-contain' : 'object-cover'
);

export default function ProductDetails() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id || '');
  const product = products.find(p => 
    p.id === id || 
    p.id === decodedId || 
    p.alias === id || 
    p.alias === decodedId || 
    p.sku === id || 
    p.sku === decodedId || 
    p.legacySku === id || 
    p.legacySku === decodedId || 
    p.name.toLowerCase() === decodedId.toLowerCase()
  );
  
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

  // Similar products (filter current out, pick up to 3)
  const similarProducts = products
    .filter(p => p.id !== product.id)
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
              className={`w-full h-full ${getProductImageFitClass(activeImage)} main-image`}
            />
            {/* Interactive Zoom Lens */}
            <div className="fabric-zoom-lens" style={lensStyle}></div>
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-stack-md">
              {product.images.map((imgUrl, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`bg-surface-container-lowest border p-2 aspect-[3/2] w-full overflow-hidden transition-all duration-300 ${
                    activeImage === imgUrl ? 'border-primary shadow-sm' : 'border-outline-variant/20 hover:border-outline-variant'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className={`w-full h-full ${getProductImageFitClass(imgUrl)}`} />
                </button>
              ))}
              {/* Extra thumbnail for aesthetic padding if there is only 1 image */}
              {product.images.length === 1 && (
                <>
                  <div className="bg-surface-container-low/20 border border-dashed border-outline-variant/10 p-2 aspect-[3/2] w-full flex items-center justify-center text-xs text-on-surface-variant/40">
                    Saree drape view
                  </div>
                  <div className="bg-surface-container-low/20 border border-dashed border-outline-variant/10 p-2 aspect-[3/2] w-full flex items-center justify-center text-xs text-on-surface-variant/40">
                    Zari reverse weave
                  </div>
                  <div className="bg-surface-container-low/20 border border-dashed border-outline-variant/10 p-2 aspect-[3/2] w-full flex items-center justify-center text-xs text-on-surface-variant/40">
                    Artisan zoom
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right: Product Details & Inquiry (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="mb-stack-lg">
              <h1 className="text-headline-lg font-headline-lg text-on-surface mb-2">{product.name}</h1>
            </div>
            
            <hr className="border-t border-outline-variant/30 mb-stack-lg" />

            <div className="mb-stack-lg grid grid-cols-2 gap-4">
              <div className="p-4 border border-outline-variant/20 bg-surface-container-low">
                <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">Images</span>
                <span className="text-body-md font-body-md text-on-surface font-semibold">{product.images.length}</span>
              </div>
              <div className="p-4 border border-outline-variant/20 bg-surface-container-low">
                <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">Availability</span>
                <span className="text-body-md font-body-md text-on-surface font-semibold">{product.stockStatus}</span>
              </div>
            </div>
          </div>

          {/* Embedded Wholesale Inquiry Form at the side of product page */}
          <div className="mt-4">
            <WholesaleInquiryForm 
              product={product}
              variant="sidebar"
              title={`Inquire for "${product.name}"`}
              subtitle="Submit your business details to connect directly with our wholesale team on WhatsApp (+91 73392 60199)."
            />
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
                  className={`w-full h-full ${getProductImageFitClass(p.mainImage)} group-hover:scale-105 transition-transform duration-700`}
                  loading="lazy"
                />
              </div>
              <h4 className="text-body-lg font-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
                {p.name}
              </h4>
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
