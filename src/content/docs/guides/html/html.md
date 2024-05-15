---
title: HTML Questions
description: These are the commonly asked HTML related questions.
---

### HTML Doctype

**What does a doctype do?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>The doctype declaration is a critical component at the beginning of an HTML document that instructs the web browser about the version of HTML the page is written in. It helps ensure that the browser renders the content correctly. Without a doctype, the browser may render the page in "quirks mode" where it imitates non-standard behavior in older browsers to prevent older web pages from breaking.</p>
</div>
</details>

### Multilingual Content Delivery

**How do you serve a page with content in multiple languages?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>To serve a page in multiple languages, you can use the following methods:</p>
<ul>
<li><strong>HTML lang attribute</strong>: Specify the language of the content in your HTML structure using the `lang` attribute.</li>
<li><strong>Content Negotiation</strong>: Configure your server to deliver different versions of a page based on the user's language preferences sent by the browser.</li>
<li><strong>URL Structure</strong>: Use different URLs for different language versions, such as subdirectories (/en/, /de/) or subdomains (en.example.com).</li>
<li><strong>Dynamic Content Loading</strong>: Use JavaScript to dynamically load content based on the user's language preference.</li>
</ul>
</div>
</details>

### Designing for Multilingual Sites

**What kind of things must you be wary of when designing or developing for multilingual sites?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>When developing multilingual sites, consider the following:</p>
<ul>
<li><strong>Text Expansion</strong>: Some languages require more space, so design flexible layouts that can accommodate text expansion or contraction.</li>
<li><strong>Character Encoding</strong>: Use UTF-8 encoding to support a wide range of characters from different languages.</li>
<li><strong>Cultural Differences</strong>: Colors, icons, and imagery may have different connotations in different cultures, so choose them carefully.</li>
<li><strong>Right-to-Left (RTL) Support</strong>: Languages like Arabic and Hebrew are read from right to left, so ensure your design and CSS support RTL text directions.</li>
</ul>
</div>
</details>

### Use of Data- Attributes

**What are data- attributes good for?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>`data-` attributes are used to store custom data directly inside HTML tags. They are beneficial for:</p>
<ul>
<li><strong>Storing Extra Information</strong>: Useful for keeping data that JavaScript might need to interact with elements without using additional storage.</li>
<li><strong>JavaScript Integration</strong>: Easily access these attributes via JavaScript, enhancing the interactivity of web components without affecting the semantics of the HTML structure.</li>
<li><strong>Separation of Concerns</strong>: Keep HTML clean from extra logic or presentation details, maintaining a clear separation of concerns.</li>
</ul>
</div>
</details>

### HTML5 Building Blocks

**Consider HTML5 as an open web platform. What are the building blocks of HTML5?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>HTML5's building blocks include:</p>
<ul>
<li><strong>Semantic Elements</strong>: More descriptive HTML elements like `<article>`, `<section>`, `<nav>`, `<header>`, and `<footer>` for better document structure.</li>
<li><strong>Forms and Input Types</strong>: Enhanced form controls and new input types for validation and user interface enhancements.</li>
<li><

strong>Audio and Video</strong>: Native support for audio and video without the need for external plugins.</li>
<li><strong>Graphics</strong>: Canvas and SVG for in-browser graphics.</li>
<li><strong>Advanced APIs</strong>: Geolocation, drag-and-drop, local storage, and more for building complex applications.</li>
<li><strong>Accessibility</strong>: Improved support for accessibility standards, making web content more accessible to people with disabilities.</li>
</ul>
</div>
</details>


### Difference Between Cookie, sessionStorage, and localStorage

**Describe the difference between a cookie, sessionStorage, and localStorage.**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Here are the key differences between cookies, sessionStorage, and localStorage:</p>
<ul>
<li><strong>Cookies</strong>: Small pieces of data stored on the client's computer by the browser, sent with every request to the server. Useful for server-side reading and setting expiration dates. Typically limited to 4KB.</li>
<li><strong>sessionStorage</strong>: Allows data storage in the browser for the duration of the page session. The data is cleared when the tab or window is closed. Each tab has its own isolated storage.</li>
<li><strong>localStorage</strong>: Similar to sessionStorage but persists even when the browser is closed and reopened. Provides long-term storage (until explicitly cleared) and is shared across all tabs and windows from the same origin.</li>
</ul>
</div>
</details>

### Script Tag Attributes

**Describe the difference between `<script>`, `<script async>`, and `<script defer>`.**

<details>

