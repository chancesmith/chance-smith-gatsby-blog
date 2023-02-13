---
layout: post
title: "Accessibility Introduction"
date: "2023-02-10T08Z"
tags: development, sodium halogen
---

This is a work in progress post. 
Last updated: 02/13/23

I’m starting a new project that is helping visually impaired use software. I am finding there are lots of resources and need this to be a digital garden of sorts to organize an approach and the research around the topic. I hope this is helpful and you enjoy. Bear with me as this is not organized or curated in its current state.

## Resource links

- https://www.a11yproject.com/checklist
- http://inclusive-components.design

## Questions

### How are form errors handled best?

At first I thought errors would be auto focused on. The user would be taken to first field that had a error and the error would be read to them.

Demo #1
![autofocused error on field a11y](autofocus-field.png)

Yet, after finding the A11y Project checklist, it’s recommended to put the list of errors at the top of the form.

Demo #2
![auto focusing on the error list above the fields](autofocus-error-list.png)

I wonder if auto focusing on the field or the error list is still disorienting for those that have no site. This was listed on the checklist as well.

The next step will be to use your test these two demos, and get feedback about which approach is best.
