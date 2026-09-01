// TASK 1
var studentName = "Selvavignesh";
let studentAge = 29;
const collegeName = "PB college of engg";
// console
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);
// Change var
studentName = "Selvavignesh Raman";
// console
console.log("Changed Name:", studentName);
// Change let
studentAge = 28;
// console
console.log("Changed Age:", studentAge);

// Try changing const

try {
    collegeName = "PB college";
} catch (error) {
    console.log("Const Error:", error.message);
}
// Try redeclaring var

var studentName = "Arun";
// console
console.log("Redeclared var:", studentName);

// Try redeclaring let

try {
    eval("let studentAge = 25; let studentAge = 30;");
} catch (error) {
    console.log("Let Redeclaration Error:", error.message);
}



// TASK 2
var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var city = prompt("Enter your city:");
// console
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// TASK 3
var userName = prompt("Enter your name:");
// alert msg
alert("Welcome " + userName + "!");

// TASK 4
var birthYear = prompt("Enter your birth year:");
var currentYear = 2026;
var calculatedAge = currentYear - birthYear;
// console
console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);

// TASK 5

var text = "Hello";
var wholeNumber = 100;
var decimalNumber = 25.5;
var trueValue = true;
var falseValue = false;
var undefinedValue = undefined;
var nullValue = null;
// console
console.log(text, typeof text);
console.log(wholeNumber, typeof wholeNumber);
console.log(decimalNumber, typeof decimalNumber);
console.log(trueValue, typeof trueValue);
console.log(falseValue, typeof falseValue);
console.log(undefinedValue, typeof undefinedValue);
console.log(nullValue, typeof nullValue);

// TASK 6

var student = {
    name: "Selvavignesh Raman",
    age: 29,
    city: "Chennai",
    qualification: "Mechanical engg",
    isStudent: true
};
// console
console.log("Complete Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("Is Student:", student.isStudent);

// TASK 7
var fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];
// console
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Fruits:", fruits.length);

// TASK 8 

let a = 20;
let b = 5;
// console
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// TASK 9

var shirt = 999;
var pant = 1499;
var shoes = 1999;

var totalPrice = shirt + pant + shoes;
// console
console.log("Total:", totalPrice);

// TASK 10 

var tamil = 80;
var english = 75;
var maths = 90;

var totalMarks = tamil + english + maths;
var averageMarks = totalMarks / 3;
// console
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);

// TASK 11
// Predict before running:
// a = 11
// b = 10

let a11 = 10;

let b11 = a11++;
// console
console.log("a:", a11);
console.log("b:", b11);

// TASK 12
// Predict before running:
// a = 11
// b = 11

let a12 = 10;

let b12 = ++a12;
// console
console.log("a:", a12);
console.log("b:", b12);

// TASK 13 
// Predict before running:
// a = 19
// b = 20

let a13 = 20;

let b13 = a13--;
// console
console.log("a:", a13);
console.log("b:", b13);

// TASK 14 
// Predict before running:
// a = 19
// b = 19

let a14 = 20;

let b14 = --a14;
// console
console.log("a:", a14);
console.log("b:", b14);

// TASK 15 
// Predict before running:
//
// a = 7
// b = 4
// c = 7
// d = 5

let a15 = 5;

let b15 = a15++;

let c15 = ++a15;

let d15 = b15--;
// console
console.log("a:", a15);
console.log("b:", b15);
console.log("c:", c15);
console.log("d:", d15);

// TASK 16
// +=
let num1 = 10;
num1 += 5;
// console
console.log("+= :", num1);
// -=
let num2 = 10;
num2 -= 5;
// console
console.log("-= :", num2);
// *=
let num3 = 10;
num3 *= 5;
// console
console.log("*= :", num3);
// /=
let num4 = 10;
num4 /= 5;
// console
console.log("/= :", num4);
// %=
let num5 = 10;
num5 %= 3;
// console
console.log("%= :", num5);
// **=
let num6 = 10;
num6 **= 2;
// console
console.log("**= :", num6);
// TASK 17 
var Name = "Selvavignesh Raman";
var Age = 28;
var City = "Chennai";
var College = "PB college of engg";
var subjects = [
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Computer Science"
];
var studentProfile = {
    name: Name,
    age: Age,
    city: City,
    subjects: subjects,
    isStudent: true
};
// console
console.log("Student Name:", Name);
console.log("Student Age:", Age);
console.log("City:", City);
console.log("First Subject:", subjects[0]);
console.log("Last Subject:", subjects[subjects.length - 1]);
console.log("Total Subjects:", subjects.length);
console.log("Complete Object:", studentProfile);

// FINAL CHALLENGE — User + Calculator
var number1 = prompt("Enter first number:");
var number2 = prompt("Enter second number:");

number1 = Number(number1);
number2 = Number(number2);
// console
console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);
console.log("Modulus:", number1 % number2);
console.log("Power:", number1 ** number2);