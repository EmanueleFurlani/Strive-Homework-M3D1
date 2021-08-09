//1) MAX CHAR
// Given a string, return the character that is most commonly used in the string.

const getMax = function (str) {
 let max = 0
 let maxChar = ""
  str.split("").forEach((charset)=>{
    if(str.split(charset).length > max) {
        max = str.split(charset).length;
        maxChar = charset;
     }
  });
  return maxChar;
};
//console.log(getMax("assseessee"))

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
/*
function anagram(str1, str2) {  // one version
  const string1 = str1
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .sort();

  const string2 = str2
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .sort();
  if (string1.join("") === string2.join("")) {
    return true;
  } else {
    return false;
  }
} */
// console.log(anagram("RAIL! SAFETY!", "fairy tales"));

const isAnagram = (str1, str2) =>
  str1.split("").sort().join("") === str2.split("").sort().join("");
  console.log(isAnagram("rail safety", "fairy tales"))

/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples 
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

const anagrams2 = (str, arr) => {
  const anagrams = [];
  arr.forEach((word) => {
    if (isAnagram(str, word)) {
      anagrams.push(word);
    }
  });
  return anagrams;
};
console.log(anagrams2("listen", ["enlists", "google", "inlets", "banana"]))

/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
*/

function palindrome(str) {
  let reversed = str.split("").reverse().join("");
 if (str === reversed){
     return true
    } else {return false
    }
}

//console.log(palindrome("assa"))

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
 */

function reversedNum(n){
    const reversed = n.toString().split("").reverse().join(""); 
    return Math.sign(n) * parseInt(reversed)                        
}
//console.log(reversedNum(43))

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/*function steps(n, i = 1) {   // 1st version
  if (i > n) return;
  console.log("#".repeat(i) + " ".repeat(n - i));
  steps(n, i + 1);
}
console.log(steps(6))*/

const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let step = " ";

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};
steps(4)

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
function reverseString(str) {
  return str.split("").reverse("").join("")
}
//console.log(reverseString("Hello"))


/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* function chunk(array, size) { 1° version with while
  const chunks = [];
  let i = 0;
  while (i < array.length) {
    chunks.push(array.slice(i, i+=size))
  }
  return chunks;
}
console.log(chunk([1, 2, 3, 4, 5], 2)) */

function sliceIntoChunks(arr, chunkSize) { //version with for loop
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(sliceIntoChunks(arr, 3));

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX found online, check it in second time

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

//console.log(matrix(4))