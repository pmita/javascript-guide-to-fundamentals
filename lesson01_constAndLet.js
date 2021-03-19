//Variables essentially a cell or container where we can store our data.
//Accessing those data is as simple as referencing the variable name.

//To properly do this; we first need to declare the variable. This helps the browser allocate some memory for each variable.
//To declare a variable we have to either use the const or let key word.
//From there we can either assign them a value or leave the variable empty


//Let's create a varialbe with const
const variableName1 = 1;
//And print its value
console.log(variableName1); //Prints 1

//What happens if we change the value tho?
variableName1 = 2;
console.log(variableName1); //This will not work
//Variables declared with const are meant to have constant values. Altering them is not allowed.


//If dealing with interchangable variables then let is a better choice
//Lets create a variable with let
let interchangableVariable1 = 1;
console.log(interchangableVariable1); //Prints 1
//And change its value
interchangableVariable1 = 2;
console.log(interchangableVariable1); //Prints 2
//Let solves all the problems const brings to the table


//So far we have both declared and assigned a value to our variables, but the later isn't required
//Let's only declare a value
let emptyVariable1;
//What happens if we print its value?
console.log(emptyVariable1); //Prints undefined
//Our variable will remain undefined until we introduce a value to it

/*
    Few additional points include:
    -avoid the var keyword like plague
    -follow naming conventions on your variables (camelCases is most common in javascript)
    -try to use memorable words to your variable. They need to be both short and explain what they are used for
*/
