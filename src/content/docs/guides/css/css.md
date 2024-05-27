---
title: CSS Essentials
description: A guide in my new Starlight docs site.
---

### What is CSS selector specificity and how does it work?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The browser determines what styles to show on an element depending on the specificity of CSS rules. We assume that the browser has already determined the rules that match a particular element. Among the matching rules, the specificity, four comma-separate values, `a, b, c, d` are calculated for each rule based on the following:

`a` is whether inline styles are being used. If the property declaration is an inline style on the element, `a` is 1, else 0.
`b` is the number of ID selectors.
`c` is the number of classes, attributes and pseudo-classes selectors.
`d` is the number of tags and pseudo-elements selectors.
The resulting specificity is not a score, but a matrix of values that can be compared column by column. When comparing selectors to determine which has the highest specificity, look from left to right, and compare the highest value in each column. So a value in column `b` will override values in columns `c` and `d`, no matter what they might be. As such, specificity of 0,1,0,0 would be greater than one of `0,0,10,10`.

In the cases of equal specificity: the latest rule is the one that counts. If you have written the same rule into your stylesheet (regardless of internal or external) twice, then the lower rule in your style sheet is closer to the element to be styled, it is deemed to be more specific and therefore will be applied.

I would write CSS rules with low specificity so that they can be easily overridden if necessary. When writing CSS UI component library code, it is important that they have low specificities so that users of the library can override them without using too complicated CSS rules just for the sake of increasing specificity or resorting to `!important`.


</div>
</details>



### What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

**Resetting** - Resetting is meant to strip all default browser styling on elements. For e.g. margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.
**Normalizing** - Normalizing preserves useful default styles rather than "unstyling" everything. It also corrects bugs for common browser dependencies.
I would choose resetting when I have a very customized or unconventional site design such that I need to do a lot of my own styling and do not need any default styling to be preserved.



</div>
</details>

### Describe `floats` and how they work.


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will affect the positioning of other elements (e.g. text will flow around floated elements), unlike `position: absolute` elements, which are removed from the flow of the page.

The CSS `clear` property can be used to be positioned below `left`/`right`/`both` floated elements.

If a parent element contains nothing but floated elements, its height will be collapsed to nothing. It can be fixed by clearing the float after the floated elements in the container but before the close of the container.

The `.clearfix` hack uses a clever CSS pseudo selector (`::after`) to clear floats. Rather than setting the overflow on the parent, you apply an additional class `clearfix` to it. Then apply this CSS:

```js
.clearfix::after {
  content: ' ';
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

Alternatively, give `overflow: auto` or `overflow: hidden` property to the parent element which will establish a new block formatting context inside the children and it will expand to contain its children.




</div>
</details>

### Describe z- index and how stacking context is formed.


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The z-index property in CSS controls the vertical stacking order of elements that overlap. z-index only affects elements that have a position value which is not static.

Without any z-index value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning (and their children) will always appear on top of elements with default static positioning, regardless of HTML hierarchy.

A stacking context is an element that contains a set of layers. Within a local stacking context, the z-index values of its children are set relative to that element rather than to the document root. Layers outside of that context — i.e. sibling elements of a local stacking context — can't sit between layers within it. If an element B sits on top of element A, a child element of element A, element C, can never be higher than element B even if element C has a higher z-index than element B.

Each stacking context is self-contained - after the element's contents are stacked, the whole element is considered in the stacking order of the parent stacking context. A handful of CSS properties trigger a new stacking context, such as opacity less than 1, filter that is not none, and transform that is notnone.



</div>
</details>

###  Describe Block Formatting Context (BFC) and how it works.


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

A Block Formatting Context (BFC) is part of the visual CSS rendering of a web page in which block boxes are laid out. Floats, absolutely positioned elements, inline-blocks, table-cells, table-captions, and elements with overflow other than visible (except when that value has been propagated to the viewport) establish new block formatting contexts.

Knowing how to establish a block formatting context is important, because without doing so, the containing box will not contain floated children. This is similar to collapsing margins, but more insidious as you will find entire boxes collapsing in odd ways.

A BFC is an HTML box that satisfies at least one of the following conditions:

The value of float is not none.
The value of position is neither static nor relative.
The value of display is table-cell, table-caption, inline-block, flex, or inline-flex, grid, or inline-grid.
The value of overflow is not visible.
In a BFC, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch).

Vertical margins between adjacent block-level boxes in a BFC collapse. Read more on collapsing margins.


</div>
</details>

###  What are the various clearing techniques and which is appropriate for what context?



<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

- Empty div method - <div style="clear:both;"></div>.
- Clearfix method - Refer to the .clearfix class above.
- overflow: auto or overflow: hidden method - Parent will establish a new block formatting context and expand to contains its floated children.
In large projects, I would write a utility .clearfix class and use them in places where I need it. overflow: hidden might clip children if the children is taller than the parent and is not very ideal.


</div>
</details>

### Explain CSS sprites, and how you would implement them on a page or site.



<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

CSS sprites combine multiple images into one single larger image. It is a commonly-used technique for icons (Gmail uses it). How to implement it:

Use a sprite generator that packs multiple images into one and generate the appropriate CSS for it.
Each image would have a corresponding CSS class with background-image, background-position and background-size properties defined.
To use that image, add the corresponding class to your element.
Advantages:

Reduce the number of HTTP requests for multiple images (only one single request is required per spritesheet). But with HTTP2, loading multiple images is no longer much of an issue.
Advance downloading of assets that won't be downloaded until needed, such as images that only appear upon :hover pseudo-states. Blinking wouldn't be seen.

</div>
</details>

###  How would you approach fixing browser- specific styling issues?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

- After identifying the issue and the offending browser, use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.
- Use libraries like Bootstrap that already handles these styling issues for you.
- Use autoprefixer to automatically add vendor prefixes to your code.
- Use Reset CSS or Normalize.css.
- If you're using Postcss (or a similar transpiling library), there may be plugins which allow you to opt in for using modern CSS syntax (and even W3C proposals) that will transform those sections of your code into corresponding safe code that will work in the targets you've used.

</div>
</details>

###  How do you serve your pages for feature- constrained browsers? What techniques/processes do you use?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

- Graceful degradation - The practice of building an application for modern browsers while ensuring it remains functional in older browsers.
- Progressive enhancement - The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
- Use caniuse.com to check for feature support.
- Autoprefixer for automatic vendor prefix insertion.
- Feature detection using Modernizr.
- Use CSS Feature queries @support


</div>
</details>



- What are the different ways to visually hide content (and make it available only for screen readers)?

- Have you ever used a grid system, and if so, what do you prefer?

- Have you used or implemented media queries or mobile- specific layouts/CSS?

- Are you familiar with styling SVG?

- Can you give an example of an @media property other than screen?

- What are some of the "gotchas" for writing efficient CSS?

- What are the advantages/disadvantages of using CSS preprocessors?

- Describe what you like and dislike about the CSS preprocessors you have used.

- How would you implement a web design comp that uses non- standard fonts?

- Explain how a browser determines what elements match a CSS selector.

- Describe pseudo- elements and discuss what they are used for.

- Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

- What does * { box- sizing: border- box; } do? What are its advantages?

- What is the CSS display property and can you give a few examples of its use?

- What's the difference between inline and inline- block?

- What's the difference between a relative, fixed, absolute and statically positioned element?

- What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

- Have you played around with the new CSS Flexbox or Grid specs?

- Can you explain the difference between coding a website to be responsive versus using a mobile- first strategy?

- How is responsive design different from adaptive design?

- Have you ever worked with retina graphics? If so, when and what techniques did you use?

- Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?