<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>These script attributes influence how and when a script is loaded:</p>
<ul>
<li><strong>Normal script</strong>: Downloads and executes immediately, blocking HTML parsing during the process.</li>
<li><strong>script async</strong>: Downloads the script without blocking HTML parsing and executes it as soon as it is downloaded, which can disrupt the parsing process.</li>
<li><strong>script defer>`</strong>: Downloads the script without blocking HTML parsing and executes it only after the document has been fully parsed, preserving the script's execution order as it appears in the document.</li>
</ul>
</div>

</details>

### CSS Link and JS Script Placement

**Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Placing CSS <code>&lt;link&gt;</code>s in the <code>&lt;head&gt;</code> ensures styles are loaded before the HTML is rendered, preventing unstyled content from appearing. JS <code>&lt;script&gt;</code>s are placed just before <code>&lt;/body&gt;</code> to ensure the HTML is parsed before the scripts run, reducing the perceived load time. Exceptions include:</p>
<ul>
<li><strong>Modern Script Loading</strong>: Using <code>&lt;script async&gt;</code> or <code>&lt;script defer&gt;</code> allows scripts to be placed in the <code>&lt;head&gt;</code> without affecting rendering speed.</li>
<li><strong>Critical JS</strong>: JavaScript that needs to interact with the DOM or modify CSS before the page renders might need to be loaded earlier.</li>
</ul>
</div>
</details>


### Progressive Rendering

**What is progressive rendering?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Progressive rendering is a technique designed to improve the performance of web pages by allowing the browser to render content in stages rather than waiting for all content to download before displaying anything. Techniques include:</p>
<ul>
<li><strong>Lazy Loading</strong>: Images, videos, and other resources are loaded only when they are needed (e.g., when scrolling into view).</li>
<li><strong>Priority Content</strong>: Rendering the most important content first while less critical content loads in the background.</li>
<li><strong>Asynchronous JavaScript</strong>: Scripts are loaded asynchronously to avoid blocking the rendering of critical content.</li>
</ul>
</div>
</details>

### Use of Srcset in Image Tags

**Why would you use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>The `srcset` attribute in an image tag allows developers to specify a list of different image files for different display/device conditions (like varying screen sizes and resolutions). This is particularly useful in responsive web design. The browser selects from the list based on the current viewing context and the screen density of the device:</p>
<ul>
<li><strong>Evaluation Process</strong>: The browser looks at the device's screen width, pixel density, and zoom level. It then uses this information to pick the most appropriate image from the `srcset` list, optimizing both the visual quality and the loading speed.</li>
<li><strong>Benefits</strong>: This can lead to faster page load times and less bandwidth usage, as smaller images can be loaded on devices with smaller screens or lower resolution.</li>
</ul>
</div>
</details>

### Experience with HTML Templating Languages

**Have you used different HTML templating languages before?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Yes, I have used several HTML templating languages to streamline the development process and enhance maintainability. For example:</p>
<ul>
<li><strong>Handlebars</strong>: Allows for minimalistic templating where you can use simple placeholders for injecting data into HTML.</li>
<li><strong>Pug (formerly Jade)</strong>: Offers a robust set of features like loops, conditionals, and custom attributes, helping to write HTML code more efficiently.</li>
<li><strong>EJS (Embedded JavaScript)</strong>: Embeds JavaScript directly in the template, making it easy to use familiar programming structures to render complex HTML dynamically.</li>
</ul>
<p>Each of these tools can significantly reduce HTML redundancy and make dynamic content generation cleaner and more manageable.</p>
</div>
</details>

### Difference Between Canvas and SVG

**What is the difference between canvas and SVG?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Canvas and SVG are both used for creating graphics on the web, but they serve different purposes and operate differently:</p>
<ul>
<li><strong>Canvas</strong>: Provides a bitmap canvas which you can draw onto via JavaScript. It's pixel-based, so scaling up can lead to loss of quality. Best used for graphics-intensive applications like games or image editing.</li>
<li><strong>SVG (Scalable Vector Graphics)</strong>: Describes images in XML, which makes them scalable without loss of quality. SVG is preferable for designs that require resizing at various dimensions, like logos or icons.</li>
</ul>
</div>
</details>

### Empty Elements in HTML

**What are empty elements in HTML?**

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Empty elements in HTML are elements that do not contain any content or children. These elements cannot have closing tags because they inherently do not hold data or nested tags. Common examples include:</p>
<ul>
<li><strong><code>&lt;img&gt;</code></strong>: Used to embed images.</li>
<li><strong><code>&lt;br&gt;</code></strong>: Line break.</li>
<li><strong><code>&lt;hr&gt;</code></strong>: Horizontal rule.</li>
<li><strong><code>&lt;input&gt;</code></strong>: Form input.</li>
<li><strong><code>&lt;link&gt;</code></strong>: Links CSS files.</li>
<li><strong><code>&lt;meta&gt;</code></strong>: Metadata.</li>
</ul>
<p>These tags are essential for HTML structure and presentation, providing specific functionality to the webpage layout and formatting.</p>
</div>
</details>

These elements and techniques are particularly useful in enhancing the functionality and performance of web applications, aspects that might resonate