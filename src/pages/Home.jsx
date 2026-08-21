import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-surface-variant overflow-hidden">
          <div 
            className="bg-cover bg-center w-full h-full opacity-60 mix-blend-multiply transition-transform duration-10000 scale-105" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4hz-Vi2A4eH25OX9pgd-EFZBxMisi0sj-VOimxteBOm4BDXxNDxaMViYrK8weydF_0Sjc-FHhm1XpriPg2zhG50UFtUyjKmNRLWev1N2J95De0pvyjRj0fyWlPAyA-buHCNNffzardo8bdlsvHMIGmZWjDFSB9pENzKun-d7WewSdQ3Q9B9oSLlrGlu486E6rOIFGnk2U8wWwlN1H2Ach6_-cKK1gjOpFAaxmB0653bJqRgS3Wg9_')" 
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-[0.2em] mb-stack-lg block">
            Premium B2B Traditional Sarees
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-stack-md leading-tight">
            Nithilam Heritage for Discerning Retailers
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
            Elevate your boutique's collection with our masterfully crafted, pure silk sarees featuring authentic gold Zari work. Exclusive wholesale access for international buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md justify-center mt-8">
            <Link 
              className="bg-primary text-on-primary px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-primary-container transition-colors duration-300 shadow-md" 
              to="/collections"
            >
              Explore Collections
            </Link>
            <Link 
              className="border border-outline text-primary px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:border-primary transition-colors duration-300 bg-surface/50 backdrop-blur-sm" 
              to="/collections"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section (Bento Grid) */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest block mb-2">ARTISANAL HERITAGE</span>
          <h2 className="text-headline-lg font-headline-lg text-primary mb-4">The Art of Hand-Weaving</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A meticulous process passed down through generations of master weavers and artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-auto md:h-[600px]">
          {/* Large Item */}
          <div className="md:col-span-2 relative group overflow-hidden border border-outline-variant/30 bg-surface-container-low p-8 flex flex-col justify-end min-h-[400px]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal" 
              style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBllQHgzZnURsKfao1GNCG0tNKOcrSzTr4AWLi9LtIb-VEsIo8F8EV1A9Vje8GUWTP9831JgN0d0OyHLwc75uw2tmY8gMtJGZb-9z6UjNttz_sugsaL3L-6nicl7f2CvqJCgw23LtP8p_HOIa7loMjhzd7U8NOxZLEm-uloWgn3P5kkO00zWHiONuN6X_bF71Y-0mC5VSht00yt6LZ2Zgw-aPCTb3_aQKkZVZlk25iy8I5UGYKfSbdC')" 
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
            <div className="relative z-10">
              <span className="text-label-sm text-primary uppercase tracking-wider block mb-1">TRADITIONAL METHOD</span>
              <h3 className="text-headline-md font-headline-md text-primary mb-2">Master Weavers</h3>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
                Each saree is a unique masterpiece, taking anywhere from weeks to months to complete on traditional handlooms.
              </p>
            </div>
          </div>

          {/* Stacked Items */}
          <div className="flex flex-col gap-gutter">
            
            {/* Top Stack Item */}
            <div className="flex-1 relative group overflow-hidden border border-outline-variant/30 bg-surface-container-low p-6 flex flex-col justify-end min-h-[250px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal" 
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSA-a-UYt5KLBJQUfhUy2sYkTV6h2GFsdE_1VEyAgo7fA4NShkfo1C4xKpEWRmQ9DsOhbJAWfpWkKdfJmPkDcV9MabSLHGDtyJdQG8IbUQQ3gjkqxlJB0xOGT1st1d5nXFJ9m1BmLAKFsnsV0c5sxH_7CPSNQ9pDeVkGcTEce_TmMxvxyG8DCYeKEMBvnhIm_0qqt7B331lhdjU87W102OZnTkncIuPCv24MIpN2xYzY9KyvZyU1cW')" 
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-label-sm text-primary uppercase tracking-wider block mb-0.5">EXQUISITE MATERIALS</span>
                <h3 className="text-headline-md font-headline-md text-primary text-xl mb-1">Pure Zari</h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Authentic metallic threads sourced for lasting brilliance and shine.
                </p>
              </div>
            </div>

            {/* Bottom Stack Item */}
            <div className="flex-1 relative group overflow-hidden border border-outline-variant/30 bg-surface-container-low p-6 flex flex-col justify-end min-h-[250px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal" 
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDToT14zDLJ5M5Nte30ktG9_Jyb_M16kGjpQAMsqsVdiLJosqaw1FaW0iyRS47CQ8MZAIq7yjiQnTVeHZqDLcTVW5iUHsCeSNYTXA24Cvy3IK5mi0Sug-06BEAnrlm5nrdJo9pprFuqKVuIymjdDgmDUre42I_jnfhN9rqgx6rKh9BIj-IaJZsKBx02wc5ZlpqmMc-zaaR2fzCeNzf2TbTkOw5Tj_PAv2biZYjrBU8NfCXDzKs0B33K')" 
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-label-sm text-primary uppercase tracking-wider block mb-0.5">HERITAGE PALETTE</span>
                <h3 className="text-headline-md font-headline-md text-primary text-xl mb-1">Natural Dyes</h3>
                <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                  Rich, fade-resistant colors achieved through time-honored organic techniques.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Showcase CTA Banner */}
      <section className="bg-primary text-on-primary px-margin-mobile md:px-margin-desktop py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-headline-lg font-headline-lg mb-4 text-white">Direct Sourcing for Premium Retail Partners</h2>
          <p className="text-body-md mb-8 opacity-90 max-w-xl mx-auto">
            We provide boutique owners, global retailers, and wholesale distributors direct access to the finest handlooms of India. Browse our collections and request detailed catalog information.
          </p>
          <Link 
            to="/collections" 
            className="inline-block bg-background text-primary border border-primary px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-300"
          >
            Explore B2B Catalogue
          </Link>
        </div>
      </section>
    </div>
  );
}
