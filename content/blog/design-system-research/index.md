---
layout: post
title: "Design System Research"
date: "2021-06-05T08Z"
tags: frontend, development
---

Frontend work and tools have changed so much in the last 15 years since I started development work. In the past couple of years, we've defined *how we work* so we can speak the same vocabulary and deliver consistent results. This week, I'm wanting to look at building a CSS styling process our team and our clients' teams can be guided by.

Our team has gone from creating websites to building web and native apps. Now we're using ReactJS and Blazor. Here is the problem and the big goal in mind.

## Seen problem

Our designers spend time creating a design system that our development team (and myself) don't use.

## The Frontend Workflow Goal

Find a UI library tool that exposes what our designers' design system looks like and the UI patterns and components too. I'll use this tool to build a boilerplate for our team and call it "Periodic." Each of our customers will get a copy of Periodic for where their UI library will be developed.

I want our development team to thinking about typeface size, spacing and layout just like the designers do. In a way, I'd like to codify our designers' systems.

## 2021 CSS Architecture

After using SASS, LESS, CSS Modules, and Styled Components our team's process for creating styles has diminished. We favor different methods of styling applications. We need to unite on a single method.

Brad Frost, creator and author of Atomic Design, [mentions Styled Components](https://youtu.be/TgWyyoofKIA?t=1601) having its merits but wondering what happened to the trusty global stylesheet. A single style sheet that could be used across many applications and leaving less room for error.

I agree that the styles we've had in React seem like in-line (Tailwind CSS) or wild-west (Styled Components). We've enjoyed not having to think about the global context of styles or "What do I name this class?" Yet, it's come at a cost not having guidelines for our team to follow.

Brad also mentions how he [architects CSS for design systems](https://bradfrost.com/blog/post/css-architecture-for-design-systems/) with a naming convention of the global namespace, class-prefixes, and following with BEM like naming.

This global style sheets thinking will be a bit painful to go back to, but worth revisiting. We need a system we can grow with and help us move with speed.

## CSS Component Style Guide Tools

Here are the ones I want to explore:

- [Storybook](https://storybook.js.org/?ref=chancesmith.io): we've used this in the past, but is specific to React/Vue/Angular
- [Fractal](https://fractal.build/?ref=chancesmith.io): worth a shot
- [Pattern Lab](https://patternlab.io/?ref=chancesmith.io): made by Dan Mal + Brad Frost, uses SASS to build a global style sheet we can use in a CDN

I'm interested in trying more, but these are where I'll start and add a few components to see which fits our team and our future best.

to be continued...✍️