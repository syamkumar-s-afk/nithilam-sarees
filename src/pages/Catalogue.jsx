import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData';

export default function Catalogue() {
  const [selectedFabrics, setSelectedFabrics] = useState({
    Kanjeevaram: true,
    Banarasi: true,
    Chanderi: true
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // newest, price-high-low, price-low-high

  const handleFabricToggle = (fabric) => {
    setSelectedFabrics(prev => ({
      ...prev,
      [fabric]: !prev[fabric]
    }));
  };

  const handleSelectAllFabrics = (val) => {
    setSelectedFabrics({
      Kanjeevaram: val,
      Banarasi: val,
      Chanderi: val
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filter by Fabric
    let result = products.filter(p => selectedFabrics[p.category]);

    // 2. Filter by Search Query (Name or SKU)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.sku.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      );
    }

    // 3. Sort
    result = [...result].sort((a, b) => {
      // For price comparison, use the minimum price from the pricing tiers
      const priceA = a.pricingTiers[0].price;
      const priceB = b.pricingTiers[0].price;

      if (sortBy === 'price-high-low') {
        return priceB - priceA;
      } else if (sortBy === 'price-low-high') {
        return priceA - priceB;
      } else {
        // 'newest' / default: sorting by SKU or order of id
        return a.sku.localeCompare(b.sku);
      }
    });

    return result;
  }, [selectedFabrics, searchQuery, sortBy]);

  const handleDownloadPriceList = () => {
    alert("Wholesale Price List requested. Our sales department will email the official PDF to your registered business email.");
  };

  return (
    <div className="flex-1 flex max-w-container-max mx-auto w-full page-transition">
      {/* SideNavBar / Advanced Filters */}
      <aside className="hidden md:flex flex-col w-64 border-r border-outline-variant/20 bg-surface-container-low py-8 space-y-stack-md sticky top-[89px] h-[calc(100vh-89px)] overflow-y-auto">
        <div className="px-6 mb-4">
          <h2 className="text-headline-sm font-headline-md text-primary mb-1">B2B Portal</h2>
          <p className="text-label-sm font-label-sm text-on-surface-variant">Premium Retailer Access</p>
        </div>
        
        <nav className="flex-1 flex flex-col gap-2 px-4">
          <div className="flex items-center gap-3 px-4 py-3 text-primary font-bold bg-primary-fixed/20 translate-x-1 transition-transform">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="text-label-sm font-label-sm">Exclusive Showcase</span>
          </div>
          
          <div className="px-4 py-2 mt-4 border-t border-outline-variant/20 pt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Fabric Filter</h3>
              <button 
                onClick={() => {
                  const allActive = Object.values(selectedFabrics).every(v => v);
                  handleSelectAllFabrics(!allActive);
                }}
                className="text-[10px] uppercase text-primary tracking-widest underline underline-offset-2 hover:opacity-85"
              >
                {Object.values(selectedFabrics).every(v => v) ? 'Clear All' : 'Select All'}
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              {Object.keys(selectedFabrics).map((fabric) => (
                <label key={fabric} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox"
                      checked={selectedFabrics[fabric]}
                      onChange={() => handleFabricToggle(fabric)}
                      className="peer sr-only"
                    />
                    <div className="w-4 h-4 border border-outline-variant rounded-none peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-[12px] text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                        check
                      </span>
                    </div>
                  </div>
                  <span className="text-body-md font-body-md group-hover:text-primary transition-colors">
                    {fabric}
                  </span>
                </label>
              ))}
            </div>
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
      <main className="flex-1 w-full px-margin-mobile md:px-gutter py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-outline-variant/20 pb-8">
          <div>
            <h1 className="text-headline-lg font-headline-lg text-primary mb-2">Wholesale Catalogue</h1>
            <p className="text-body-md font-body-md text-on-surface-variant">Curated traditional weaves for premium retail partners.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                search
              </span>
              <input 
                type="text"
                placeholder="Search by SKU or weave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 text-body-md font-body-md transition-colors outline-none placeholder:text-on-surface-variant/60"
              />
            </div>
            
            {/* Sort Select */}
            <div className="relative min-w-[180px]">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-2 bg-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 text-body-md font-body-md text-primary cursor-pointer outline-none"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="price-high-low">Sort by: Price (High-Low)</option>
                <option value="price-low-high">Sort by: Price (Low-High)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-lg">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredAndSortedProducts.map((product) => (
              <article key={product.id} className="group cursor-pointer flex flex-col h-full border border-outline-variant/10 p-4 bg-surface-container-lowest">
                {/* Image Wrap */}
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-surface-container-low mb-4 overflow-hidden block">
                  <img 
                    src={product.mainImage} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.stockStatus && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider border ${
                        product.stockStatus === 'In Stock' 
                          ? 'bg-tertiary/10 text-tertiary border-tertiary/20'
                          : product.stockStatus === 'Pre-order'
                          ? 'bg-secondary/10 text-secondary border-secondary/20'
                          : 'bg-error/10 text-error border-error/20'
                      }`}>
                        {product.stockStatus}
                      </span>
                    </div>
                  )}
                </Link>

                {/* Meta details */}
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">
                    {product.category}
                  </span>
                  <h3 className="text-headline-md font-headline-md text-primary text-xl truncate">
                    {product.name}
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm flex-1">
                    {product.fabric}, {product.zariType}
                  </p>
                  <div className="text-xs font-mono text-on-surface-variant/80 mt-1">
                    SKU: {product.sku}
                  </div>
                  <div className="text-sm font-semibold text-primary mt-2 mb-3">
                    Wholesale: {product.priceRange}
                  </div>
                  
                  <Link 
                    to={`/product/${product.id}`}
                    className="self-start text-label-sm font-label-sm text-primary uppercase tracking-wider border-b border-primary pb-0.5 hover:text-surface-tint transition-colors group-hover:border-surface-tint flex items-center gap-1 mt-auto"
                  >
                    Wholesale Details
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
                handleSelectAllFabrics(true);
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
