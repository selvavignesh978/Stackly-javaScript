// Task 1 — Variables

// 1. Initial - Value
var studentName = "Selvavignesh Raman";
let age = 29;
const city = "Chennai";
const college = "PB college of engg";
// console
console.log("--- Initial Values ---");
console.log("Name:", studentName);
console.log("Age:", age);
console.log("City:", city);
console.log("College:", college);

// 2.Reassigning - Values
// Reassigning -> var  
studentName = "selvavignesh";

// Reassigning -> let
age = 30;

console.log("\n--- After Updating var and let ---");
console.log("Updated Name (var):", studentName);
console.log("Updated Age (let):", age);

// Reassigning -> const 
try {
  city = "Mumbai";
} catch (error) {
  console.log("\nError when reassigning const (city):", error.message);
  // Output: Assignment to constant variable.
}

// 3. Redeclaring - Value

// Redeclaring -> var 
var studentName = "Vikram";
console.log("\nRedeclared Name (var):", studentName);

// Redeclaring -> let 
let ageNum = 22; 
console.log("\nRedeclared Name (var):", ageNum);

// Redeclaring -> const
const cityLocation = "Delhi"; 
console.log("\nRedeclared Name (var):", cityLocation);

// =====================================================//

// Task 2 — Printing Statements

// 1. console.log()
const username = "Selvavignesh Raman";
console.log("Welcome to JavaScript debugging, " + username + "!");

// 2. alert()
alert("Hello! This is a simple notification popup.");

// 3. confirm()
const wantsToProceed = confirm("Do you want to save your changes?");
console.log("User clicked OK?", wantsToProceed);

// 4. prompt()
const userCity = prompt("Enter your current city:", "Delhi");
console.log("User's City:", userCity);

//  document.writeln()
document.writeln("<h1>JavaScript Output Demonstration</h1>");
document.writeln("<p>This text was directly inserted onto the web page using document.writeln().</p>");

// ====================================================//

// Task 3 — User Details

// 1.  Details from - User  prompt()

const userName = prompt("Enter your Name:");
const ageInput = prompt("Enter your Age:");
const City = prompt("Enter your City:");
const qualification = prompt("Enter your Qualification:");

// prompt() returns all values as Strings.
// Convert age to a Number for accurate data handling:
const Age = Number(ageInput);

// 2. Print Details  Console
console.log("===============================");
console.log("        USER PROFILE           ");
console.log("===============================");
console.log("Name          :", userName);
console.log("Age           :", Age);
console.log("City          :", City);
console.log("Qualification :", qualification);
console.log("===============================");

// Optional: Printing in a clean single-sentence format using Template Literals
console.log(`\nSummary: ${userName}, aged ${age}, lives in ${city} and holds a qualification in ${qualification}.`);

// Optional Pro-Tip: Displaying the data cleanly as a table
console.table({
  Name: userName,
  Age: age,
  City: city,
  Qualification: qualification
});

// Task 4 — Find Data Types

// 1. Variable Declarations

const language = "JavaScript";
const intNumber = 100;
const floatNumber = 99.5;
const isCodingFun = true;
const isFinished = false;
let notAssigned = undefined;
const emptyValue = null;

// 2. Print Values and Identify Data Types

console.log("--- Data Types Demonstration ---");

console.log("Value:", language, "-> Type:", typeof language);
console.log("Value:", intNumber, "-> Type:", typeof intNumber);
console.log("Value:", floatNumber, "-> Type:", typeof floatNumber);
console.log("Value:", isCodingFun, "-> Type:", typeof isCodingFun);
console.log("Value:", isFinished, "-> Type:", typeof isFinished);
console.log("Value:", notAssigned, "-> Type:", typeof notAssigned);
console.log("Value:", emptyValue, "-> Type:", typeof emptyValue);

// Optional: Clean summary table view
console.log("\n--- Summary Table ---");
console.table([
  { Value: language, Type: typeof language },
  { Value: intNumber, Type: typeof intNumber },
  { Value: floatNumber, Type: typeof floatNumber },
  { Value: isCodingFun, Type: typeof isCodingFun },
  { Value: isFinished, Type: typeof isFinished },
  { Value: notAssigned, Type: typeof notAssigned },
  { Value: String(emptyValue), Type: typeof emptyValue }
]);

// Task 5 — Student Array

// 1. Create the Student Array

let students = ["selva","Arun", "Priya", "Kumar", "Divya", "Rahul"];

// 2. Access and Print Required Elements

// First student (index 0)
console.log("First student:", students[0]);

// Second student (index 1)
console.log("Second student:", students[1]);

// Last student (using array.length - 1)
console.log("Last student:", students[students.length - 1]);

