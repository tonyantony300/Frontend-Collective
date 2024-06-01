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



### Difference bw let, const and var 


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Comparing Block Scope and Function Scope: Inside a function but outside blocks:

```js
function example() {
    if (true) {
        var functionScoped = "I'm function scoped";
        let blockScoped = "I'm block scoped";
    }
    console.log(functionScoped); // Output: "I'm function scoped"
    console.log(blockScoped); // ReferenceError: blockScoped is not defined
}
example();

```
Outside of functions:

```js
{
    var globalVar = "I'm globally scoped";
    let blockVar = "I'm block scoped";
}
console.log(globalVar); // Output: "I'm globally scoped"
console.log(blockVar); // ReferenceError: blockVar is not defined
```


#### Summary of Differences

1. **Hoisting Behavior**:
   - `var`: Declaration is hoisted to the top of the function or global scope and initialized to `undefined`.
   - `let` and `const`: Declarations are hoisted to the top of the block scope, but not initialized, leading to the Temporal Dead Zone.

2. **Temporal Dead Zone (TDZ)**:
   - `var`: No Temporal Dead Zone; variables are accessible and initialized to `undefined`.
   - `let` and `const`: Have a Temporal Dead Zone; accessing the variable before its declaration results in a `ReferenceError`.

3. **Initialization Requirement**:
   - `var`: Initialization can happen later in the code.
   - `let`: Initialization can happen later, but accessing it before initialization within the block causes an error.
   - `const`: Must be initialized at the point of declaration.

#### Examples Illustrating Hoisting

1. **Function Scope and `var` Hoisting**:

    ```js
    function exampleFunction() {
        console.log(hoistedVar); // Output: undefined
        var hoistedVar = "I'm hoisted";
        console.log(hoistedVar); // Output: "I'm hoisted"
    }
    exampleFunction();
    ```

2. **Block Scope and `let`/`const` Hoisting**:

    ```js
    {
        console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
        let blockScopedLet = "I'm block scoped with let";
        console.log(blockScopedLet); // Output: "I'm block scoped with let"
    }

    {
        console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
        const blockScopedConst = "I'm block scoped with const";
        console.log(blockScopedConst); // Output: "I'm block scoped with const"
    }
    ```



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



#### Step 1: Create a Parent Object Constructor

```javascript
function Animal(name) {
  this.name = name;
}
```
- When you create a new instance of `Animal` using `new Animal('Name')`, the `this` inside the `Animal` constructor refers to the new object being created.
- The line `this.name = name;` sets the `name` property of the new object to the value passed as an argument.

#### Step 2: Add a Method to the Parent Object's Prototype

```javascript
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};
```
- The `makeSound` method is added to `Animal.prototype`.
- When you call `makeSound` on an instance of `Animal` (or any object that inherits from `Animal`), `this` inside the method refers to the object on which the method was called.
- `this.constructor.name` gets the name of the constructor function that created the object, which will be `Animal` or any subclass like `Dog`.

#### Step 3: Create a Child Object Constructor

```javascript
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}
```
- When you create a new instance of `Dog` using `new Dog('Bolt')`, the `this` inside the `Dog` constructor refers to the new object being created.
- `Animal.call(this, name);` calls the `Animal` constructor function with `this` set to the new `Dog` object.
- This means `this.name = name;` inside the `Animal` constructor sets the `name` property of the new `Dog` object to 'Bolt'.

#### Step 4: Set the Child Object's Prototype

```javascript
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
```
- `Object.setPrototypeOf(Dog.prototype, Animal.prototype);` sets up the prototype chain so that `Dog.prototype` inherits from `Animal.prototype`.
- This means any instance of `Dog` will have access to methods defined on `Animal.prototype`, like `makeSound`.

#### Step 5: Add a Method to the Child Object's Prototype

```javascript
Dog.prototype.bark = function () {
  console.log('Woof!');
};
```
- The `bark` method is added to `Dog.prototype`.
- When you call `bark` on an instance of `Dog`, `this` inside the method refers to the `Dog` object on which the method was called.

#### Step 6: Create an Instance of the Child Object

```javascript
const bolt = new Dog('Bolt');
```
- `new Dog('Bolt')` creates a new instance of `Dog`.
- Inside the `Dog` constructor, `Animal.call(this, name)` sets `this.name` to 'Bolt' for the new `Dog` object.

#### Step 7: Call Methods on the Child Object

```javascript
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
```
- `bolt.name` accesses the `name` property of the `bolt` object, which is 'Bolt'.
- `bolt.makeSound()` calls the `makeSound` method from `Animal.prototype`. Here, `this` refers to `bolt`, and `this.constructor.name` is 'Dog', so it logs "The Dog makes a sound."
- `bolt.bark()` calls the `bark` method from `Dog.prototype`. Here, `this` refers to `bolt`, and it logs "Woof!".

#### Summary of `this` in Each Step

1. **Inside `Animal` constructor:** `this` refers to the new `Animal` (or `Dog`) instance being created.
2. **Inside `makeSound` method:** `this` refers to the instance (e.g., `bolt`) on which the method is called.
3. **Inside `Dog` constructor:** `this` refers to the new `Dog` instance being created.
4. **Setting prototypes:** `this` is not directly used.
5. **Inside `bark` method:** `this` refers to the instance (e.g., `bolt`) on which the method is called.



</div>
</details>




### What do you think of AMD vs CommonJS?

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers.

