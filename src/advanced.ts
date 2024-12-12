/** Advanced Types
 *
 * Agenda:
 * => Type aliases
 * => Unions and intersections
 * => Type narrowing
 * => Nullable types
 * => The unknown type
 * => The never type
 *
 */

// Type aliases

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employees: Employee = {
  id: 1,
  name: "Milind",
  retire: (Date) => {
    console.log(Date);
  },
};

// Union Types

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10"));

// Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Liberal Types

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable Types

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

// Optional Chaining

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());

// Optional Element access operator
// customer?.[0]

// Optional call
let log: any = null;
log?.("a");

// Nullish Coaelscing Operator

let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, '', false, 0)
  // speed: speed !== null ? speed : 30,
  speed: speed ?? 30,
};

// Type Assertions

// let phone = <HTMLInputElement>document.getElementById("phone");
// HTMLElement or HTMLInputElement is a class defined in JS, that represents any kind of HTML elements.
// phone.value;

// The "unknown" Type

function show(document: unknown) {
  // Narrowing
  if (typeof document === "string") {
    document.toUpperCase();
  }
  // document.move(): // does not exist
  // document.fly(); // does not exist
}

// The "never" Type (not used too often)

// function processEvents(): never {
//   // Infinite Loop
//   while (true) {
//     // Read a message from a queue
//   }
// }

// processEvents();
console.log("Hello World"); // This never gets executed as the infinite loop never returns anything.

// Exercises

// Given the data below, define a type alias for representing users.

type UserData = {
  name: string;
  age: number;
  occupation?: string;
};

let users: UserData[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
];

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thurusday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// Simplify the following code snippets:

// let newUser = getNewUser();
// console.log(newUser?.address?.street);

// let x = foo ?? bar();

// What is the problem in this piece of code?

let value: unknown = "a";
if (typeof value === "string") 
  console.log(value.toUpperCase());
