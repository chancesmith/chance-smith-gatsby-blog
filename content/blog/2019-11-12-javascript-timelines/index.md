---
title: Javascript Timelines
date: "2019-11-12T11:44:00.284Z"
tags: development, sodium halogen
---

At [Sodium Halogen](http://sodiumhalogen.com?ref=chancesmithio-blog) (SH), we're digging into a data rich project. The task at hand is to have a javascript timeline that has a number of features we're trying to fit in.

Thew options we have are to find something that matches closely or build our own. Today I'm digging through the internet to find the right solution.

To protect our SH customer, some of the details are vague. That, I do apologize for.

## small scale mocks of the timeline idea

gantt chart like with mini timeline map at the bottom
![javascript-timeline-mock](./2019-11-12-javascript-timelines/timeline-mock.png)

inner elements inside a gantt chart bar
![timeline-gantt-with-sub-elements](./2019-11-12-javascript-timelines/timeline-gantt-with-sub-elements.png)

### features needed

- gantt bars are time intervals
- gantt bars are dots or moments in time
- box drawing selection
- scrollable (horz/vert/zoom)
- grouping of gantt chart bars
- inner-nest items in a gantt chart bar

Let the digging for solutions begin...

## Diving into the internet looking for a javascript timeline graph or framework

I know [D3](https://d3js.org/) will show up along the way. I have run across D3 a lot looking a graph solutions. The D3 framework seems to be a mind-job to get started, but holds a lot of promise. We'll see...

## D3.js Gantt Chart, example 3

This solution looks like a good start for a custom timeline graph. Not a bad place to begin the search. 💪

![d3 timeline gantt chart](/Users/chance/wip/chance-smith-gatsby-blog/content/_drafts/2019-11-12-javascript-timelines/d3-gantt-chart-example-3.png)
http://bl.ocks.org/dk8996/5538271

### example D3.js pros

- shows intervals
- best fit for starter D3 custom build
- timeline changes as expanding time

### example D3.js cons

- not scrollable (horz/vert)

Let's keep looking...(see another D3 example further down)

## Overwhelmed with frameworks starting now

Wikipedia then shows up with a plate full of options.

![wikipedia-table-of-javascript-chart-libs](./2019-11-12-javascript-timelines/wikipedia-table-of-javascript-chart-libs.png)
https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_libraries

## amCharts - Timeline and Gantt charts

amCharts has been in the running for this solution before. The visuals and animations are amazing!

![amchart4-timeline-feature](./2019-11-12-javascript-timelines/amchart4-timeline-feature.gif)

I currently feel the graphs I see in the [new amChart4 timelines](https://www.amcharts.com/timeline-chart/) aren't a great fit for analysis, but great tools for telling a story with they data that is found.

There has been some hope we could use the Gantt chart.

![amchart-gantt-chart](./2019-11-12-javascript-timelines/amchart-gantt-chart.png)

### amCharts pros

- the timeline shows a range of data with the top handle UI

### amCharts cons

- not scrollable (horz/vert/zoom)
- inner content would need to be dropdowns instead

This is really close to want we want, but might be painful to bend-to-our-will.

## AnyChart - Gantt chart

![anychart-anygantt](./2019-11-12-javascript-timelines/anychart-anygantt.png)
https://www.anychart.com/products/anygantt/gallery/Gantt_Working_With_Data/

### AnyChart pros

- hierarchy of of gantt bar elements (expandable with clicks)

### AnyChart cons

- not scrollable (horz/vert/zoom)

![anychart-anygantt](./2019-11-12-javascript-timelines/anychart-table-data-example.gif)

## Vis.js - Timeline chart

An outdated branding, but super feature rich. This one has so many examples and usecases.

![visjsorg](./2019-11-12-javascript-timelines/visjsorg.png)
https://visjs.org/

![visjs-individual-editable-items](./2019-11-12-javascript-timelines/visjs-individual-editable-items.png)
https://visjs.github.io/vis-timeline/examples/timeline/groups/groups.html

### Vis.js pros

- so many options to tinker with
- scrollable (zoom) & click+drag for panning left/right
- grouping of gantt chart bars

### Vis.js cons

- not sure how to handle box drawing selection

Very promising as well.

## Chart.js simple and flexible charts

These are simple and pretty. Yet, don't seem to have a good gantt or timeline chart we can use.

![chartjsorg](./2019-11-12-javascript-timelines/chartjsorg.png)
https://www.chartjs.org/

Not a good fit for us.

## D3.js scrollable timeline example

The x-axis timeline scales well on scroll. Nice.

![d3js-timeline-scrollable](./2019-11-12-javascript-timelines/d3js-timeline-scrollable.png)
https://www.cssscript.com/demo/simple-scrollable-timeline-chart-with-d3-js-d3-timeline/

### D3.js scrollable timeline pros

- dots for moments in time
- scrollable/panable, nice

### D3.js scrollable timeline cons

- not sure how adding more rows will stack
- eh, definitly not as pretty as some of the previous (not a deal breaker)

Details: https://www.cssscript.com/simple-scrollable-timeline-chart-with-d3-js-d3-timeline/

## vasturiano: timelines-chart

This is nice as well. The zoom feature is handy, but might conflict with the way we want to handle the node selection.

![vasturiano-timelines-chart](./2019-11-12-javascript-timelines/vasturiano-timelines-chart.png)
https://github.com/vasturiano/timelines-chart

Also, a stackoverflow request that this tool is mentioned as the solution: https://stackoverflow.com/questions/48890790/d3-multi-layer-timeline

### vasturiano pros

- zoom by selection
- bottom vert-pan bar

### vasturiano cons

- not scrollable

## jiahuang: d3-timeline

Kinda of a dated repo, but has quite a few examples to be inspired by.

![jiahuang_d3-timeline](./2019-11-12-javascript-timelines/jiahuang_d3-timeline.png)
https://github.com/jiahuang/d3-timeline

shows a stackoverflow request: https://stackoverflow.com/questions/13201749/draw-simple-timeline-with-d3

If we do a D3 build, this is another inspiring example.

## bill's d3 timeline

Another good D3 example for inspo.

![bills-d3-timeline-example](./2019-11-12-javascript-timelines/bills-d3-timeline-example.png)
http://bl.ocks.org/bunkat/2338034

The more D3 examples I find, the more comfortable I am to building something from scratch using the D3 framework. 🤔

## Reinhard Engel's timeline concept

Yet, another D3 example with may rows in the timeline. Cool!

![reinhard-engel-timeline-concept](./2019-11-12-javascript-timelines/reinhard-engel-timeline-concept.png)
http://bl.ocks.org/rengel-de/5603464

## Timeline research exhausted

With these in mind, I believe we can now pump out a few sandboxes. We'll probably start with vasturiano's timeline-chart and look futher into how we can add the features we need.

Got questions? Hit me!