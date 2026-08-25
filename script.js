// JavaScript Basics — 50 Questions
// Variables

// 1)What is a variable in JavaScript?
    // A name container to store the data in value 
       //(eg)
        let score = 50; //"score" store the value is 50

// 2)What are the three keywords used to create variables?
    //   var , let , const  
    //   (eg) //assign the value
            var name = "selva";
            let age = 20;
            const idNum = 2345;

// 3)Write the syntax to create a variable using var.
            // var variableName = value;
               var   user = "selva";

// 4)Write the syntax to create a variable using let.
            // let variableName = value;
               let   count = 10;

// 5)Write the syntax to create a variable using const. 
            // const variableName = value;
                const  taxRate = 0.18;
                
// 6)What is declaration?
    // registering the variableName progarm memory without assign the value
     let total ; // declaration

// 7)What is initialization?
    // Assigning a inital value declaration variable in firt time
    //  let total ; // declaration
     total = 100; // initialization
     console.log(total);
// 8)What is reassignment?
    // overwrite the exsiting value to store the data
     let point = 26;
       point = 45;//reassignment
       console.log(point);
// 9)What is redeclaration?
    // Declaring an existing variable name a second time using a keyword.
      var scores = 10;
      var scores = 20; // Redeclaration (allowed only with var)
      console.log(scores);
// 10)hich keyword allows redeclaration?
    // var
       var a = 5;
       var a = 15; // Works without error
       console.log(a);
// 11)Which keyword allows reassignment?
    // let and var 
       var x = 10;
       x = 20; // Allowed
       console.log(x);
       let y = 30;
       y = 40; // Allowed
       console.log(y)
// 12)Which keyword requires initialization when declared?
    //  const
    const packageNum = 3.14; // Valid
    // const packageNum;     // SyntaxError: Missing initializer in const declaration
    console.log(packageNum)
//13) Identify the declaration and initialization:
       // let age = 25;
    //    answer : age= declaration
        //    25 = initialization

// 14)What is the value of a?
      var b = 100; 
      console.log(b); // Output: 100
// 15)Change the value of this variable to 200:
      let number = 100;
      number= 200;
console.log(number);// value change
// var
// 16)What will be the output?
      var c = 10;
      console.log(c); // answer=10

//17) What will be the output?
      var d = 10;
      d = 20;
      console.log(d); // output = 20
// 18)What will be the output?
      var e = 10;
      var e = 30;
      console.log(e);  // output = 30
// 19)Write a var variable named name with the value "John".
    var names = "selva";
    console.log(names);
// 20)Create a var variable named price with the value 500.
   var pricess = 500;
   console.log(pricess);
   
// 21)Reassign price from 500 to 1000.
    var priceNum = 500;
    priceNum = 1000;
    console.log(priceNum);
    
//22) What will be the output?
var N = 50;
N = 100;
console.log(N);// output = 100
// 23)Can a var variable be reassigned?
    var item = "Pen";
     item = "Pencil"; // Reassignment works
     console.log(item);
// 24)Can a var variable be redeclared?
     var items = "Pen";
     var items = "Book"; // Redeclaration works
     console.log(items);
     
// 25)Write an example of var redeclaration.
var counted = 105;
var counted = 205; // Redeclared
console.log(counted); // output = 205
// let
// 26)Create a let variable named age with the value 25.
       let ageNMum = 25;
       console.log(ageNMum);
// 27)What will be the output?
    let ageNum = 20;
    ageNum = 30;
    console.log(ageNum); // output = 30
// 28)Can a let variable be reassigned?
      let speed = 40;
      speed = 60; // Valid
      console.log(speed);
// 29)Can a let variable be redeclared?
       let speeds = 40;
// let speeds = 60; // SyntaxError: Identifier 'speed' has already been declared
console.log(speeds);
// // 30)Find the error:
           // let nameded = "John";
            // let nameded = "David"; // Identifier 'nameded' has already been declared
            // console.log(nameded) // no output
// 31)Create a let variable called city and assign "Chennai".
         let citys = "Chennai";
         console.log(citys);
// 32)Change the value of city to "Salem".
         let city = "Chennai";
         city = "Salem";
         console.log(city);
// 33)What will be the output?
      let m = 10;
      m = 50;
     console.log(m);// output : 50
// 34)Write a let variable called salary with the value 25000.
     let salary = 25000;
     console.log(salary); // output=25000
// 35)Reassign salary to 30000.
         salary = 30000;
         console.log(salary); // output=30000

// const
// 36)Create a const variable called pi with the value 3.14.
            const TaxValue = 3.14;
            console.log(TaxValue);
// 37)Can a const variable be reassigned?
           const limit = 100;
        // limit = 200; // TypeError: Assignment to constant variable.
        console.log(limit); // no change the value in const
// 38)Can a const variable be redeclared?
        const limits = 100;
         // const limits = 200; // SyntaxError: Identifier 'limit' has already been declared
           console.log(limits); // no change the value in const
// 39)What is wrong with this code?
        //  const numAge;
        //  numAge = 25;
            const numAge = 25;// this is correct code
         console.log(numAge);
// 40)What happens here?
         const priced = 500;
        //   priced = 1000;   // this is no reassign the value 
        console.log(priced)

// 41)Create a const variable called country with the value "India".
        const country = "India";
        console.log(country);
//42) What will be the output?
                 const xyab = 100;
                console.log(xyab); // output=100
                
// 43)Which keyword should you use if the value should not be reassigned?
                     const API_URL = "selvavignesh978@gmail.com";
                      console.log(API_URL);

// 44)What is the difference between let and const?
             let abc = 1;
             abc = 2; // Allowed
             console.log(abc);

             const abcd = 1;
             // abcd = 2; // Error
             console.log(abcd);
// 45)What is the difference between var and const?
             var xyz = 1;
             var xyz = 2; // Allowed
             console.log(xyz);

            const xyza = 1;
           // const xyza = 2; // Error 
           console.log(xyza);
// Printing & Console
// 46)Write JavaScript code to print Hello World using console.log(). 
            console.log("Hello World");
        
// 47)Write JavaScript code to print the number 500 using console.log().
             console.log(500);
            
//48)What is the purpose of console.warn()?
                 console.warn("This is a warning message!");

// 4(What is the purpose of console.error()? 
                 console.error("This is an error message!");
// 50)What is the purpose of each?
// alert()
        //    display to popup in alert
          alert("Welcome to the website!");
// prompt()
            // input popup allowing user input.
           let nameing = prompt("Enter your name:");
// confirm()
            //   display confirm box is (ok are cancel)
            let proceed = confirm("Do you want to save changes?");
// document.writeln()
            //   oputput is dipaly to the HTML webpage 
             document.writeln("Hello on Webpage");
// console.log()
             
// Practical Questions
// You can also give these as coding tasks:
// 1)Create a variable for student name, age, and mark and print all three.
             let studentName = "John";
             let studentAge = 16;
             let studentMark = 88;

             console.log(studentName, studentAge, studentMark);;
// 2)Ask the user's name using prompt() and display it using alert().
               let userName = prompt("What is your name?");
                alert(userName);
// 3)Ask the user's age using prompt() and print it using console.log().
                let userAge = prompt("How old are you?");
                console.log(userAge);
// 4)Ask the user a question using confirm().
               let userChoice = confirm("Do you want to delete this file?");
// 5)Ask the user's name and display it on the webpage using document.writeln().
               let nameinged = prompt("Enter your name:");
               document.writeln(nameinged);
