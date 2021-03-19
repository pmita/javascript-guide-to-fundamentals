# Fundamentals in Javascript

Full breakdown of fundamental topics in javascript.

## Getting Started

Simply link each javascript lesson you are working on in your html

### Lessons covered include

const VS let (let's all forget about var)

```
//Variables essentially a cell or container where we can store our data.
//Accessing those data is as simple as referencing the variable name.

//To properly do this; we first need to declare the variable. This helps the browser allocate some memory for each variable.
//To declare a variable we have to either use the const or let key word.
//From there we can either assign them a value or leave the variable empty


//Let's create a varialbe with const
const variableName1 = 1;
//And print its value
console.log(variableName1); //Prints 1
```

Basic operators

```
//Operators are some of the basic functionality that we can apply to our variables.
//Operators simply represent a collection of symbols that allows to alter our variable values.
//Similar to what calculator symbols do


//Let's create a variable
//And go over the basic operators
let number = 10;
//Let's add 2 to it
console.log(number + 2); //Prints 12
//Substract 2
console.log(number - 2); //Prints 8
//Multiply by 2
console.log(number * 2); //Prints 20
//Divide by 2
console.log(number / 2); //Prints 5
//Find the reminder of the division by 3
console.log(number % 3); //Prints 1
//Find the exponent of 10^2
console.log(number ** 2); //Prints 100
```

Data types

```
//Now we are ready to go over primitive data types, which represent that different
//types of data our variables can hold as their value

//The main ones include 

//Numbers
const day = 5;
console.log(typeof day); //Prints number
//Strings
const name = 'Panos';
console.log(typeof name); //Prints string
//Booleans represents either true or false value
```
