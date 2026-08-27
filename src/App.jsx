import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ProductDetails from './pages/ProductDetails';
import StoryDetail from './pages/StoryDetail';

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
              to="/" 
              className={`font-medium transition-colors duration-300 text-label-sm font-label-sm uppercase tracking-widest ${
                isLinkActive('/') 
                  ? 'text-primary border-b-2 border-primary pb-1 font-bold' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Home
            </Link>

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

            <Link 
              to="/stories/the-nithilam-story"
              className={`font-medium transition-colors duration-300 text-label-sm font-label-sm uppercase tracking-widest ${
                location.pathname.startsWith('/stories')
                  ? 'text-primary border-b-2 border-primary pb-1 font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Our Story
            </Link>
            
            <a 
              href="/#stories"
              className="text-on-surface-variant hover:text-primary font-medium transition-colors duration-300 text-label-sm font-label-sm uppercase tracking-widest"
            >
              View More
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
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-body-lg uppercase font-semibold py-2 ${
                isLinkActive('/') ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/collections" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-body-lg uppercase font-semibold py-2 ${
                isLinkActive('/collections') ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              Wholesale Catalog
            </Link>
            <Link 
              to="/stories/the-nithilam-story"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-body-lg uppercase font-semibold py-2 ${
                location.pathname.startsWith('/stories') ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              Our Story
            </Link>
            <a 
              href="/#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-body-lg uppercase font-semibold text-on-surface-variant py-2"
            >
              View More
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
          <Route path="/stories/:slug" element={<StoryDetail />} />
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
              Natural-dyed sarees for conscious retail partners, built around botanical colour, artisan dignity, and a cleaner textile story from Erode.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-sm font-label-sm text-on-surface uppercase tracking-widest mb-2 font-bold">Discover</h4>
            <Link
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4"
              to="/stories/the-nithilam-story"
            >
              Brand Story
            </Link>
            <a
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4"
              href="/#stories"
            >
              Story Summaries
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-sm font-label-sm text-on-surface uppercase tracking-widest mb-2 font-bold font-sans">Wholesale Focus</h4>
            <Link
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4"
              to="/collections"
            >
              Browse Catalogue
            </Link>
            <Link
              className="text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4"
              to="/stories/the-founders-journey"
            >
              Founder’s Promise
            </Link>
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
