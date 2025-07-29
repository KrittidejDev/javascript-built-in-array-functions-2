function isPalindrome(string) {
  // Start coding here
  const palinDrome = string.trim().split("").reverse().join("");
  // console.log(palinDrome);
  return string.trim() === palinDrome;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