// Total students (array.length)
console.log("Total students:", students.length);

// Task 6 — Employee Object

// 1. Create the Employee Object

const employee = {
  name: "Selvavignesh Raman",
  age: 29,
  role: "Frontend Developer",
  skills: ["JavaScript", "HTML", "CSS", "React","mangooDB"],
  isWorking: true,
  qualification: ["10th", "12th","BE", "B.Tech"]
};


// 2. Access and Print Required Details

// Employee name
console.log("Employee Name     :", employee.name);

// Age
console.log("Age               :", employee.age);

// Role
console.log("Role              :", employee.role);

// First skill (Index 0 of the skills array)
console.log("First Skill       :", employee.skills[0]);

// Last qualification (array.length - 1 of qualification array)
console.log("Last Qualification:", employee.qualification[employee.qualification.length - 1]);

// Working status
console.log("Working Status    :", employee.isWorking);

// Task 7 — Calculator

// 1. Declare Initial Variables

let a = 20;
let b = 5;

// 2. Perform and Print Calculations

console.log("Values: a =", a, ", b =", b);
console.log("-------------------------------");

// Addition (+)
console.log("Addition (a + b)       :", a + b);

// Subtraction (-)
console.log("Subtraction (a - b)    :", a - b);

// Multiplication (*)
console.log("Multiplication (a * b) :", a * b);

// Division (/)
console.log("Division (a / b)       :", a / b);

// Modulus (%) -> Gives the remainder
console.log("Modulus (a % b)        :", a % b);

// Exponentiation (**) -> a raised to the power of b
console.log("Exponentiation (a ** b):", a ** b);


// Task 8 — Shopping Bill

//  Declare Item Prices

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

//  Calculate Total Price

let totalPrice = shirt + pant + shoes + bag;

//  Print the Bill Details

console.log("--- Shopping Bill ---");
console.log("Shirt : ₹" + shirt);
console.log("Pant  : ₹" + pant);
console.log("Shoes : ₹" + shoes);
console.log("Bag   : ₹" + bag);
console.log("---------------------");
console.log("Total Price : ₹" + totalPrice);


// Task 9 — Increment & Decrement
// Find the output without running the code first.
// A->Post-Increment
let a = 10;

let b = a++;

console.log(a);
console.log(b);
console.log("Post-Increment (a++)");
// B->Pre-Increment
let a = 10;

let b = ++a;

console.log(a);
console.log(b);
console.log("Pre-Increment (++a)");

// C->Post-Decrement (a--)
let a = 10;

let b = a--;

console.log(a);
console.log(b);
console.log("Post-Decrement (a--)");
// D ->Pre-Decrement (--a)
let a = 10;

let b = --a;

console.log(a);
console.log(b);
console.log("Pre-Decrement (--a)");

// Task 10
// Assignment Operator Tasks

// Initial value
let num = 10;
console.log("Initial value:", num);
console.log("-----------------------");

//  Addition  (num = num + 5)
num += 5;
console.log("After num += 5  :", num);

//  Subtraction  (num = num - 3)
num -= 3;
console.log("After num -= 3  :", num);

//  Multiplication  (num = num * 2)
num *= 2;
console.log("After num *= 2  :", num);

//  Division  (num = num / 4)
num /= 4;
console.log("After num /= 4  :", num);

//  Modulus  (num = num % 3)
num %= 3;
console.log("After num %= 3  :", num);

//  Exponentiation  (num = num ** 2)
num **= 2;
console.log("After num **= 2 :", num);



// Task 11 — Find Output
// Comparison Operator Tasks
// Your notes cover <, >, <=, >=, ==, !=, ===, and !==.

// Predict the result:

console.log(10 > 5);//True
console.log(10 < 5);//False
console.log(10 >= 10);//true
console.log(10 <= 9);//false
console.log(5 == "5");//true
console.log(5 === "5");//false
console.log(10 != "10");//false
console.log(10 !== "10");//true


// Task 12 — AND
//  Logical Operator Tasks
// Find the output:

console.log(true && true);//True
console.log(true && false);//False
console.log(false && true);//False
console.log(false && false);//False

// Task 13 — OR

console.log(true || true);//True
console.log(true || false);//True
console.log(false || true);//True
console.log(false || false);//False



// Task 14 — NOT

console.log(!true);//False
console.log(!false);//True
console.log(!(5 > 10));//True
console.log(!(10 > 5));//false

//  Task 15 — Combination
// Find the output without executing:

console.log(5 == "5" && !(5 === 5) || 6 > 7);//false
console.log(10 > 5 && 8 < 12 || 4 === "4");//true
console.log(7 === 7 && 10 != "10" || 5 >= 5);//true
console.log(15 < 10 || 20 > 15 && 5 == "5");//true


