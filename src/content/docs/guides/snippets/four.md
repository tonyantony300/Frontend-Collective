---
title: Level 4
description: Closure, Debounce, Throttling
---

### Closure

```
function outerFunction(){
    const test = "This is a messgae from the outer context"
    
    function innerFunction(){
      console.log(test)  
    }
    
    return innerFunction
}

const closure = outerFunction();

closure();

```

### Debounce

```
const debounce = (func, delay = 300) =>{
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() =>{
            func.apply(this,args)
        }, delay)
    }
}

const saveInput = (name) =>{
   console.log('Save input', name) 
}

const processChange = debounce(saveInput, 2000)


processChange("Foo");
processChange("Foo");
processChange("Foo");
processChange("Foo");
```

### Throttling

### polyfill for Map

### polyfill for ForEach

### polyfill for Filter

### polyfill for Reduce

