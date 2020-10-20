---
Title: Typescript –– Compiler
Date: October 19, 2020
---

- Using `tsc --init` will create a tsconfig file, then running `tsc` will manage all TypeScript files within your application
- In tsconfig.json, you can add `"exclude":[]` so tsc would skip during compilation; `"include":[]` does the complete opposite -- `"files":[]` is similar to include except it only targets specific files (usually for smaller projects)
  - `*` is a wild card, and `**/` means any file in any folder with that path
- `"compilerOptions":{}` allows us to control how the TypeScript files compilies
- `"lib":[]` are dependent on `target` if it's commented out unless you defined the indenifiers –– so TypeScript knows what you're doing there
  - "lib": ["dom", "es6", "dom.iterable", "scripthost"] = "target": "es6"; so you could just comment out lib