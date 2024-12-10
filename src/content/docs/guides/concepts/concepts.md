---
title: Javascript concepts you should know
description: This will teach you how these bullshit will work
---


### Cross-browser Knowledge


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

#### What Are Webkit-Based Browsers?

**Webkit** is a browser engine developed by Apple and primarily used in **Safari** and other browsers based on its rendering engine. It is responsible for rendering web pages, including interpreting HTML, CSS, and JavaScript.

Webkit-based browsers include:

1. **Safari** (macOS and iOS)
2. **Google Chrome** (earlier versions, before switching to Blink in 2013)
3. **Microsoft Edge** (earlier versions, before switching to Chromium in 2020)
4. **Mobile Browsers on iOS**:
   - All third-party browsers (e.g., Chrome, Firefox, Edge on iOS) are required by Apple to use Webkit for rendering due to App Store policies.

#### Blink-Based Browsers
Blink is a fork of Webkit, developed by Google, and powers many modern browsers. Blink browsers are similar in rendering capabilities but have diverged in some features.

Examples of Blink-based browsers:
1. **Google Chrome** (modern versions)
2. **Microsoft Edge** (modern versions, since switching to Chromium)
3. **Opera** (modern versions)
4. **Brave**

#### Gecko-Based Browsers
Gecko is a rendering engine developed by Mozilla. It is the engine behind the **Firefox** browser and its derivatives.

Examples of Gecko-based browsers:
1. **Mozilla Firefox**
2. **Waterfox**
3. **Tor Browser**

#### Trident and EdgeHTML (Legacy)
These were the engines used by Microsoft in older browsers:
- **Trident**: Used in Internet Explorer (IE).
- **EdgeHTML**: A fork of Trident, used in early versions of Microsoft Edge.

#### Key Differences Between Engines
1. **Rendering Features:**
   - Webkit and Blink share many similarities because Blink originated as a fork of Webkit.
   - Gecko implements features differently and is sometimes slower to adopt cutting-edge CSS features compared to Webkit and Blink.

2. **Performance:**
   - Blink and Webkit are generally known for their speed and are widely used in modern browsers.

3. **CSS and DOM Support:**
   - Webkit and Blink support proprietary prefixes for experimental features (e.g., `-webkit-`).
   - Gecko uses fewer proprietary prefixes and prefers adopting finalized standards.

4. **Standards Compliance:**
   - All modern engines aim for compliance with web standards, but implementations may vary slightly, leading to cross-browser issues.

#### Why Does Webkit Matter in CSS?
CSS rules prefixed with `-webkit-` are necessary for features that are specific to or optimized for Webkit-based browsers. For example:
- `-webkit-line-clamp`: Limits text to a specific number of lines (not supported in non-Webkit browsers).
- `-webkit-box-orient`: Works with `-webkit-box` to control layout direction.

#### How to Ensure Cross-Browser Compatibility
To ensure a consistent experience across different browsers:
1. **Test on Multiple Browsers:**
   - Always test your site on Safari, Chrome, Firefox, and Edge.
