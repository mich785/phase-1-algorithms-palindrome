function isPalindrome(word) {
  word = word.toLowerCase();
  let splitWord = word.split("");
  let reversedWord = splitWord.reverse();
  let jointWord = reversedWord.join("");
  if (word === jointWord){
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
