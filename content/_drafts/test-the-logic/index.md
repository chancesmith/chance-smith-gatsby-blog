---
layout: post
title: "Test the Logic"
date: "2024-03-08T08Z"
tags: development, testing
---

I find teams avoiding writing tests is sometimes hard to get into if out of practice or where there aren't enough examples.


Yet, if we knew we were having a bug with a function, we could carve out the logic into a testable unit.

**Before**
```
const handleSortItems = () => {
  const sortedItems = [...state.items].sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 2; << -- 🐛
    return 0;
  });
  setState({ ...state, items: sortedItems });
};
```

**After**: We could carve out `sortItems`  for testing.
```
const sortItems = (items) => {
  return [...items].sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });
};

const handleSortItems = () => {
  const sortedItems = sortItems(state.items);
  setState({ ...state, items: sortedItems });
};
``` 