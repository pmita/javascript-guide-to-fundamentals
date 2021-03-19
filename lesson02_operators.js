//Well now we know how to introduce variables, but what can we do with them?
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

//We tend to also increment our variables quite often
number = 10;
number = number + 1;
console.log(number); //Prints 11;
//To simplify our code we can use the increment operator
number++;
console.log(number); //Prints 11 as well;


//We can increment by a bigger amout
number = 10;
number = number + 20;
console.log(number); //Prints 30
//Or for simplicty
number += 20;
console.log(number); //Prints 30

//This operator primarily apply to numbers but are not necessarily limited to

/*
    Please note that our increment operaton can be switched to a decreasing operator as well
    number--; will reduce by 1
    number -=5; will reduce by 5
*/

