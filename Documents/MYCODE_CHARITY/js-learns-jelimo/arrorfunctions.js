

//Arrow functions
let sayHi = () => alert("Hello!");

sayHi();

//function declaration


let sum = (a, b) => a + b;

console.log( sum(2,2) );

//For multiline arrow functions use curly brackets
let total = (a, b) => {  
    let result = a + b;
    return result; 
  };
  
  console.log( total(1, 2) ); 