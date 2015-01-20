// 1.
var priceArray, added, avg;

// Putting together my price array

var priceArray = items.map( function(item) {
  return item.price;
});

// Adding the prices together
var added = priceArray.reduce( function(add, item) {
  return add + item;
});

// Getting the average
var avg = added / items.length;

// Logging the answer out
console.log("The average price is " + "$" + avg);


// 2.
var inBetween;

// Getting items between
var inBetween = items.filter( function(item) {
  return item.price > 14 && item.price < 18;
});


// Logging the answer out
console.log(inBetween);


// 3.
var britishPound, GPB, britishGlass;

// Finding the item with the value in Pounds
var britishPound = items.filter( function(item) {
  return item.currency_code == "GBP";
});

// Extracting the title from this array
var britishGlass = britishPound.map( function(item){
  return item.title;
});

// Logging the answer out
console.log(britishGlass + " costs 17 pounds" );

// 4.
var woodItems, woodval = "wood";
// Extracting the items with "wood" in the materials
var woodItems = items.forEach( function(item){
  // Returning the arrays with "wood" as a material
  return item.materials.forEach( function(matItem){
    if (matItem == "wood")
// console logging the answer
      console.log(item);
      return item;

  })
});

// 5.
var eightMaterials;

// Finding the item with more than 8 materials
var eightMaterials = items.filter( function(item){
  return item.materials.length > 8;
});

// Extrating materials from array
var listMaterials = eightMaterials.map( function(item){
  return item.materials;
});

// Extracting title from array
var listTitle = eightMaterials.map( function(item){
return item.title;
});


// Logging the answer out
console.log(listTitle + listMaterials);


// 6.
var cntr = 0;
// Finding the arrays that have "i_did" as the answer to the who_made category
var selfMade = items.forEach( function(item){
// If the array is "i_did" then count by 1
    if (item.who_made == "i_did")
      cntr++;
  });
//console log the answer
console.log(cntr + " items were made by their sellers");





/**
*
*/

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(val1, val2){
  if (val1 > val2)
  {
    return val1;
  }
  else
  {
      return val2;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(val1, val2, val3){
  if (val1 > val2 && val1 > val3){
    return val1;
  }
  if (val2 > val1 && val2 > val3){
    return val2;
  }
  if (val3 > val2 && val3 > val1){
    return val3;
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  var vowels = "a,e,i,o,u";
  if (vowels.indexOf(char)> -1){
    return true;}
     else
     {
       return false;
     }
  }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
var retVal = "";
var vowels = "a,e,i,o,u";
for(i=0; i<phrase.length; i++){
if (vowels.indexOf(phrase.charAt(i)) == -1)
  {
  //is consonant
    retVal += phrase.charAt(i) + "o" + phrase.charAt(i);
  }
else {retVal += phrase.charAt(i);
    }
  }
}
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
  var sum = array.reduce( function(acc, x) {
    return acc + x;
});
  return sum;
}

function multiply(array){
  var mul = array.reduce( function(acc, x) {
    return acc * x;
});
  return mul;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  var rvse = "";
  for (var i = string.length -1; i >= 0; i--) {
    rvse += str[i];
  }
  return rvse;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var maxLength = 0;
  var maxWord = "";

  arr.forEach( function(x) {
    if (x.length > maxLength) {
      maxLength = x.length;
      maxWord = x;
    }
});

  return maxWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  var filterWord = arr.filter( function(x) {
    return x.length > i;
});

  return filterWord;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  var charFreq = {};
  for (var i = 0; i < str.length; i++) {
    var x = str[i];
    charFreq[x] = charFreq[x] +1 || 1;
  }
  return charFreq;
}
