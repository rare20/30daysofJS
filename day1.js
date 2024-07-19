//Task 1
var no=5
console.log(no)
//Task 2
let string="Kamal garg"
console.log(string)
//Task 3
const BOOL=false
console.log(BOOL)
//Task 4
let arr=[2,3,67,45]
let obj={id:"30",string:"Kamal garg"}
console.log(typeof(no))
console.log(typeof(string))
console.log(typeof(BOOL))
console.log(typeof(arr))
console.log(typeof(obj))

//Task 5
let x=7
console.log(x)
x=10
console.log(x)
//Task 6
const y=5
console.log(y)
y=8
console.log(y)

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numberType = 123;
let stringType = "This is a string";
let booleanType = true;
let objectType = { key: "value" };
let arrayType = [1, 2, 3, 4, 5];
let undefinedType;
let nullType = null;

console.log("Value: ", numberType, ", Type: ", typeof numberType);
// Output: Value:  <value of numberType>, Type: number

console.log("Value: ", stringType, ", Type: ", typeof stringType);
// Output: Value:  <value of stringType>, Type: string

console.log("Value: ", booleanType, ", Type: ", typeof booleanType);
// Output: Value:  <value of booleanType>, Type: boolean

console.log("Value: ", objectType, ", Type: ", typeof objectType);
// Output: Value:  <value of objectType>, Type: object

console.log("Value: ", arrayType, ", Type: ", typeof arrayType);
// Output: Value:  <value of arrayType>, Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", undefinedType, ", Type: ", typeof undefinedType);
// Output: Value:  <value of undefinedType>, Type: undefined

console.log("Value: ", nullType, ", Type: ", typeof nullType);
// Output: Value:  <value of nullType>, Type: object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVariable = "I can be reassigned";
console.log(letVariable); // Output: I can be reassigned
letVariable = "I've been reassigned";
console.log(letVariable); // Output: I've been reassigned

const constVariable = "I cannot be reassigned";
console.log(constVariable); // Output: I cannot be reassigned
// Uncommenting the next line will cause an error
// constVariable = "Attempting reassignment"; // Error: Assignment to constant variable.