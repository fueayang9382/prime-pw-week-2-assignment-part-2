// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The number value is set to 1 intially. 
// with the "number++;" function it is adding one to the value so it increase by one. 
// number = 1 + 1 so the new number value will be 2. 
// The console.log() is yes because the number value of 2 matched the conditional statement: if (number >= 2 ).

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Namen is set to Dane, and if statemnet is set to if name is exactly matches to Mary log equal to 'Hi Mary!'
// However, Dane is NOT the same as in Mary so the else statement will be trigger since Dane is not exactly to Mary, 
// Else log will be trigger logging 'How do you do?'
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// code is intially assigned to 123. 
// Since code is exactly equal to 123, secret is asigned the value of 'Super.'
// Code value of 123 is then multiply by 2 to get 246. If Code is greater than 250, variable secret new value will be assigned to 'duper.'
//However, Code value of 123 multiply by 2 only get to 246 which is less than 250; therefore, secret remains as super. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

//the first statement will not excute because the zip code is less than 80000.  This code won't be excuted. 
//The second else if statement will not be excuted because the isStudent must be exactly false.  The isStudent value is true value. 
//The third statement will be excuted because else if conditional statement is only asking if isStudent is true, which isStudent value is true. 
//Last else statement will not be excuted because the third else if conditional will be triggered. 



// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/ 
 
//This code will not excute because colorOne has already assigned a value to it which is 'red.'
//We would need to make a new variable that can assign new value to purple.  
//We can make a new variable called colorMix; or colorMix = '' that way we can assign a new value late on. 


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//The if statement, 'if (temp > 39 || time >= 4)' doesn't serve the statement 'We check if temp is higher than 39 and if time is greater or equal to  4.'
// the 'if (temp > 39 || time >= 4)' translate as ' if temperature is greater than 39 ***OR*** time is greater or equal to 4 log 'throw away food.' 
// We need both conditionals to be met to 'throw away food'; therfore, temperature must be greater than 39 ***AND*** time must be greater or equal to 4 to log 'throw away food.'
//The if conditional statement we need to log correctly is 'if(temp > 39 && time >= 4){console.log ('throw away food!')}


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

// this code won't be evaluating the right variable. The problem is that we are checking the variable age not minAge.
//the if(minAge <= age ) statement is checking on the minAge variable but we need to need to check the age variable to log our answer. 
//We don't need to check for minAge because minAge is a const variable; therefore, it won't change and is pointless checking. 
//To fix the code we would just need to reverse the code to correct the if statement.
//vvv below is how the if statment should be worded. vvv

// if(age >= to minAge){
  //console.log('no entry');
//}
//else{
  //console.log('enter')
//}