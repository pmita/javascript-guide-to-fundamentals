//Variables in javascript and nay language are essentially a cell for us to store the data
//we can then reference that data by using the variable name. In order for us to use variable correctly
//however; we need to declare them.

//Declaring variables lets our browser know in advance that we are dealing with them, and as such it
//allocates some memory to those variables. 

//We are usually either dealing with constant variables or intechangable variables. If we are dealing with variables
//that their value is not changing throughout our code then we use the const key word.

const variableName1 = 1;
const variableName2 = 2;

console.log(variableName1); //Prints 1
//What happens if we change the value tho?
variableName1 = 3;
console.log(variableName1); //This will not work, variableName1 is const and it's value must not change

//If dealing with interchangable variables then the keyword let should be used instead. Let works similar with
//const

let interchangableVariable1 = 1;
let interchangableVariable2 = 2;

console.log(interchangableVariable1); //Prints 1
interchangableVariable1 = 3;
console.log(interchangableVariable1); //Prints 3


//What happens if we don't assing a value to our variables at first? This still works fine 
//provided we do assign a value to them before we use them!

let emptyVariable1;
const emptyVariable2;

console.log(emptyVariable1, emptyVariable2); //Prints undefined
