---
title: CSS Essentials
description: A guide in my new Starlight docs site.
---



### Different units em, rem, %, px, vh, vw, ch explained

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Sure! Here's an overview of the differences between the various CSS units: `em`, `rem`, `%`, `px`, `vh`, `vw`, and `ch`.

1. **px (Pixels)**:
   - **Description**: Pixels are the most straightforward unit of measurement in CSS. They represent a fixed size.
   - **Use Case**: Ideal for precise control over element dimensions, such as borders, padding, and margins.
   - **Example**: `width: 200px;`

2. **% (Percentage)**:
   - **Description**: Percentages are relative units. They are relative to the parent element's size.
   - **Use Case**: Useful for responsive design where elements need to scale relative to their container.
   - **Example**: `width: 50%;` (This means the element will take up 50% of the parent element's width.)

3. **em**:
   - **Description**: `em` units are relative to the font-size of the element they are used on. If used for font-size itself, it is relative to the font-size of the parent element.
   - **Use Case**: Often used for font sizes and spacing because it allows elements to scale proportionately.
   - **Example**: `font-size: 2em;` (This means the font size will be twice as large as the current font size of the parent.)

4. **rem (Root em)**:
   - **Description**: `rem` units are relative to the font-size of the root element (`<html>`).
   - **Use Case**: Preferred for global scaling, ensuring consistent sizing across an entire document.
   - **Example**: `font-size: 1.5rem;` (This means the font size will be 1.5 times the root element's font size.)

5. **vh (Viewport Height)**:
   - **Description**: `vh` units are relative to 1% of the viewport's height.
   - **Use Case**: Useful for making elements responsive to the height of the viewport.
   - **Example**: `height: 50vh;` (This means the element will be 50% of the viewport's height.)

6. **vw (Viewport Width)**:
   - **Description**: `vw` units are relative to 1% of the viewport's width.
   - **Use Case**: Useful for making elements responsive to the width of the viewport.
   - **Example**: `width: 50vw;` (This means the element will be 50% of the viewport's width.)

7. **ch**:
   - **Description**: `ch` units are relative to the width of the "0" (zero) character in the element's font.
   - **Use Case**: Useful for setting widths that are related to character lengths, such as input fields.
   - **Example**: `width: 20ch;` (This means the element's width will be the same as the width of 20 "0" characters in the element's font.)


</div>
</details>



### The first question is, what is the CSS box model? 

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

This is a foundational concept in CSS. Basically, anything on a page is a box, and there's a specific way of thinking about content on a web page. The four parts of the box model are the content itself, the padding around the content, the content's borders, and the content's margin. The content can have a height or width. If it doesn't, it defaults. Padding is the space between the content and its border, while margin is everything outside the border, setting the space between the border and the next element. 

</div>
</details>



### what is the CSS position property and its values?

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

A positioned element is an element whose computed position property is either relative, absolute, fixed or sticky.

`static` - The default position; the element will flow into the page as it normally would. The top, right, bottom, left and z-index properties do not apply.

`relative` - The element's position is adjusted relative to itself, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned).

`absolute` - The element is removed from the flow of the page and positioned at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins. These elements do not affect the position of other elements.

`fixed` - The element is removed from the flow of the page and positioned at a specified position relative to the viewport and doesn't move when scrolled.

`sticky` - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.

</div>
</details>







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


### Understaning how block, inline, and inline-block each behave

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Most things are blocks. 

Block elements take up full width default.
They stack one on top of each other.

Inline elements are when you dont want them to stack on top of each other(Only take up the width of content). no effect if we add height or margin or padding to inline elemets.

If we need an element inline & padding and height need to be added, you go with inline-block. ex: `<a class="btn"/>`

</div>
</details>


### what are the differences between `display:none` and `visibility:hidden` 

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">


`display:none` turns off the layout of the elements, so they are not rendered.

`visibility:hidden` hides the elements without changing their layouts.

`opacity:0` causes the elements to be very transparent but users can still interact with them.

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


[Refer this for floats and clear](https://youtu.be/LrdkRMZhgZg?si=By2XITsqxKL-q7wm&t=551)


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


[Reference video](https://www.youtube.com/watch?v=xBPgSc_62rw)
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




###  Explain distinct phases in the rendering pipeline of a web page by a browser.


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Layout (Reflow): Calculation of element positions and sizes.
Paint: Filling in pixels based on layout and styles.
Composite: Combining layers to produce the final screen output.


</div>
</details>



###  What's the difference between layout painting and compositing?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

- Layout: Calculates the size and position of each DOM element to be displayed on the screen. The layout of elements on a Web page is relative, which means a single element can affect others. For example, in case there is a change in the width of the element, the widths of its child and grandchild elements get affected. Therefore, the layout process often gets involved for the browser.

- Paint: Essentially, painting is the process of filling in pixels. It requires painting of text, colors, images, borders, shadows, and other visual effects of a DOM element.

- Composite: Once Paint is complete, the browser combines all the layers into one layer in the correct order and displays them on the screen. This process is especially important for pages with overlapping elements as the incorrect layer composition order may result in an abnormal display of the elements.

</div>
</details>




###  What are some of the "gotchas" for writing efficient CSS?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Firstly, understand that browsers match selectors from rightmost (key selector) to left. Browsers filter out elements in the DOM according to the key selector and traverse up its parent elements to determine matches. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector. Hence avoid key selectors that are tag and universal selectors. They match a large number of elements and browsers will have to do more work in determining if the parents do match.


Be aware of which CSS properties trigger reflow, repaint, and compositing. Avoid writing styles that change the layout (trigger reflow) where possible.



</div>
</details>



###  Explain distinct phases in the rendering pipeline of a web page by a browser.


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Layout (Reflow): Calculation of element positions and sizes.
Paint: Filling in pixels based on layout and styles.
Composite: Combining layers to produce the final screen output.


</div>
</details>



### `notes` : CSS layouts 

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Unlike other languages, Layout works in relation with other elements.
Parent-children relationship - childern width adjusts with parent width, keeping childern area same, ie, height may increase.

Childern inherits styles on the parent.

Collapsing margins are a thing(Child’s margin impacting the parent (if flex or grid, its different))


</div>
</details>


### Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.

When using translate(), the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning.


</div>
</details>

