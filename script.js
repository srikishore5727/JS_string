// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var varOne = "I am a ";
var varTwo = "kalvian";
var value = varOne + varTwo;
console.log(value);
// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var newStr = "If you fail, never give up because FAIL means \"First Attempt In Learning\".";
console.log(newStr);
// Challenge 3: Store a string in a variable and display the length of the string.
let length = value.length;
console.log(length);
// Challenge 4: Store a string in a variable and convert it into uppercase.
let upperCase = value.toUpperCase();
console.log(upperCase);
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
let str = "I love programming";
replace = str.replace("programming","JavaScript programming");
console.log(replace);
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
let str1 = "Kalvian";
console.log(str1.repeat(3));

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
let str3 = "I am a Kalvian";
console.log(str3.split(' '));
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
let str4 = "Time and Tide wait for none";
console.log(str4.indexOf('Ti'));
// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
let str5 = "When life gives you lemons make lemonade";
console.log(str5.includes('lemon'))
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
let str6 = "You must be the change you wish to see in the world.";
console.log(str6.slice(16,22));
console.log(str6.substring(45,51));