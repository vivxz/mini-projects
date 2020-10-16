---
Title: Typescript
Date: October 13 - 15, 2020
---

What is TypeScript?
- TypeScript is a JavaScript superset ––– it's a language that builds up on JavaScript that adds new features and advantages
- Browser and node.js doesn't execute TypeScript, therefore it complies to JavaScript
- Forces us write better, cleaner, and less error code
- TypeScript helps us during development by adding an extra step
- JavaScript uses `dynamic types` (resolves at runtime), while TypeScript uses `static types` (set during development)

Notes: 
# basic.ts
- Adding an `! as []` means that it will not yield null
- Added a `:` implies that you are defining the variable type causing us to be very explicit about the types –– :[core types] = special identifier
- Object types in TypScript has key:types pair
- Tuples allows us to use the push() method, but is more strict than an array
- The first variable in the enum object will start at 0 and will increment –– will use for identifiers
- Any doesn't tell TypeScript anything because it doesn't let TypeScript check anything
- Core Types: 
  - number –– 1, 5.3, 10 
  - string –– '', "", ``
  - boolean –– true/false
  # objs-arr-enums.ts
  - object –– {age: 25}
  - array –– [1, 2, 3]
    - any[] –– allows you to have different types in the array; very flexible
    - string[] –– only string types in the array
  - tuple –– [1, 2] : fixed length array
  - enum –– enum {new, old} 
  - any –– * !!! AVOID !!! 
- union –– | : OR –– at least one is true
- literal –– const nuggets: 19 rather than const nuggets: number
  - setting it to a specific value and could be used with unions
# union-aliases.ts
- Use aliases to follow DRY, especially if multiple variables are using the same types
# 
- Adding : after parameter will set the return statement to a type
- If the type of a function is `void`, it just means that it doesn't return anything but is used for console logs
- Undefined is an actual type in TypeScript because it just means that you're not returning anything –– `return;`