2. **Use Feature Detection:**
   - Use tools like [Modernizr](https://modernizr.com/) to detect support for specific CSS features and provide fallbacks.
3. **Fallbacks:**
   - Provide alternative styling or JavaScript solutions for features unsupported in certain engines.
4. **Progressive Enhancement:**
   - Design your site to work with basic features and enhance it for browsers with advanced support.
5. **Avoid Relying Solely on Proprietary Features:**
   - Instead of using `-webkit-` features alone, ensure standard CSS is used alongside it if supported. 

#### Recap of Popular Rendering Engines
| Rendering Engine | Popular Browsers       | Known For                     |
|------------------|-------------------------|--------------------------------|
| Webkit           | Safari, iOS browsers   | Apple ecosystem, smooth rendering, iOS restrictions |
| Blink            | Chrome, Edge, Opera    | Speed, cutting-edge features, wide adoption |
| Gecko            | Firefox, Tor Browser   | Privacy-focused, independent development |
| Trident/EdgeHTML | Internet Explorer, Edge (legacy) | Legacy, phased out by Microsoft |

Understanding these engines helps in crafting web applications that work well across devices and platforms.


</div>
</details>


### Explain how rendering engine is different from the JavaScript engine


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
They work together to deliver a fully functional web page. Here's a breakdown of their differences and how they complement each other:

---

#### **Rendering Engine**
- **Purpose:**
  The rendering engine is responsible for parsing and displaying web content, including HTML, CSS, and images, to create the visual representation of a web page in the browser.

- **Key Responsibilities:**
  - Parse **HTML** and construct the DOM (Document Object Model).
  - Parse **CSS** and construct the CSSOM (CSS Object Model).
  - Combine the DOM and CSSOM into a **render tree**.
  - Layout elements and calculate their positions.
  - Paint the visual content on the screen.
  - Handle reflows and repaints when the page changes dynamically.

- **Examples of Rendering Engines:**
  - **Webkit**: Safari, iOS browsers.
  - **Blink**: Chrome, Edge, Opera (modern versions).
  - **Gecko**: Firefox.
  - **Trident** and **EdgeHTML**: Legacy Internet Explorer and Edge.

- **Output:** 
  The visible layout of the web page in the browser.

---

#### **JavaScript Engine**
- **Purpose:**
  The JavaScript engine is responsible for executing JavaScript code, enabling dynamic interactions and functionalities on the web page.

- **Key Responsibilities:**
  - Parse and compile JavaScript code into machine code.
  - Execute the code to interact with the DOM, CSSOM, or perform calculations.
  - Provide runtime features like garbage collection.
  - Implement APIs for interacting with the browser (e.g., `document`, `window`).

- **Examples of JavaScript Engines:**
  - **V8**: Used in Chrome, Edge, and Node.js.
  - **SpiderMonkey**: Used in Firefox.
  - **JavaScriptCore (JSC)**: Used in Safari.
  - **Chakra**: Used in legacy Microsoft Edge.
  - **Nashorn**: A Java-based JavaScript engine.

- **Output:** 
  Changes to the DOM, triggering updates in the rendering engine.

---

#### **How They Work Together**
1. **Rendering Engine:**
   - Loads the HTML and CSS, builds the DOM and CSSOM, and renders the initial page.
   - Paints the layout and applies styles.

2. **JavaScript Engine:**
   - Executes scripts to modify the DOM or CSSOM dynamically.
   - For example, adding an element to the DOM via `document.createElement()` will trigger the rendering engine to update the layout and repaint the page.

3. **Interaction Between Engines:**
   - JavaScript manipulates the DOM/CSSOM via APIs provided by the browser.
   - When the DOM/CSSOM changes, the rendering engine updates the visual representation of the page.

---

#### **Key Differences**

| Feature                | Rendering Engine                     | JavaScript Engine                  |
|------------------------|--------------------------------------|------------------------------------|
| **Primary Role**       | Renders and displays the web page.   | Executes JavaScript code.          |
| **Input**              | HTML, CSS, and images.              | JavaScript code.                   |
| **Output**             | Visual layout and styles.           | Dynamic behavior and interactivity.|
| **Examples**           | Webkit, Blink, Gecko, Trident.      | V8, SpiderMonkey, JavaScriptCore.  |
| **Focus**              | Parsing and visual representation.  | Script execution and logic.        |

---

#### **Analogy**
- Think of the **rendering engine** as the **artist** drawing the picture of your website on a canvas.
- The **JavaScript engine** is the **director** telling the artist what to change dynamically (e.g., "Move this box to the right!" or "Make the text red!").

Both are crucial for creating rich, interactive web experiences!
</div>
</details>








### Value vs. Reference 

 Understand how objects, arrays, and functions are copied and passed into functions. Know that the reference is what’s being copied. Understand that primitives are copied and passed by copying the value.

 [Reference](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

### Code Execution in JS

How JavaScript handles code execution through execution contexts and environment records, including features like hoisting, the scope chain, and closures!

 <iframe 
    src="https://www.youtube.com/embed/zdGfo6I1yrA" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  ></iframe>

#### Scope

Understand the difference between global scope, function scope, and block scope. Understand which variables are available where. Know how the JavaScript engine performs variable lookup.

#### Hoisting

 Understand that variable and function declarations are hoisted to the top of their available scope. Understand that function expressions are not hoisted.


#### Closures 

 Know that a function retains access to the scope that it was created in. Know what this enables us to do with our code. Understand that closures allow data hiding, memoization, and dynamic function generation.


### Asynchronous JS 

 Understand the event loop. Understand how the browser deals with user input, web requests, and events in general. Know how to recognize and write asynchronous code. Understand how JavaScript is both asynchronous and single-threaded.

 ####  Event Loop

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <iframe 
    height="800" 
    src="https://www.youtube.com/embed/eiC58R16hb8" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style={{ maxWidth: '100%', height: 'auto' }}
  ></iframe>
</div>



### Explain event loop in Javascript


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
The event loop is a fundamental concept in JavaScript, particularly in the context of asynchronous programming. Understanding the event loop is crucial for grasping how JavaScript handles operations such as I/O, timers, and other asynchronous tasks.

###### The Basics of the Event Loop

JavaScript is single-threaded, meaning it can execute only one task at a time. However, it is designed to handle asynchronous operations efficiently without blocking the execution of other code. This is where the event loop comes into play.

###### Components of the Event Loop

1. **Call Stack**: This is where your code is executed. Functions are pushed onto the stack when they are called and popped off when they return.
   
2. **Web APIs**: These are APIs provided by the browser (or Node.js in the server environment) for performing asynchronous operations like `setTimeout`, `HTTP requests (fetch, XMLHttpRequest)`, `DOM events`, etc.

3. **Callback Queue**: This is where callback functions are queued up to be executed once the call stack is empty.

4. **Event Loop**: The event loop is a loop that continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the queue and pushes it onto the call stack for execution.

###### How the Event Loop Works

1. **Synchronous Code Execution**:
   - JavaScript starts executing code line by line, and synchronous functions are pushed onto the call stack and executed immediately.

2. **Handling Asynchronous Code**:
   - When an asynchronous operation is initiated (e.g., `setTimeout`), the browser API handles it outside the call stack. The main thread continues to execute the next lines of code.
   
   ```javascript
   console.log('Start');

   setTimeout(() => {
     console.log('Timeout callback');
   }, 1000);

   console.log('End');
   ```

3. **Event Loop Check**:
   - Once the synchronous code is executed and the call stack is empty, the event loop checks the callback queue.
   - If there are callbacks in the queue, the event loop pushes them onto the call stack for execution.
   
   In the example above:
   - "Start" is logged.
   - `setTimeout` sets up a timer for 1 second, then the callback is placed in the callback queue.
   - "End" is logged.
   - After 1 second, the callback in the queue is moved to the call stack and executed, logging "Timeout callback".

###### Microtasks and Macrotasks

In addition to the callback queue, there are microtasks (or jobs) which have higher priority than macrotasks.

- **Microtasks**: These include promises' `.then` callbacks and `process.nextTick` in Node.js. Microtasks are processed before the event loop moves to the next iteration.
  
- **Macrotasks**: These include `setTimeout`, `setInterval`, I/O operations, etc.

The event loop always checks and clears all microtasks before handling any macrotasks.

###### Example with Promises

```javascript
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
```

Output:
```
Start
End
Promise
setTimeout
```

1. "Start" is logged.
2. `setTimeout` schedules a macrotask with a delay of 0ms.
3. `Promise.resolve().then` schedules a microtask.
4. "End" is logged.
5. The call stack is now empty, so the event loop checks the microtasks first.
6. The microtask logs "Promise".
7. The event loop then moves to the macrotasks and logs "setTimeout".

###### Summary

- **Call Stack**: Executes functions in a LIFO (Last In, First Out) order.
- **Web APIs**: Handle asynchronous tasks.
- **Callback Queue**: Holds callbacks to be executed by the event loop.
- **Event Loop**: Moves tasks from the callback queue to the call stack when it's empty.
- **Microtasks**: Higher priority tasks processed before macrotasks.

Understanding the event loop helps you write more efficient asynchronous code and avoid common pitfalls such as race conditions and blocking the main thread.
</div>
</details>


####  Promise Execution

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <iframe 
    height="800" 
    src="https://www.youtube.com/embed/Xs1EMmBLpn4" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style={{ maxWidth: '100%', height: 'auto' }}
  ></iframe>
</div>



### this 

 Know the rules of this binding. Know how it works, know how to figure out what it will be equal to in any piece of code, and know why it’s useful.

- [this internal reference](/guides/js/js/#this)

### `new` 

 Know how it relates to object oriented programming. Know what happens to a function called with new and why such a function is known as a constructor. Understand that an object generated by using new inherits from the function’s prototype property.

### `apply, call, bind` 

 Know how each of these functions work. Know how to use them. Know what they do to this.

### Prototypes & Inheritance 

Understand that inheritance in JavaScript works through the [[Prototype]] chain. Understand how to set up inheritance through functions and objects and how new helps us implement it. Know what the __proto__ and prototype properties are and what they do.



### Higher Order Functions 

 Understand that functions are first-class objects in JavaScript and what that means. Know that returning a function from another function is perfectly legal. Understand the techniques that closures and higher order functions allow us to use.

