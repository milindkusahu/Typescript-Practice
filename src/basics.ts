let sales: number = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level; // By default any type

function render(document: any) {
  console.log(document);
}

// Arrays

let numbers: number[] = [1, 2, 3, 4];

// Tuples

let user: [number, string] = [1, "Milind"]; // Useful when we have two values

// Enums

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Functions

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022);

// Objects

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Milind",
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee.id = 0; Error

// Excercises

// For each of these values, what type will the TypeScript compiler infer?

// number
let a = 100;
// string
let b = "Coffee";
// boolean[]
let c = [true, false, false];
// {age: 20}
let d = { age: 20 };
// number[]
let e = [3];
// any
let f;
// any[]
let g = [];

// What are the compilation errors in each of the following code snippets?

let song: {
  title: string;
  releaseYear: number;
} = { title: "My song" };

// Property releaseYear is not given when initializing the object.

let prices = [100, 200, 300];
prices[0] = "$100";

// We’ve declared a number[] but we’re trying to store a string in this array.

function myFunc(a: number, b: number): number {}

// myFunc is expected to return a number but nothing is returned.