I find AMD syntax to be quite verbose and CommonJS is closer to the style you would write import statements in other languages. Most of the time, I find AMD unnecessary, because if you served all your JavaScript into one concatenated bundle file, you wouldn't benefit from the async loading properties. Also, CommonJS syntax is closer to Node style of writing modules and there is less context-switching overhead when switching between client side and server side JavaScript development.

I'm glad that with ES2015 modules, that has support for both synchronous and asynchronous loading, we can finally just stick to one approach. Although it hasn't been fully rolled out in browsers and in Node, we can always use transpilers to convert our code.

</div>
</details>

### What's a typical use case for anonymous functions?

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

They can be used in IIFEs to encapsulate some code within a local scope so that variables declared in it do not leak to the global scope.

```js
(function () {
  // Some code here.
})();
```

As a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function body.

```js
setTimeout(function () {
  console.log('Hello world!');
}, 1000);
```


</div>
</details>


### How do you organize your code? (module pattern, classical inheritance?)

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

These days, I use React/Redux which utilize a single-directional data flow based on Flux architecture. I would represent my app's models using plain objects and write utility pure functions to manipulate these objects. State is manipulated using actions and reducers like in any other Redux application.

I avoid using classical inheritance where possible.


</div>
</details>


### What's the difference between host objects and native objects?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.

Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.


</div>
</details>

### Difference between: function Person(){}, var person = Person(), and var person = new Person()?

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

This question is pretty vague. My best guess at its intention is that it is asking about constructors in JavaScript. Technically speaking, `function Person(){}` is just a normal function declaration. The convention is to use PascalCase for functions that are intended to be used as constructors.

`var person = Person()` invokes the Person as a function, and not as a constructor. Invoking as such is a common mistake if the function is intended to be used as a constructor. Typically, the constructor does not return anything, hence invoking the constructor like a normal function will return undefined and that gets assigned to the variable intended as the instance.

`var person = new Person()` creates an instance of the Person object using the new operator, which inherits from Person.prototype. An alternative would be to use Object.create, such as: Object.create(Person.prototype).

```js
function Person(name) {
  this.name = name;
}

var person = Person('John');
console.log(person); // undefined
console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined

var person = new Person('John');
console.log(person); // Person { name: "John" }
console.log(person.name); // "john"
```



</div>
</details>


### What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Undeclared variables are created when you assign a value to an identifier that is not previously created using var, let or const. Undeclared variables will be defined globally, outside of the current scope. In strict mode, a ReferenceError will be thrown when you try to assign to an undeclared variable. Undeclared variables are bad just like how global variables are bad. Avoid them at all cost! To check for them, wrap its usage in a try/catch block.

```js
function foo() {
  x = 1; // Throws a ReferenceError in strict mode
}

foo();
console.log(x); // 1
```

A variable that is undefined is a variable that has been declared, but not assigned a value. It is of type undefined. If a function does not return any value as the result of executing it is assigned to a variable, the variable also has the value of undefined. To check for it, compare using the strict equality (===) operator or typeof which will give the 'undefined' string. Note that you should not be using the abstract equality operator to check, as it will also return true if the value is null.

A variable that is null will have been explicitly assigned to the null value. It represents no value and is different from undefined in the sense that it has been explicitly assigned. To check for null, simply compare using the strict equality operator. Note that like the above, you should not be using the abstract equality operator (==) to check, as it will also return true if the value is undefined.

As a personal habit, I never leave my variables undeclared or unassigned. I will explicitly assign null to them after declaring if I don't intend to use it yet. If you use a linter in your workflow, it will usually also be able to check that you are not referencing undeclared variables.

</div>
</details>

### What is a closure, and how/why would you use one?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

A closure is the combination of a function and the lexical environment within which that function was declared. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.

Why would you use one?

Data privacy / emulating private methods with closures. Commonly used in the [module pattern](https://www.patterns.dev/vanilla/module-pattern).


</div>
</details>

### When would you use document.write()??


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">


document.write() writes a string of text to a document stream opened by document.open(). When document.write() is executed after the page has loaded, it will call document.open which clears the whole document (<head> and <body> removed!) and replaces the contents with the given parameter value. Hence it is usually considered dangerous and prone to misuse.

</div>
</details>

### What's the difference between feature detection, feature inference, and using the UA string??


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather crashing/erroring in some browsers. For example:
```js

if ('geolocation' in navigator) {
  // Can use navigator.geolocation
} else {
  // Handle lack of feature
}
```

Feature Inference

Feature inference checks for a feature just like feature detection, This is not really recommended. Feature detection is more foolproof.

UA String - User Agent String

This is a browser-reported string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. It can be accessed via navigator.userAgent. However, the string is tricky to parse and can be spoofed. For example, Chrome reports both as Chrome and Safari. So to detect Safari you have to check for the Safari string and the absence of the Chrome string. Avoid this method.

</div>
</details>

### Explain Ajax in as much detail as possible?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly use JSON instead of XML, due to the advantages of JSON being native to JavaScript.

The `XMLHttpRequest` API is frequently used for the asynchronous communication or these days, the fetch `API`.

</div>
</details>

### What are the advantages and disadvantages of using Ajax?


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Advantages

- Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.
- Reduce connections to the server since scripts and stylesheets only have to be requested once.
- State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.
- Basically most of the advantages of an SPA.

Disadvantages

- Dynamic webpages are harder to bookmark.
- Does not work if JavaScript has been disabled in the browser.
- Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript.
- Webpages using Ajax to fetch data will likely have to combine the fetched remote data with client-side templates to update the DOM. For this to happen, JavaScript will have to be parsed and executed on the browser, and low-end mobile devices might struggle with this.
- Basically most of the disadvantages of an SPA.


</div>
</details>