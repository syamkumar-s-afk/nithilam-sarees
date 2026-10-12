import React from 'react';
import { Link } from 'react-router-dom';
import {
  audienceContent,
  pillars,
  purposeContent,
  storyCards,
  taglineContent,
  valueProposition,
  voiceContent,
} from '../data/brandContent';
import WholesaleInquiryForm from '../components/WholesaleInquiryForm';
import { products } from '../data/productsData';

export default function Home() {
  return (
    <div className="page-transition">
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(28,22,18,0.92)_0%,_rgba(61,44,31,0.82)_38%,_rgba(122,98,71,0.52)_100%),url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,226,220,0.10),_transparent_46%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(17,14,11,0.12),_rgba(17,14,11,0.28))]" />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-32 w-full">
          <span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-[0.28em] mb-5 block">
            Natural Dyed Luxury for Conscious Living
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-white max-w-5xl leading-tight mb-6">
            A complete Nithilam story rooted in botanical colour, artisan dignity, and clean-water craft.
          </h1>
          <p className="text-body-lg font-body-lg text-white/90 max-w-3xl leading-relaxed mb-10">
            Discover a brand shaped by botanical colour, artisan dignity, and a more thoughtful
            way of making textiles in Erode.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center bg-background text-primary px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors"
            >
              Explore Collections
            </Link>
            <a
              href="#wholesale-inquiry"
              className="inline-flex items-center justify-center border border-white/60 bg-white/10 hover:bg-white/20 text-white px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest backdrop-blur-sm transition-colors"
            >
              Wholesale Inquiries
            </a>
            <a
              href="#stories"
              className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Read Brand Stories
            </a>
          </div>
        </div>
      </section>

      {/* Latest Weaves Showcase */}
      <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-12 md:py-20 border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
            <div>
              <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-2 font-semibold">
                Latest Additions
              </span>
              <h2 className="text-2xl md:text-headline-lg font-headline-md text-primary">
                New Saree Weaves
              </h2>
            </div>
            <Link
              to="/collections"
              className="text-label-sm font-label-sm uppercase tracking-widest text-primary border-b border-primary pb-0.5 hover:text-surface-tint hover:border-surface-tint transition-colors flex items-center gap-1"
            >
              Explore Full Catalogue ({products.length} Sarees)
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group cursor-pointer flex flex-col bg-surface-container-lowest border border-outline-variant/20 p-3 md:p-4 hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[3/2] bg-surface-container-low mb-3 overflow-hidden">
                  <img
                    src={p.mainImage}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-primary truncate mb-1">
                  {p.name}
                </h4>
                <span className="text-xs text-on-surface-variant flex items-center gap-1 group-hover:text-primary transition-colors mt-auto">
                  View Saree <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4 md:gap-8">
          <div className="bg-surface-container-low border border-outline-variant/20 p-6 md:p-10">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-4">
              Core Purpose
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-5">
              {purposeContent.title}
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {purposeContent.purpose}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant/20 p-6">
              <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary block mb-3">
                Vision
              </span>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Natural dyeing should become a respected benchmark for wellness-first luxury.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/20 p-6">
              <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary block mb-3">
                Mission
              </span>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Protect craft, prove premium quality, and preserve cleaner textile ecosystems.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/20 p-6">
              <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary block mb-3">
                Retail Promise
              </span>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Give boutiques a richer story than generic synthetic sarees can offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stories"
        className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-8 md:py-20 border-y border-outline-variant/20"
      >
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl mb-6 md:mb-12">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-3">
              Brand Story
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
              A short introduction here, with the full narrative available only when needed.
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              These three pages give structure to the Nithilam brand story without turning the
              homepage into a long document.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {storyCards.map((story) => (
              <article
                key={story.slug}
                className="flex flex-col bg-surface-container-lowest border border-outline-variant/20 p-5 md:p-7"
              >
                <span className="text-label-sm font-label-sm uppercase tracking-[0.18em] text-primary block mb-3">
                  {story.eyebrow}
                </span>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
                  {story.title}
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-6">
                  {story.summary}
                </p>
                <Link
                  to={`/stories/${story.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-label-sm font-label-sm uppercase tracking-widest text-primary border-b border-primary pb-1 self-start hover:text-surface-tint hover:border-surface-tint transition-colors"
                >
                  Read Story
                  <span className="material-symbols-outlined text-base">north_east</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 md:gap-8">
          <div className="bg-surface-container-lowest border border-outline-variant/20 p-6 md:p-10">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-4">
              Direction
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-6">
              A brand built around natural dyeing, modern retail relevance, and lasting trust.
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-body-lg font-semibold text-on-surface mb-3">Vision</h3>
                <div className="space-y-3">
                  {purposeContent.vision.map((item) => (
                    <p key={item} className="text-body-md text-on-surface-variant leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-on-surface mb-3">Mission</h3>
                <div className="space-y-3">
                  {purposeContent.mission.map((item) => (
                    <p key={item} className="text-body-md text-on-surface-variant leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-on-primary p-6 md:p-10">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-white/80 block mb-4">
              Why Nithilam
            </span>
            <h2 className="text-headline-lg font-headline-lg text-white mb-6">
              Natural dyeing, thoughtful craft, and a story your customers can feel.
            </h2>
            <div className="space-y-4 md:space-y-5">
              <div>
                <span className="text-label-sm uppercase tracking-[0.2em] text-white/70 block mb-2">
                  Skin-Safe Comfort
                </span>
                <p className="text-body-lg leading-relaxed">
                  Sarees designed with breathable fabrics, botanical colour, and everyday ease in
                  mind.
                </p>
              </div>
              <div>
                <span className="text-label-sm uppercase tracking-[0.2em] text-white/70 block mb-2">
                  Responsible Craft
                </span>
                <p className="text-body-lg leading-relaxed">
                  A slower process that values artisan skill, safer workspaces, and cleaner dyeing
                  practices.
                </p>
              </div>
              <div>
                <span className="text-label-sm uppercase tracking-[0.2em] text-white/70 block mb-2">
                  Retail Relevance
                </span>
                <p className="text-body-md text-white/84 leading-relaxed">
                  For boutiques and wholesale partners, Nithilam offers a refined product story
                  rooted in quality, trust, and modern conscious luxury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-8 md:py-20 border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl mb-6 md:mb-12">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-3">
              Brand Pillars
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
              Four ideas hold the entire Nithilam promise together.
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              These pillars shape how Nithilam brings together craft, responsibility, and product
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="bg-surface-container-lowest border border-outline-variant/20 p-5 md:p-6"
              >
                <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
                  {pillar.title}
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-4 md:gap-8">
          <div className="bg-surface-container-lowest border border-outline-variant/20 p-6 md:p-10">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-4">
              Retail Value
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-6">
              A concise partner proposition for boutiques and wholesale buyers.
            </h2>
            <div className="space-y-3.5 md:space-y-5">
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {valueProposition.partner}
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {valueProposition.offering}
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {valueProposition.businessImpact}
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-surface-container-low border border-outline-variant/20 p-5 md:p-7">
              <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-4">
                Audience
              </span>
              <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                {audienceContent.primary}
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {audienceContent.wearer}
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/20 p-5 md:p-7">
              <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-4">
                Brand Voice
              </span>
              <div className="space-y-3 mb-5">
                {voiceContent.personality.map((item) => (
                  <p key={item} className="text-body-md text-on-surface-variant leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {voiceContent.tone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Wholesale & Boutique Inquiry Section */}
      <section 
        id="wholesale-inquiry"
        className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-12 md:py-24 border-t border-outline-variant/30 scroll-mt-20"
      >
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Context & B2B Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-3">
                  Direct B2B Sourcing
                </span>
                <h2 className="text-2xl md:text-headline-lg font-headline-lg text-primary mb-4 leading-tight">
                  Partner with Nithilam for authentic botanical sarees.
                </h2>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  We supply conscious boutiques, organic apparel stores, and exhibition curators with certified botanical-dyed sarees woven and processed ethically in Erode.
                </p>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/20 p-6 space-y-4">
                <h4 className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-bold">
                  What Retail Partners Receive:
                </h4>
                <ul className="space-y-4 text-body-md text-on-surface-variant text-sm divide-y divide-outline-variant/15">
                  <li className="flex items-start gap-3.5 pt-3 first:pt-0">
                    <span className="font-headline-md text-primary font-semibold text-sm shrink-0 mt-0.5">01</span>
                    <div>
                      <strong className="text-on-surface block font-semibold">Direct Artisan Pricing</strong>
                      <span>Transparent wholesale tiers direct from our Erode weaving cluster without intermediaries.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 pt-3">
                    <span className="font-headline-md text-primary font-semibold text-sm shrink-0 mt-0.5">02</span>
                    <div>
                      <strong className="text-on-surface block font-semibold">Boutique Trial Lots</strong>
                      <span>Flexible initial curation batches (5–10 sarees) for boutique partner testing.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 pt-3">
                    <span className="font-headline-md text-primary font-semibold text-sm shrink-0 mt-0.5">03</span>
                    <div>
                      <strong className="text-on-surface block font-semibold">High-Resolution Drape Media</strong>
                      <span>Digital lookbook assets and botanical dye certification notes for client presentations.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 pt-3">
                    <span className="font-headline-md text-primary font-semibold text-sm shrink-0 mt-0.5">04</span>
                    <div>
                      <strong className="text-on-surface block font-semibold">Direct Trade Coordinator</strong>
                      <span>Real-time WhatsApp support on <span className="text-primary font-semibold">+91 73392 60199</span>.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-primary text-on-primary border border-primary-container">
                <span className="text-label-sm uppercase tracking-widest text-white/70 block mb-1">Direct Wholesale Coordinator</span>
                <p className="text-sm text-white/90">
                  Call or WhatsApp directly: <strong className="text-white">+91 73392 60199</strong>
                </p>
              </div>
            </div>

            {/* Right Column: Embedded Form */}
            <div className="lg:col-span-7">
              <WholesaleInquiryForm 
                variant="section"
                title="Wholesale & Bulk Orders Inquiry"
                subtitle="Fill in your details below to instantly connect with our wholesale team on WhatsApp (+91 73392 60199)."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-on-primary px-margin-mobile md:px-margin-desktop py-8 md:py-20">
        <div className="max-w-container-max mx-auto text-center">
          <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-white/70 block mb-4">
            Wholesale Next Step
          </span>
          <h2 className="text-headline-lg font-headline-lg text-white mb-4">
            Explore the catalogue, then use the detailed stories to support the brand conversation.
          </h2>
          <p className="text-body-lg text-white/82 max-w-3xl mx-auto leading-relaxed mb-5 md:mb-8">
            Explore the collection, understand the craft, and discover the values behind the
            brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center bg-background text-primary px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-surface-container transition-colors"
            >
              Browse Catalogue
            </Link>
            <Link
              to="/stories/the-nithilam-story"
              className="inline-flex items-center justify-center border border-white/35 text-white px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Open First Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
