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

1) If the `new` keyword is used when calling the function, this inside the function is a brand new object.

2) If `apply, call, or bind` are used to call/create a function, this inside the function is the object that is passed in as the argument.

3) If a function is called as a method, such as obj.method() — `this` is the object that the function is a property of.

4) If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the `window` object. If in strict mode (`'use strict'`), this will be `undefined` instead of the global object.

5) If multiple of the above rules apply, the rule that is higher wins and will set the this value.

6) If the function is an ES2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.

</div>
</details>

### Spread Operator


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Both “rest operator” and “spread operator” refer to the same operator (…), used differently. When you see “rest”, it’s being used to gather up properties. When you see “spread”, it’s spreading them out.

Spreading Function Arguments example

```js
function calculateSum(... numbers) {
return numbers. reduce( (sum, num) => sum + num, 0);
}
const result = calculateSum(1, 2, 3, 4, 5);
```


[Reference Applied to Arrays](https://hackernoon.com/javascript-the-spread-operator-a867a71668ca)

[Reference Applied to Objects](https://codeburst.io/master-javascripts-object-spread-operator-3803430e99aa)

[Function arg spreading](https://medium.com/@rabailzaheer/unpacking-javascript-spread-operator-and-rest-parameters-advanced-techniques-f73f2fa41cf3)


</div>
</details>


### In JS, is functions is an Object?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Yes, in JavaScript, functions are indeed objects. This is one of the features of JavaScript's flexible and dynamic nature. Specifically, functions in JavaScript are first-class objects, which means they can be:

1. **Assigned to variables**:
   ```javascript
   let myFunction = function() {
       console.log("Hello, world!");
   };
   ```

2. **Passed as arguments to other functions**:
   ```javascript
   function callFunction(fn) {
       fn();
   }
   
   callFunction(myFunction);
   ```

3. **Returned from other functions**:
   ```javascript
   function createFunction() {
       return function() {
           console.log("Function created and called!");
       };
   }
   
   let newFunction = createFunction();
   newFunction();
   ```

4. **Have properties and methods**:
   ```javascript
   function example() {
       console.log("This is an example function.");
   }
   
   example.description = "This function is just an example.";
   
   console.log(example.description); // Outputs: This function is just an example.
   ```

Functions are objects in the sense that they have properties and methods. Every function has properties like `length` and `name`, and can have custom properties. Moreover, functions also have methods such as `call`, `apply`, and `bind`.

Here’s a quick demonstration:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(typeof greet); // Outputs: function
console.log(greet instanceof Object); // Outputs: true

// Adding a property to the function
greet.description = "This function greets a person.";
console.log(greet.description); // Outputs: This function greets a person.

// Using a method available on function objects
const greetJohn = greet.bind(null, "John");
console.log(greetJohn()); // Outputs: Hello, John!
```

As you can see, the function `greet` can have properties (like `description`), and can use methods (`bind` in this case) just like any other object in JavaScript. This demonstrates the object nature of functions in JavaScript.

</div>
</details>


### Can you give an example of one of the ways that working with this has changed in ES6?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

ES6 allows you to use arrow functions which uses the `enclosing lexical scope.` This is usually convenient, but does prevent the caller from controlling context via `.call or .apply`—the consequences being that a library such as jQuery will not properly bind this in your event handler functions. Thus, it's important to keep this in mind when refactoring large legacy applications.

tip: To determine `this`, go one line above the arrow function’s creation and see what the value of this is there. It will be the same in the arrow function.

</div>
</details>



### What's the difference between `.call` and `.apply`?

`Function.prototype.call()` or `Function.prototype.apply()`

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Both `.call` and `.apply` are used to invoke functions and the first parameter will be used as the value of this within the function. However, `.call` takes in comma-separated arguments as the next arguments while `.apply` takes in an array of arguments as the next argument. An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments.

```js

function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3

```

</div>
</details>



### Explain `Function.prototype.bind`


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Taken word-for-word from MDN:

The `bind()` method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
In my experience, it is most useful for binding the value of this in methods of classes that you want to pass into other functions. This is frequently done in React components.

Example:

```js
function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
```

</div>
</details>



### Explain inheritence

Inheritance in JavaScript can be achieved through a mechanism called "constructor chaining" or "pseudo-classical inheritance". This is where one constructor function calls another constructor function to reuse code and inherit properties.

```js
function Animal(name) {
    this.name = name;
}
function Dog(name) {
    Animal.call(this, name); // Call the parent constructor.
}

const bolt = new Dog('Bolt');

console.log(bolt); 
```



### Explain how prototypal inheritance works

When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain.

Example

```js
/function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Create a new instance of Dog.
const bolt = new Dog('Bolt');


bolt.makeSound(); // "The Dog makes a sound."
```

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

[Reference](https://www.frontendinterviewhandbook.com/javascript-questions/#can-you-give-an-example-of-one-of-the-ways-that-working-with-this-has-changed-in-es6)



### Step 1: Create a Parent Object Constructor

```javascript
function Animal(name) {
  this.name = name;
}
```
- When you create a new instance of `Animal` using `new Animal('Name')`, the `this` inside the `Animal` constructor refers to the new object being created.
- The line `this.name = name;` sets the `name` property of the new object to the value passed as an argument.

### Step 2: Add a Method to the Parent Object's Prototype

```javascript
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};
```
- The `makeSound` method is added to `Animal.prototype`.
- When you call `makeSound` on an instance of `Animal` (or any object that inherits from `Animal`), `this` inside the method refers to the object on which the method was called.
- `this.constructor.name` gets the name of the constructor function that created the object, which will be `Animal` or any subclass like `Dog`.

### Step 3: Create a Child Object Constructor

```javascript
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}
```
- When you create a new instance of `Dog` using `new Dog('Bolt')`, the `this` inside the `Dog` constructor refers to the new object being created.
- `Animal.call(this, name);` calls the `Animal` constructor function with `this` set to the new `Dog` object.
- This means `this.name = name;` inside the `Animal` constructor sets the `name` property of the new `Dog` object to 'Bolt'.

### Step 4: Set the Child Object's Prototype

```javascript
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
```
- `Object.setPrototypeOf(Dog.prototype, Animal.prototype);` sets up the prototype chain so that `Dog.prototype` inherits from `Animal.prototype`.
- This means any instance of `Dog` will have access to methods defined on `Animal.prototype`, like `makeSound`.

### Step 5: Add a Method to the Child Object's Prototype

```javascript
Dog.prototype.bark = function () {
  console.log('Woof!');
};
```
- The `bark` method is added to `Dog.prototype`.
- When you call `bark` on an instance of `Dog`, `this` inside the method refers to the `Dog` object on which the method was called.

### Step 6: Create an Instance of the Child Object

```javascript
const bolt = new Dog('Bolt');
```
- `new Dog('Bolt')` creates a new instance of `Dog`.
- Inside the `Dog` constructor, `Animal.call(this, name)` sets `this.name` to 'Bolt' for the new `Dog` object.

### Step 7: Call Methods on the Child Object

```javascript
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
```
- `bolt.name` accesses the `name` property of the `bolt` object, which is 'Bolt'.
- `bolt.makeSound()` calls the `makeSound` method from `Animal.prototype`. Here, `this` refers to `bolt`, and `this.constructor.name` is 'Dog', so it logs "The Dog makes a sound."
- `bolt.bark()` calls the `bark` method from `Dog.prototype`. Here, `this` refers to `bolt`, and it logs "Woof!".

### Summary of `this` in Each Step

1. **Inside `Animal` constructor:** `this` refers to the new `Animal` (or `Dog`) instance being created.
2. **Inside `makeSound` method:** `this` refers to the instance (e.g., `bolt`) on which the method is called.
3. **Inside `Dog` constructor:** `this` refers to the new `Dog` instance being created.
4. **Setting prototypes:** `this` is not directly used.
5. **Inside `bark` method:** `this` refers to the instance (e.g., `bolt`) on which the method is called.



</div>
</details>
