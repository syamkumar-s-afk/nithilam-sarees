import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData';

const ITEMS_PER_PAGE = 12;

const getPageNumbers = (current, total) => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
};

export default function Catalogue() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // newest, price-high-low, price-low-high
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filter by Search Query (Name or SKU with flexible formatting)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const cleanQ = q.replace(/[\s\/\#\-\_]/g, '');
      result = result.filter(p => {
        const name = (p.name || '').toLowerCase();
        const sku = (p.sku || '').toLowerCase();
        const cleanName = name.replace(/[\s\/\#\-\_]/g, '');
        const cleanSku = sku.replace(/[\s\/\#\-\_]/g, '');
        return name.includes(q) || sku.includes(q) || (cleanQ && (cleanName.includes(cleanQ) || cleanSku.includes(cleanQ)));
      });
    }

    // Sort
    if (sortBy === 'price-high-low') {
      result = [...result].sort((a, b) => (b.pricingTiers?.[0]?.price || 0) - (a.pricingTiers?.[0]?.price || 0));
    } else if (sortBy === 'price-low-high') {
      result = [...result].sort((a, b) => (a.pricingTiers?.[0]?.price || 0) - (b.pricingTiers?.[0]?.price || 0));
    }
    // When sortBy === 'newest', maintain array order (newest arrivals at the top)

    return result;
  }, [searchQuery, sortBy]);

  // Reset to page 1 whenever search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredAndSortedProducts.length);
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPriceList = () => {
    alert("Wholesale details requested. Our team will follow up with current availability and pricing.");
  };

  return (
    <div className="flex-1 flex max-w-container-max mx-auto w-full page-transition">
      {/* SideNavBar / Navigation */}
      <aside className="hidden md:flex flex-col w-64 border-r border-outline-variant/20 bg-surface-container-low py-8 space-y-stack-md sticky top-[89px] h-[calc(100vh-89px)] overflow-y-auto">
        <div className="px-6 mb-4">
          <h2 className="text-headline-sm font-headline-md text-primary mb-1">B2B Portal</h2>
          <p className="text-label-sm font-label-sm text-on-surface-variant">Bulk & Wholesale Showroom</p>
        </div>
        
        <nav className="flex-1 flex flex-col gap-2 px-4">
          <div className="flex items-center gap-3 px-4 py-3 text-primary font-bold bg-primary-fixed/20 translate-x-1 transition-transform">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="text-label-sm font-label-sm">Exclusive Showcase</span>
          </div>

          <div className="px-4 py-4 mt-4 border-t border-outline-variant/20 text-xs text-on-surface-variant leading-relaxed">
            Authentic natural-dyed handloom collections from Erode artisans. Available exclusively for wholesale and retail partner orders.
          </div>
        </nav>

        <div className="px-6 mt-6 pb-8 border-t border-outline-variant/20 pt-6">
          <button 
            onClick={handleDownloadPriceList}
            className="w-full flex items-center justify-center gap-2 text-label-sm font-label-sm uppercase tracking-wider text-on-primary bg-primary px-4 py-4 hover:bg-primary-container transition-colors shadow-sm"
          >
            Download Price List
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full px-margin-mobile md:px-gutter py-4 md:py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12 gap-4 md:gap-6 border-b border-outline-variant/20 pb-4 md:pb-8">
          <div>
            <div className="flex items-center gap-3 mb-1 md:mb-2">
              <h1 className="text-2xl md:text-headline-lg font-headline-md md:font-headline-lg text-primary">Wholesale Catalogue</h1>
              <span className="text-xs uppercase tracking-wider text-on-surface-variant bg-surface-container px-2.5 py-1 font-semibold">
                Page {safeCurrentPage} of {totalPages}
              </span>
            </div>
            <p className="text-xs md:text-body-md font-body-md text-on-surface-variant">Curated traditional weaves for premium retail partners. B2B bulk inquiries only — not open for direct consumer retail.</p>
          </div>
          
          <div className="flex flex-row md:flex-row gap-2 w-full md:w-auto mt-2 md:mt-0">
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <span className="material-symbols-outlined absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base md:text-lg">
                search
              </span>
              <input 
                type="text"
                placeholder="Search name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 md:pl-10 pr-2 md:pr-4 py-1.5 md:py-2 bg-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 text-xs md:text-body-md font-body-md transition-colors outline-none placeholder:text-on-surface-variant/60"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-gutter">
              {paginatedProducts.map((product) => (
                <article key={product.id} className="group cursor-pointer flex flex-col h-full border border-outline-variant/10 p-2 md:p-4 bg-surface-container-lowest">
                  {/* Image Wrap */}
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/2] bg-surface-container-low mb-2 md:mb-4 overflow-hidden block">
                    <img 
                      src={product.mainImage} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>

                  {/* Meta details */}
                  <div className="flex flex-col gap-2 flex-1 justify-between">
                    <h3 className="text-sm md:text-xl font-bold md:font-headline-md text-primary">
                      {product.name}
                    </h3>
                    
                    <Link 
                      to={`/product/${product.id}`}
                      className="self-start text-[10px] md:text-label-sm font-label-sm text-primary uppercase tracking-wider border-b border-primary pb-0.5 hover:text-surface-tint transition-colors group-hover:border-surface-tint flex items-center gap-0.5 mt-auto"
                    >
                      View Images
                      <span className="material-symbols-outlined text-[10px] md:text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs md:text-sm text-on-surface-variant">
                  Showing <span className="font-semibold text-primary">{startIndex + 1}</span>–<span className="font-semibold text-primary">{endIndex}</span> of <span className="font-semibold text-primary">{filteredAndSortedProducts.length}</span> sarees
                </p>

                <nav aria-label="Catalogue pagination" className="flex items-center gap-1.5">
                  {/* Prev Button */}
                  <button
                    onClick={() => handlePageChange(safeCurrentPage - 1)}
                    disabled={safeCurrentPage === 1}
                    className={`flex items-center gap-1 px-3 py-2 text-xs md:text-sm uppercase tracking-wider font-semibold border transition-all ${
                      safeCurrentPage === 1
                        ? 'border-outline-variant/20 text-on-surface-variant/30 cursor-not-allowed bg-transparent'
                        : 'border-outline-variant/40 text-primary hover:bg-primary hover:text-on-primary hover:border-primary bg-surface-container-lowest'
                    }`}
                    aria-label="Previous page"
                  >
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers(safeCurrentPage, totalPages).map((item, idx) => {
                    if (item === '...') {
                      return (
                        <span key={`ellipsis-${idx}`} className="px-2 py-1 text-xs text-on-surface-variant/60 select-none">
                          ...
                        </span>
                      );
                    }
                    const pageNum = item;
                    const isActive = pageNum === safeCurrentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`min-w-[34px] md:min-w-[38px] h-9 px-2 text-xs md:text-sm font-semibold transition-all border ${
                          isActive
                            ? 'bg-primary text-on-primary border-primary shadow-sm'
                            : 'bg-surface-container-lowest text-primary border-outline-variant/40 hover:border-primary hover:bg-surface-container'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(safeCurrentPage + 1)}
                    disabled={safeCurrentPage === totalPages}
                    className={`flex items-center gap-1 px-3 py-2 text-xs md:text-sm uppercase tracking-wider font-semibold border transition-all ${
                      safeCurrentPage === totalPages
                        ? 'border-outline-variant/20 text-on-surface-variant/30 cursor-not-allowed bg-transparent'
                        : 'border-outline-variant/40 text-primary hover:bg-primary hover:text-on-primary hover:border-primary bg-surface-container-lowest'
                    }`}
                    aria-label="Next page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 border border-dashed border-outline-variant/30">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-4">
              filter_list_off
            </span>
            <h3 className="text-headline-md text-primary mb-2">No Sarees Found</h3>
            <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
              We couldn't find any sarees matching your active filters or search queries. Please try updating your search criteria.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
              }}
              className="mt-6 border border-primary text-primary px-6 py-2.5 text-label-sm font-label-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors bg-transparent"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
