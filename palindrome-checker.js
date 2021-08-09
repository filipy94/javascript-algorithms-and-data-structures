//Function return TRUE or FALSE if the given string is a palindrome.
//A palindrome is a word or sentence that's spelled the same way both forward and backward,
//ignoring punctuation, case, and spacing.
function palindrome(str) { 
    let regex = /\W+|_/; 
    let originalStr = str 
                        .toLowerCase() //put every letter to lower, resolving case problem;
                        .split(regex) //eliminate all non-alphanumeric characters;
                        .join(""); //join back to string;
    let reverseStr = originalStr //create a new string based on the filtered one made previously;
                        .split("") 
                        .reverse() 
                        .join(""); 
    if (originalStr === reverseStr) {  //compare the string;
      return true; 
    }   
    return false; 
  }    
   
  console.log(palindrome("racecar"));