// Task 16 — Voting
// Ternary Operator Tasks
let age = 20;

// Syntax: condition ? expressionIfTrue : expressionIfFalse;
let result = age >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result);

// Task 17 — Password

let password = true;

// Syntax: condition ? expressionIfTrue : expressionIfFalse;
let loginStatus = password ? "Login successful" : "Wrong password";

console.log(loginStatus);



 
// Task 18 — User Introduction
// Concatenation & Template String
//  Variable Declarations

let name = "selvavignesh Raman";
let age = 29;
let city = "chennai";

//Using the + Operator (Concatenation)
let introConcat = "My name is " + name + ". I am " + age + " years old. I live in " + city + ".";
console.log("Using + operator:");
console.log(introConcat);

//Using Template Literals (${})
let introTemplate = `My name is ${name}. I am ${age} years old. I live in ${city}.`;
console.log("\nUsing template literals:");
console.log(introTemplate);



// Task 19 — String Conversion
//  Type Casting Tasks
//  Array of values to convert

let values = [100, true, undefined, null, [1, 2]];

//  Convert and Print Results

console.log("--- String Conversion Results ---");

values.forEach((val) => {
  let converted = String(val);
  console.log(`Original: ${JSON.stringify(val)} | Converted: "${converted}" | typeof: ${typeof converted}`);
});

// Task 20 — Number Conversion
// Predict the output:
console.log(Number());//0
console.log(Number(""));//0
console.log(Number("123"));//123
console.log(Number("a1"));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(undefined));//NaN
console.log(Number(null));//0



// Task 21 — Boolean Conversion
// Predict:
console.log(Boolean());//false
console.log(Boolean(""));//false
console.log(Boolean("hello"));//True
console.log(Boolean(123));//True
console.log(Boolean(true));//True
console.log(Boolean(false));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean([]));//True
console.log(Boolean({}));//True


// Task 22 — Voting Eligibility
// Flow Control Tasks
// Get age and convert to a number

let userAge = Number(prompt("Enter your age:"));

if (userAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// Task 23 — Positive or Negative

let num = Number(prompt("Enter a number:"));

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Task 24 — Grade System

let marks = Number(prompt("Enter your marks (0-100):"));

if (marks >= 90 && marks <= 100) {
  console.log("A Grade");
} else if (marks >= 80 && marks < 90) {
  console.log("B Grade");
} else if (marks >= 70 && marks < 80) {
  console.log("C Grade");
} else if (marks >= 60 && marks < 70) {
  console.log("D Grade");
} else if (marks >= 0 && marks < 60) {
  console.log("Fail");
} else {
  console.log("Invalid marks entered");
}

// Task 25 — Job Eligibility
// Nested If Task

let candidateAge = Number(prompt("Enter your age:"));
let candidateHeight = Number(prompt("Enter your height in cm:"));
let candidateWeight = Number(prompt("Enter your weight in kg:"));

if (candidateAge >= 18) {
  if (candidateHeight >= 160) {
    if (candidateWeight >= 60) {
      console.log("Congratulations! You are selected");
    } else {
      console.log("Rejected: Weight must be at least 60 kg");
    }
  } else {
    console.log("Rejected: Height must be at least 160 cm");
  }
} else {
  console.log("Rejected: Age must be at least 18 years");
}


// Task 26 — Traffic Light
//  Switch Tasks

// Red , Yellow and Green

let lightColor = prompt("Enter traffic light color (red, yellow, green):").toLowerCase().trim();

switch (lightColor) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid light color");
    break;
}

// Task 27 — Day

let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
    break;
}



// Task 28 — Student Result System
// FINAL MINI PROJECT
// Step 1 — Get User Details

let studentName = prompt("Enter your Name:");
let age = Number(prompt("Enter your Age:"));
let city = prompt("Enter your City:");

// Step 2 — Get Marks

let tamil = Number(prompt("Enter Tamil marks (0-100):"));
let english = Number(prompt("Enter English marks (0-100):"));
let maths = Number(prompt("Enter Maths marks (0-100):"));

// Step 3 — Calculate Total & Average

let total = tamil + english + maths;
let average = total / 3;

// Step 4 — Check Result (Grade Calculation)

let grade;

if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "Fail";
}

// Step 5 — Check Voting Eligibility

let voting = age >= 18 ? "Eligible" : "Not Eligible";

// Step 6 — Display Using Template String

let resultReport = `
Name: ${studentName}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`;

console.log(resultReport);

//  display  the page on easy reading
alert(resultReport);