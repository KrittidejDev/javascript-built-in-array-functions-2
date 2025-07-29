function isPalindrome(string) {
  // Start coding here
  const palinDrome = string.split("").reverse().join("");
  // console.log(palinDrome);
  return string === palinDrome;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false