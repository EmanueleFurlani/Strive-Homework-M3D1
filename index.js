/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function sum (a, b) {
    if (a === b) {
        return (a + b)*3
    } else {
        return a + b}
}
//console.log(sum(3,4))

/*
2) RIVEDERE
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const check = function(a, b) {
    return ((a === 50 || b === 50)||(a + b === 50))
}
//console.log(check(40, 10))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function removeChar() {
let str = "Hello World";
str = str.slice(0, 3) + str.slice(4);
return str
}
//console.log(removeChar())
/*

4)
 Create a function to find the largest of three given integers.
*/

function findTheLargest(x, y, z){
  let maxVal = 0;
  if (x > y)
  {
    maxVal = x;
  } else
  {
    maxVal = y;
  }
  if (z > maxVal) 
  {
    maxVal = z;
  }
  return maxVal;
}
//console.log(findTheLargest(30, 60, 40))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function checkRange(x, y) {
  if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100))
     {
    return true;
     } 
    else 
     {
    return false;
  }
}
//console.log(checkRange(44, 55))

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

function string_copies (str, n) 
{
  if (n <= 0)
    return false;
  else
  return str.repeat(n);
}
//console.log(string_copies("hi", 3))

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function citysName(name){
    if(name.startsWith("Los") || name.startsWith("New")){
        return name
    } else {
        return " "
    }
}
// console.log(citysName("Los Angeles"))
// console.log(citysName("New York"))
// console.log(citysName("Bari"))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

function calcSumArr(ns){
return ns[0] + ns[1] + ns[2]
}
//console.log(calcSumArr([1, 3, 5]))

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function testArrNumbs(ns){
    if (ns.includes(1) || ns.includes(3)){
       return true
    } 
    else
    {
       return false
    }
}
//console.log(testArrNumbs([4, 2, 6]))

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

function testArrNumbs2(ns){
    if (!ns.includes(1) || !ns.includes(3)){
       return true
    } 
    else
    {
       return false
    }
}
//console.log(testArrNumbs2([2, 4]))

/*
11)
Create a function to find the longest string from a given array of strings. DA RIVEDERE
*/ 

/*function longestStr(str1, str2){
    if(str1.length > str2.length){
        return str1
    } else {return str2}
}

console.log(longestStr("casaaaaa", "casona"))
*/
function longest_string(str_ara) {
  let max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}
//console.log()

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/ 

function angle_Type(angle) {
  if(angle < 90) {
    return "Acute angle.";
  }
  if(angle === 90) {
    return "Right angle.";
  }
  if(angle < 180) {
    return "Obtuse angle.";
  }
  return "Straight angle.";
}
//console.log()

//13)
//Create a function to find the index of the greatest element of a given array of integers


function greatElArr(arr){
    let max = arr[0];
    let maxIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex
}
//console.log(greatElArr([1,7,4,6,3,5]))

//14)
//Create a function to get the largest "even" number from an array of integers.

function largNum(arr) {
  arr.sort((a, b) => b - a);                 //"sort" --> an array of integers in ascending order.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0)
        {return arr[i];
        }
    }
  }
console.log(largNum([73, 40, 2, 60]))

//16) RIVEDERE
//Create a function to check from two given integers, whether one is positive and another one is negative.

function checkPositiveNegative(a, b){
  if ((a < 0 && b > 0) || a > 0 && b < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
//console.log(checkPositiveNegative(4, -3))


//17) (NOT COMPLETE)
//Create a function to create new string with first 3 characters are in lower case and the others
//in upper case. If the string length is less than 3 convert all the characters in upper case. 

function newString(str){
  if (str.length <= 3) {
  return str.toUpperCase();
}
  front_part = (str.substring(0, 3)).toLowerCase();
  back_part = str.substring(3, str.length);  
  return front_part + back_part;
}
//console.log(newString("ASDASDASD"))


//18)
//Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function sortASum(x, y) 
 {
  const sumNums = x + y;
  if (sumNums >= 50 && sumNums <= 80) {
    return 65;
  } else {
    return 80;
  }
}
//console.log(sortASum(30, 30))

/*19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

//20)
//Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

function acronymn(str) {
    return str.split( /\b(?=[a-z])/ig ) // split on word boundaries --> This is a regular expression, selects the first letter of a word if it is lowercase
      .map( token => token[0] )         // get first letter of each token
      .join( '' )
      .toUpperCase()                    // convert to Uppercase string
    ;
}
//console.log(acronymn("british broadcasting corporation"))