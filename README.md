# About this repository 🔖

Welcome to my personal notes repository for quick reference! This is a collection of my personal notes on TypeScript that I've gathered as I've learned and worked with the language. This repository is designed to serve as a quick reference guide for me, but I'm happy to share it with anyone who might find it helpful. Please keep in mind that these notes are not comprehensive and are based on my own understanding of TypeScript. They are intended to be a helpful resource for anyone who is just starting out with TypeScript or wants to refresh their knowledge quickly. I hope you find them useful!

## TS-study-guide

TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. It is designed to help developers write more scalable and maintainable code, while still being compatible with existing JavaScript code and tools.

### Section 1: Benefits and Drawbacks

#### Benefits

- Static typing: TypeScript allows developers to define the types of variables, function parameters, and return values, which can help catch errors at compile time instead of runtime.
- Code completion: TypeScript provides better code completion and editor support than vanilla JavaScript, making it easier to write and maintain code.
- Refactoring: TypeScript makes it easier to refactor code by providing better tools for renaming symbols, extracting code into functions, and more.
- Shorthand notations: TypeScript provides shorthand notations for common type patterns, such as arrays, tuples, and objects.

#### Drawbacks

- Always involves a compilation step from TypeScript to JavaScript, which can add extra overhead to the development process.

### Section 2: Getting Started

To start using TypeScript, you'll need to install it and set up a TypeScript project.

#### Installing TypeScript

You can install TypeScript globally using `npm`:

```typescript
 npm install -g typescript
```

#### Compiling TypeScript

To compile a TypeScript file, use the `tsc` command followed by the filename. For example:

```typescript
tsc index.ts
```

This will generate a JavaScript file with the same name as the TypeScript file.

<details>
  <summary>Enabling downloading external packages</summary>
  <pre><code>
            Set-ExecutionPolicy RemoteSigned
 </code></pre>
  <p>
    This will allow you to run scripts downloaded from the internet, including
    package installation scripts. You can also use other execution policies
    based on your security needs.
  </p>
</details>

#### Declaring Variables

To declare a variable with a specific type, use the `let` keyword followed by the variable name, a colon, and the type. For example:

```typescript
let age: number = 20;
```

This declares a variable named `age` with the number type and initializes it to `20`.

You can also declare variables without a type, and TypeScript will infer the type based on the initial value:

```typescript
let name = 'Zeeshan'; // inferred as type string
```

#### Using TypeScript Configurations

TypeScript provides a `tsconfig.json` file for configuring your TypeScript project. You can generate a basic configuration file using the `tsc --init` command, which will create a `tsconfig.json` file in the current directory.

```typescript
tsc --init
```

The `tsconfig.json` file includes a variety of settings that you can configure, such as:

- `target`: the ECMAScript target version
- `rootDir`: the root directory of your TypeScript files
- `outDir`: the output directory for compiled JavaScript files
- `removeComments`: whether to remove comments from compiled JavaScript files
- `noEmitOnError`: whether to stop compilation on errors
- `strict`: whether to enable strict type checking and error reporting

For example, here is a sample `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "removeComments": true,
    "noEmitOnError": true,
    "strict": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true
  }
}
```

#### Arrays

In TypeScript, arrays are a type of object that can hold multiple values of the same type. To declare an array, use the `Array` type followed by the type of the array elements in square brackets. For example:

```typescript
let names: string[] = ['Zeeshan', 'Kamran', 'Usman'];
```

### Arrays

In TypeScript, you can define arrays with a specific data type using the syntax `let myArray: DataType[] = [value1, value2, ...]`. For example:

```typescript
let names: string[] = ['Zeeshan', 'Kamran', 'Usman'];
let ages: number[] = [20, 30, 40];
```

You can also use array methods like `push`, `pop`, `shift`, and `unshift` on arrays:

```typescript
let names: string[] = ['Zeeshan', 'Kamran', 'Usman'];

names.push('Noyan');
console.log(names); // ["Zeeshan", "Kamran", "Usman", "Noyan"]

names.shift();
console.log(names); // ["Kamran", "Usman", "Noyan"]
```

### Tuples

A tuple is an array with a fixed number of elements, where each element may have a different data type. You can define tuples using the syntax `[DataType1, DataType2, ...]`. For example:

```typescript
let person: [string, number] = ['Zeeshan', 30];
```

You can access individual elements in a tuple using their index:

```typescript
console.log(person[0]); // "Zeeshan"
console.log(person[1]); // 30
```

### Enums

An enum is a way to give more friendly names to a set of numeric values. You can define enums using the syntax `enum EnumName { Value1, Value2, ... }`. For example:

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;
console.log(myColor); // 1
```

### Functions

In TypeScript, you can define functions with a specific input and output data type using the syntax `function functionName(parameterName: DataType): ReturnType { ... }`. For example:

```typescript
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(2, 3)); // 5
```

You can also use optional parameters and default parameters in functions:

```typescript
function greet(name: string, greeting: string = 'Hello'): void {
  console.log(`${greeting}, ${name}!`);
}

greet('Zeeshan'); // "Hello, Zeeshan!"
greet('Kamran', 'Hi'); // "Hi, Kamran!"
```

### Objects

In TypeScript, you can define objects with specific property names and data types using the syntax `{ propertyName: DataType, ... }`. For example:

```typescript
let person: { name: string; age: number } = { name: 'Zeeshan', age: 30 };
```

You can access individual properties in an object using dot notation:

```typescript
console.log(person.name); // "Zeeshan"
console.log(person.age); // 30
```
