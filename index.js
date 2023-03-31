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
  The function takes the word as an arguementconverts it to lowercase and then splits it to an array.
  After splitting it reverses the array.
  Then it joins the array to form a single string.
  It then checks if the word and the joint reversed word are the same.
  If they are it returns true else it returns false.s
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
  
}

module.exports = isPalindrome;
