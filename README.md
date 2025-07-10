**📦 Modules – import & export**

// Exporting
export const name = "Unreal";
export function greet() { return "Hello"; }
export default function sum(a, b) { return a + b; }

// Importing
import { name, greet } from './utils.js';
import sum from './utils.js';

⚙️ Functions

const add = (a, b) => a + b;
const greet = () => console.log("Hi!");
Arrow functions do not have their own this.

**🧱 Objects**

const user = {
  name: "Unreal",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

**Destructuring**
const { name, age } = user;

**🏗️ Classes**

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const p = new Person("Unreal");
p.greet();

**📡 Spread & Rest**

// Spread
const a = [1, 2];
const b = [...a, 3]; // [1, 2, 3]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Rest
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

**🧬 Functions as Values**

const logger = () => console.log("Logged!");
const run = (fn) => fn();

run(logger);

**🧰 Array Operations**

const nums = [1, 2, 3, 4];

// map
const squared = nums.map(n => n * n);

// filter
const even = nums.filter(n => n % 2 === 0);

// reduce
const total = nums.reduce((acc, val) => acc + val, 0);

// forEach
nums.forEach(n => console.log(n));

// find
const firstEven = nums.find(n => n % 2 === 0);

**🧠 Optional Chaining & Nullish Coalescing**

const user = { profile: { name: "Unreal" } };
const name = user?.profile?.name ?? "Guest";
