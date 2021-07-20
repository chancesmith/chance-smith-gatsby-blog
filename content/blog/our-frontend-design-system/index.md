---
layout: post
title: "Our Frontend Design System"
date: "2021-07-20T08Z"
tags: development, sodium halogen
---

We [researched design systems](/design-system-research/) and have had years of different methods turning mocks into code. We've now defined how-we-work for putting designs in the browser. This post shares how we codify the design system a designer adds to their mocks. This is simple and gives a starting point for making decisions.

## How we implement design

### 1. We create markup and styles first in a component library (Storybook)

   Storybook elements are made in order:
      - Atom
      - Molecule
      - Organism
      - Layout

### 2. We use SCSS + BEM + utility classes

   SCSS helps develop CSS faster.

   BEM keeps the components from overlapping with other styles in the app.

   Utility classes cover small adjustments when needed, where adding another class component would be overkill.

### 3. We prefix classes with **c-** (component), **l-** (layout), **u-** (utility)

   With the benefit of even more specificity, this helps our team stay in the appropriate lane if what we are creating is either a component, layout, or utility.

### 4. We use "em" for width and spacing with a base of 8px

   For the design, factors of 8px keep the design consistent, and we can recreate this in our CSS styles.

### 5. We use —css-variables

   CSS variables make overwriting other colors a breeze.