// JavaScript Practice Tasks
// 🟢 Task 1 — For Loop

// order print in num 1 to 10
for(let i=0; i<=10; i++){
console.log(i);
}

// 🟢 Task 2 — Reverse Number

// reverse print num 10 to 1
for(let i=10; i>=0; i--){
    console.log(i);
}

// 🟢 Task 3 — Even Numbers

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 🟢 Task 4 — Odd Numbers

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 🟡 Task 5 — Multiplication Table

// this task is used to two type of method in this multiplication table method

// method:1
const num=4;
// method:2
// const num = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 🔵 While Loop
// Task 6 — Countdown
// decrease the number
let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}

// increase the number

let counts = 1;

while(counts <=10){
    console.log(counts);
    counts++;
}


// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum);

// 🟣 Do While
// Task 8 — Print Numbers
// Use do...while to print:

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);


// Task 9 — Do While Understanding
// What is the output?
let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

// 🟠 For...of
// Your notes use for...of with strings and arrays.
// Task 10 — String Characters
let name = "javascript Assignment";

for (const char of name) {
  console.log(char);
}

// Task 11 — Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Task 12 — Student Names
const students = ["Arun", "Priya", "Rahul", "Ananya", "Karthik"];

for (const name of students) {
  console.log(`Student: ${name}`);
}

// 🔴 For...in Your notes use for...in for objects.
// Task 13 — Employee Object

let employee = {
  name: "Arun",
  age : 25,
  role: "Developer",
  city: "Chennai"
};

for (const key in employee) {
  console.log(`${key} : ${employee[key]}`);
}


// Task 14 — Product Object
const product = {
  productName: "Wireless Headphones",
  price: 4999,
  brand: "Sony",
  category: "Electronics",
  stock: 25
};

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}

// 🟡 Functions
// Task 15 — Simple Function

function welcome() {
  console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// Task 16 — Function With Parameter
// Create:
function greet(name) {
    // code
    console.log(`Hello ${name}`);//This is console code
}
Call:
greet("Naveen");
greet("Arun");
greet("Priya");


// Task 17 — Multiple Parameters
// Create a function:
function student(name, age, department) {
  console.log(`Name: ${name}, Age: ${age}, Department: ${department}`);
}

student("Arun", 20, "Computer Science");
student("Priya", 21, "Information Technology");
student("Karthik", 19, "Mechanical Engineering");

// 🔵 Return
// Task 18 — Addition Function
// Create:
function add(a, b) {
    console.log(a+b); // return result
}
// Call:
let result = add(10, 20);
console.log(result);


// Task 19 — Salary
// Create:
function salary(amount) {
    return amount;
}
let mySalary = salary(50000);
console.log(mySalary);

// Task 20 — Bonus Calculator
// Create:
function bonus(salary, bonusAmount) {
  return salary + bonusAmount;
}

let total = bonus(50000, 5000);
console.log(`Total = ${total}`);

// 🟣 Default Parameter
// Task 21
// Create:
function employee(name, role = "Developer") {
    console.log(`${name} - ${role}`);// print name and role
}

employee("Arun");
employee("Priya", "Designer");

// 🔥 Function Types
// Task 22 — Named Function
// Create a named function:
function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(7));
console.log(square(10));
console.log(square(12));

// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
let calculate = function(a, b) {
    return a + b;
};
let result = calculate(15, 25);
console.log(result);

// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4,5));

// 🔴 Scope
// Task 25 — Predict the Output
function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);//ReferenceError: b is not defined.
    console.log(c);// never run before line is error so this line is not run
}

test();

// 🟠 Hoisting
// Task 26 — Predict
var a;             // Hoisted and initialized to undefined
console.log(a);    // Prints: undefined
a = 10;            // Assignment happens here

// Task 27
// Predict:
console.log(b);//ReferenceError: Cannot access 'b' before initialization

let b = 20;

// Task 28
// Predict:
console.log(c);//ReferenceError: Cannot access 'c' before initialization

const c = 30;

// 🟢 IIFE//
// Task 29 — Self Invoking Function//
// Create an IIFE that immediately prints://
// 1. Simple IIFE
(function () {
  console.log("Welcome to JavaScript");
})();
// 2. IIFE with Parameters (product, discount)
// product
// discount
(function (product, discount) {
  console.log(`Product: ${product} | Discount: ${discount}%`);
})("Smartphone", 10);

// 🔵 Callback / Higher-Order Function//
// Task 30//
// Create:
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

// print: welcome


// 🟣 Generator Function//
// Task 31 — Cashback//
// Create a generator:
function* cashback() {
  yield "10% cashback";
  yield "20% cashback";
  yield "30% cashback";
  yield "Better luck next time";
}

// 1. Create the generator object
const rewards = cashback();

// 2. Iterate through all yielded values
for (const reward of rewards) {
  console.log(reward);
}


// 🏆 FINAL MINI PROJECT//
// Task 32 — Employee Management Console//
// EMPLOYEE MANAGEMENT CONSOLE//

// Employee Data//
let employees = [
  {
    name: "Arun",
    age: 25,
    department: "IT",
    role: "Developer",
    salary: 40000
  },
  {
    name: "Priya",
    age: 24,
    department: "HR",
    role: "HR Executive",
    salary: 35000
  },
  {
    name: "Karthik",
    age: 28,
    department: "Finance",
    role: "Analyst",
    salary: 45000
  }
];

// 8. Generator
function* employeeBenefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}

// 5. Return
function getSalary(emp) {
  return emp.salary;
}

//7. Arrow function
const calculateAppraisal = (salary) => salary * 0.10;

// 3. Function && 4. Function parameters
function displayEmployeeInfo(emp) {
  console.log(`--- Details for ${emp.name} ---`);

  // 2. for...in
  for (const key in emp) {
    console.log(`  ${key}: ${emp[key]}`);
  }

  // 5. Return && 6. Condition
  const currentSalary = getSalary(emp);
  if (currentSalary >= 40000) {
    console.log(`  Status: High-bracket earner (Salary >= 40000)`);
  } else {
    console.log(`  Status: Standard-bracket earner`);
  }

  // Calling arrow function
  const bonus = calculateAppraisal(currentSalary);
  console.log(`  Estimated 10% Appraisal: ${bonus}`);
}

// 1. for...of
console.log("=== EMPLOYEE DIRECTORY ===");
for (const employee of employees) {
  displayEmployeeInfo(employee);
}

// Displaying Generator Output
console.log("\n=== COMPANY BENEFITS LIST ===");
const benefits = employeeBenefits();
for (const benefit of benefits) {
  console.log(`- ${benefit}`);
}

