---
name: Heritage Excellence
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#554243'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#887272'
  outline-variant: '#dbc0c1'
  surface-tint: '#9c4049'
  primary: '#3d000c'
  on-primary: '#ffffff'
  primary-container: '#5d101d'
  on-primary-container: '#e1767e'
  inverse-primary: '#ffb2b6'
  secondary: '#735186'
  on-secondary: '#ffffff'
  secondary-container: '#e9c0fd'
  on-secondary-container: '#6c4b7f'
  tertiary: '#001f12'
  on-tertiary: '#ffffff'
  tertiary-container: '#003623'
  on-tertiary-container: '#68a284'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb2b6'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#7e2933'
  secondary-fixed: '#f4d9ff'
  secondary-fixed-dim: '#e0b8f4'
  on-secondary-fixed: '#2b0c3e'
  on-secondary-fixed-variant: '#593a6d'
  tertiary-fixed: '#b3f0ce'
  tertiary-fixed-dim: '#98d3b3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#145038'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 120px
---

## Brand & Style

This design system is crafted for a premium B2B environment where traditional artistry meets institutional reliability. The brand personality is **sophisticated, authoritative, and timeless**, targeting high-end retailers and international boutique buyers.

The visual style is a fusion of **Minimalism** and **High-End Editorial**. By utilizing expansive whitespace and a restrained UI, the focus remains entirely on the intricate craftsmanship of the sarees. The interface avoids unnecessary decorative elements, instead relying on precise typography and a rich, zari-inspired color palette to convey value. The emotional response should be one of profound trust, cultural reverence, and professional efficiency.

## Colors

The color palette is inspired by the traditional "Zari" weaving process and royal textile heritage.

- **Primary (Deep Maroon):** Used for primary actions, critical headings, and brand-defining moments. It represents heritage and depth.
- **Secondary (Royal Purple):** Utilized for secondary interactive elements and category distinctions.
- **Tertiary (Emerald Green):** Applied to success states and specific heritage collection tags.
- **Accent (Zari Gold):** Reserved for high-value highlights, borders of premium elements, and decorative iconography.
- **Background (Cream/Off-White):** Provides a warm, organic alternative to stark white, reducing eye strain and enhancing the luxury feel.

Surface colors should prioritize the cream neutral, using the deep primary and secondary colors for high-contrast text and structural accents.

## Typography

The typographic strategy balances **Libre Caslon Text** for an authoritative, editorial feel with **Manrope** for modern, functional clarity in B2B transactions.

- **Headlines:** Must always use the serif font. Large display sizes should use tighter letter spacing to emphasize the elegant curves of the letterforms.
- **Body Text:** Uses Manrope to ensure maximum legibility for product descriptions and technical specifications.
- **Labels:** Small labels, such as SKU numbers and "In Stock" indicators, use uppercase Manrope with increased letter spacing to maintain a clean, organized look.
- **Contrast:** Maintain high contrast between headlines and body text to guide the user through the information hierarchy.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain the editorial integrity of the layout, transitioning to a fluid model for mobile devices.

- **Desktop:** A 12-column grid with generous 32px gutters. Margins are intentionally wide (80px) to frame the content like a luxury lookbook.
- **Rhythm:** Vertical spacing is aggressive. A 120px gap between major sections ensures that "product clusters" do not bleed into one another.
- **B2B Tables:** Data-heavy sections (order history, bulk pricing) should use a compressed version of the spacing scale, but maintain the 32px horizontal gutters to feel part of the same system.

## Elevation & Depth

Elevation in this design system is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Tiers:** Use subtle shifts from the neutral cream background to a slightly darker off-white or a very faint gold-tinted grey for container surfaces.
- **Outlines:** Instead of shadows, use 1px borders in a muted gold or deep maroon (at 10% opacity) to define cards and input fields.
- **Depth:** When depth is required (e.g., for modal overlays), use a sophisticated backdrop blur (glassmorphism) with a 20% opacity primary color tint, rather than a black overlay. This maintains the "rich" color feel of the brand even in administrative states.

## Shapes

To reflect the precision of textile weaving and the architectural nature of heritage buildings, the design system utilizes **Sharp (0px)** roundedness.

All buttons, cards, input fields, and images should have crisp 90-degree corners. This evokes a sense of formal elegance and high-end professional structure. In rare cases where a soft touch is needed (e.g., status chips), a maximum of 2px radius may be applied, but the primary language remains strictly rectangular.

## Components

- **Buttons:** Primary buttons are solid Deep Maroon with white or gold text. Secondary buttons are outlined (ghost) with a 1px border. All buttons use sharp corners and the `label-sm` typographic style.
- **Input Fields:** Bottom-border only for a "boutique" feel, or full sharp-cornered outlines for B2B forms. Use the neutral cream as the fill.
- **Cards:** Product cards must be borderless with generous internal padding. The image should occupy at least 70% of the card area.
- **Chips/Badges:** Use the Tertiary (Emerald) or Secondary (Purple) colors with 10% opacity backgrounds for "In Stock" or "Hand-woven" tags.
- **Inventory Tables:** Use high-contrast horizontal dividers in a muted gold. Avoid vertical lines.
- **Specialty Components:** Include a "Fabric Zoom" component—a square, sharp-edged module that provides high-resolution macro views of the Zari work.