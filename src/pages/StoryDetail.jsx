import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { storyCards, storyDetails } from '../data/brandContent';

export default function StoryDetail() {
  const { slug } = useParams();
  const story = storyDetails[slug];
  const card = storyCards.find((item) => item.slug === slug);

  if (!story || !card) {
    return (
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 text-center">
        <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
        <h1 className="text-headline-lg font-headline-lg text-primary mb-4">Story Not Found</h1>
        <p className="text-body-md text-on-surface-variant max-w-xl mx-auto mb-8">
          The detailed Nithilam story you requested is not available right now.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 text-label-sm font-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors"
        >
          Return Home
        </Link>
      </main>
    );
  }

  const relatedStories = storyCards.filter((item) => item.slug !== slug);

  return (
    <main className="page-transition">
      <section className="relative overflow-hidden bg-surface-container-low border-b border-outline-variant/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(61,0,12,0.08),_transparent_45%),linear-gradient(135deg,_rgba(252,249,243,1)_0%,_rgba(229,226,220,0.65)_100%)]" />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-label-sm font-label-sm uppercase tracking-widest text-primary mb-4 md:mb-8 hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-base">west</span>
            Back to Home
          </Link>
          <span className="text-label-sm font-label-sm uppercase tracking-[0.22em] text-primary block mb-4">
            {story.eyebrow}
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary max-w-4xl leading-tight mb-6">
            {story.title}
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
            {story.intro}
          </p>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6 lg:gap-10 items-start">
          <div className="space-y-6 md:space-y-10">
            {story.sections.map((section) => (
              <article
                key={section.heading}
                className="bg-surface-container-lowest border border-outline-variant/20 p-6 md:p-10"
              >
                <h2 className="text-headline-md font-headline-md text-primary mb-5">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-body-md font-body-md text-on-surface-variant leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <div className="bg-primary text-on-primary p-6 md:p-10">
              <span className="text-label-sm font-label-sm uppercase tracking-[0.2em] block mb-2 text-white/80">
                Closing Thought
              </span>
              <p className="text-body-lg leading-relaxed max-w-3xl">{story.closing}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-surface-container-low border border-outline-variant/20 p-6">
              <span className="text-label-sm font-label-sm uppercase tracking-[0.2em] text-primary block mb-3">
                In Brief
              </span>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-4">
                {card.title}
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {card.summary}
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/20 p-6">
              <span className="text-label-sm font-label-sm uppercase tracking-[0.2em] text-primary block mb-4">
                Explore Next
              </span>
              <div className="space-y-4">
                {relatedStories.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/stories/${item.slug}`}
                    className="block border border-outline-variant/20 p-4 bg-surface-container-lowest hover:border-primary transition-colors"
                  >
                    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary block mb-2">
                      {item.eyebrow}
                    </span>
                    <h3 className="text-body-lg font-semibold text-on-surface mb-2">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
