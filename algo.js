//The length of the sentence (the number of characters).
let sentence = "I am able to split sentence in to characters.";
let length = sentence.length;
console.log(sentence.length); //prints (45)

//The number of words in the sentence

let words = "I am able to split sentence in to words.";
const myArray = words.split(" ");
console.log(myArray); //prints (9)

//The number of vowels in the sentence.

const countVowels = (str) =>
  Array.from(str).filter((letter) => "aeiou".includes(letter)).length;
console.log(countVowels("I am able to split sentence in to vowels")); //prints (12)
