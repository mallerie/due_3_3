// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(paramOne, paramTwo) {
  if (Number(paramOne) > Number(paramTwo))
    return (paramOne);
            else return (paramTwo);
  }

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(one, two, three) {
 if (Number(one) > Number(two) && Number(one) > Number(three)){
      return one;
      } else if (Number(two) > Number(three)){
        return two;
          } else {
            return three;
              }}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var allVowels = ['a', 'e', 'i', 'o', 'u'];

allVowels.forEach function isVowel(char)  {
  if (char.length === 1 && char === function())  {
    return true; 
      } else {
        return false;
    }}


var allVowels = ['a', 'e', 'i', 'o', 'u'];          

function isVowel(char) {
  if (char === allVowels.forEach(function(vowel)  { 
    if (vowel === char) {
        return true;
     } else {
        return false;
          }}

var allVowels = ['a', 'e', 'i', 'o', 'u'];          

allVowels.filter(function(char) {
  var 
}          



// function isLetter(character) {
//   return character >= 'a' && character <= 'z';
// }

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}