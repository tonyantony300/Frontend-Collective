---
title: Javascript Chapter 2
description: This should be comprehensive
---

### Event delegation


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:

Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

[Reference 1](https://davidwalsh.name/event-delegate)

[Reference 2](https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation)

</div>
</details>


### this


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The value of `this` depends on how the function is called its (call site).

[Reference](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3)

The following rules are applied:

1) If the new keyword is used when calling the function, this inside the function is a brand new object.

2) If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.

3) If a function is called as a method, such as obj.method() — this is the object that the function is a property of.

4) If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.

5) If multiple of the above rules apply, the rule that is higher wins and will set the this value.

6) If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.

</div>
</details>

### Spread Operator


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Both “rest operator” and “spread operator” refer to the same operator (…), used differently. When you see “rest”, it’s being used to gather up properties. When you see “spread”, it’s spreading them out.


[Reference Applied to Arrays](https://hackernoon.com/javascript-the-spread-operator-a867a71668ca)

[Reference Applied to Objects](https://codeburst.io/master-javascripts-object-spread-operator-3803430e99aa)


</div>
</details>

### Can you give an example of one of the ways that working with this has changed in ES6?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

ES6 allows you to use arrow functions which uses the enclosing lexical scope. This is usually convenient, but does prevent the caller from controlling context via .call or .apply—the consequences being that a library such as jQuery will not properly bind this in your event handler functions. Thus, it's important to keep this in mind when refactoring large legacy applications.

</div>
</details>



### Explain how prototypal inheritance works


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

[Reference](https://www.frontendinterviewhandbook.com/javascript-questions/#can-you-give-an-example-of-one-of-the-ways-that-working-with-this-has-changed-in-es6)

</div>
</details>
