let palindromeInput = document.querySelector(".input_style");
console.log(palindromeInput);
let palindromeButton = document.querySelector(".palindrome_button");

palindromeInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.querySelector(".palindrome_button").click();
  } 
});

palindromeButton.addEventListener("click", function() {
    console.log(palindromeInput.value);
let palindromeResults = palindrome(palindromeInput.value);

if(palindromeResults) {
    document.querySelector(".true_case").style.display = "block";
    document.querySelector(".false_case").style.display = "none";
    
} else {
    document.querySelector(".false_case").style.display = "block";
    document.querySelector(".true_case").style.display = "none";
}
});


function palindrome(str) {
  let strArr = [];
  let spaces = /[\s*\W*_*]/g;
  let combined = str.replace(spaces,'').toLowerCase();
   
  strArr = combined.split('');

  let len = strArr.length - 1;  
  let n = 0;
  let matched;

  function testStr (strArr, len) {
    if(strArr[n] !== strArr[len]) {
      matched = false;
      return matched
      } else if (strArr[n] === strArr[len] && n <= len) {
        matched = true;
        n++;
        testStr(strArr, len - 1);
      return matched    
    }        
  } 
  testStr(strArr, len);
  return matched
}