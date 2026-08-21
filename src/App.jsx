import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ProductDetails from './pages/ProductDetails';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainAppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md text-on-surface bg-background">
      <ScrollToTop />
      
      {/* Header */}
      <header className="bg-surface border-b border-outline-variant/30 sticky top-0 z-50 transition-all duration-300 w-full">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-headline-md font-headline-md font-black text-primary tracking-tight"
          >
            Nithilam Sarees
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center h-full">
            <Link 
              to="/collections" 
              className={`font-medium transition-colors duration-300 text-label-sm font-label-sm uppercase tracking-widest ${
                isLinkActive('/collections') 
                  ? 'text-primary border-b-2 border-primary pb-1 font-bold' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Wholesale Catalog
            </Link>

            <a 
              href="javascript:void(0)" 
              onClick={() => alert("Our heritage and weaving craftsmanship highlights are detailed on the home page.")}
              className="text-on-surface-variant hover:text-primary font-medium transition-colors duration-300 text-label-sm font-label-sm uppercase tracking-widest"
            >
              Craftsmanship
            </a>
            
            <a 
              href="javascript:void(0)" 
              onClick={() => alert("Nithilam Sarees represents three generations of traditional weavers based in Southern India. We support local handloom weaver co-operatives.")}
              className="text-on-surface-variant hover:text-primary font-medium transition-colors duration-300 text-label-sm font-label-sm uppercase tracking-widest"
            >
              Our Story
            </a>
          </nav>

          {/* Actions & Mobile Burger */}
          <div className="flex items-center gap-6">
            <button 
              onClick={handleMobileMenuToggle}
              className="md:hidden text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-outline-variant/30 bg-surface px-margin-mobile py-6 flex flex-col gap-4 animate-fade-in shadow-lg">
            <Link 
              to="/collections" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-body-lg uppercase font-semibold py-2 ${
                isLinkActive('/collections') ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              Wholesale Catalog
            </Link>
            <a 
              href="javascript:void(0)"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Our weaving craftsmanship highlights are detailed on the home page.");
              }}
              className="text-body-lg uppercase font-semibold text-on-surface-variant py-2"
            >
              Craftsmanship
            </a>
            <a 
              href="javascript:void(0)"
              onClick={() => {
                setMobileMenuOpen(false);
                alert("Nithilam Sarees represents three generations of traditional weavers based in Southern India.");
              }}
              className="text-body-lg uppercase font-semibold text-on-surface-variant py-2"
            >
              Our Story
            </a>
            <div className="border-t border-outline-variant/20 pt-4 mt-2">
              <span className="text-label-sm text-primary uppercase block mb-1">Direct Wholesale Access</span>
              <p className="text-xs text-on-surface-variant">Saree collections are for wholesale retail demonstration and bulk B2B ordering queries.</p>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Catalogue />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={
            <div className="text-center py-20 px-4">
              <span className="material-symbols-outlined text-6xl text-primary mb-4">error</span>
              <h2 className="text-headline-lg font-headline-lg text-primary mb-4">Page Not Found</h2>
              <p className="text-body-md text-on-surface-variant mb-8 max-w-sm mx-auto">
                The requested URL route was not found in our catalog.
              </p>
              <Link to="/" className="bg-primary text-on-primary px-8 py-3 text-label-sm font-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors">
                Go to Home Page
              </Link>
            </div>
          } />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t border-outline-variant/30 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
          <div className="md:col-span-2">
            <div className="text-headline-md font-headline-md text-primary mb-4">Nithilam Sarees</div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-sm">
              Providing premium, hand-woven luxury textiles and sarees to boutique owners, global retailers, and wholesale distributors. Preserving traditional craftsmanship.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-sm font-label-sm text-on-surface uppercase tracking-widest mb-2 font-bold">Legal & Wholesale</h4>
            <a 
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4" 
              href="javascript:void(0)"
              onClick={() => alert("Wholesale purchases are subject to verification of retail status. Catalog details are supplied upon approval.")}
            >
              Wholesale Terms
            </a>
            <a 
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4" 
              href="javascript:void(0)"
              onClick={() => alert("We ship internationally via DHL Express, FedEx, and Air Cargo. Buyers are responsible for customs clearances and local duties.")}
            >
              Shipping Policy
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-sm font-label-sm text-on-surface uppercase tracking-widest mb-2 font-bold font-sans">Support & Contact</h4>
            <a 
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4" 
              href="javascript:void(0)"
              onClick={() => alert("All pieces carry Silk Mark certifications where applicable. We guarantee 100% genuine silver/gold zari threads as specified in our catalog specs.")}
            >
              Quality Guarantee
            </a>
            <a 
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4" 
              href="javascript:void(0)"
              onClick={() => alert("Contact our wholesale team via email at: trade@nithilamsarees.com or phone: +91 44 2480 0000")}
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="px-margin-mobile md:px-margin-desktop py-6 border-t border-outline-variant/20 max-w-container-max mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-on-surface-variant/60 gap-4">
          <span>© 2024 Nithilam Sarees. B2B Wholesale & Bulk Orders Only. All Rights Reserved.</span>
          <span className="text-xs uppercase tracking-widest font-semibold text-primary/70">Trade Showroom • Non-Transactional</span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainAppShell />
    </Router>
  );
}
