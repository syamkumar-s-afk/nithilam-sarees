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

export default function Home() {
  return (
    <div className="page-transition">
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(28,22,18,0.92)_0%,_rgba(61,44,31,0.82)_38%,_rgba(122,98,71,0.52)_100%),url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,226,220,0.10),_transparent_46%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(17,14,11,0.12),_rgba(17,14,11,0.28))]" />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32 w-full">
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
              href="#stories"
              className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 text-label-sm font-label-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Read Brand Stories
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8">
          <div className="bg-surface-container-low border border-outline-variant/20 p-8 md:p-10">
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
        className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-16 md:py-20 border-y border-outline-variant/20"
      >
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl mb-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {storyCards.map((story) => (
              <article
                key={story.slug}
                className="flex flex-col bg-surface-container-lowest border border-outline-variant/20 p-7"
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

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 md:p-10">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-4">
              Direction
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-6">
              A brand built around natural dyeing, modern retail relevance, and lasting trust.
            </h2>
            <div className="space-y-6">
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

          <div className="bg-primary text-on-primary p-8 md:p-10">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-white/80 block mb-4">
              Why Nithilam
            </span>
            <h2 className="text-headline-lg font-headline-lg text-white mb-6">
              Natural dyeing, thoughtful craft, and a story your customers can feel.
            </h2>
            <div className="space-y-5">
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

      <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-16 md:py-20 border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="bg-surface-container-lowest border border-outline-variant/20 p-6"
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

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 md:p-10">
            <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-primary block mb-4">
              Retail Value
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-6">
              A concise partner proposition for boutiques and wholesale buyers.
            </h2>
            <div className="space-y-5">
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

          <div className="space-y-6">
            <div className="bg-surface-container-low border border-outline-variant/20 p-7">
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

            <div className="bg-surface-container-low border border-outline-variant/20 p-7">
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

      <section className="bg-primary text-on-primary px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="max-w-container-max mx-auto text-center">
          <span className="text-label-sm font-label-sm uppercase tracking-[0.24em] text-white/70 block mb-4">
            Wholesale Next Step
          </span>
          <h2 className="text-headline-lg font-headline-lg text-white mb-4">
            Explore the catalogue, then use the detailed stories to support the brand conversation.
          </h2>
          <p className="text-body-lg text-white/82 max-w-3xl mx-auto leading-relaxed mb-8">
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
