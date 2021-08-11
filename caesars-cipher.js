//One of the simplest and most widely known ciphers is a Caesar cipher,
//also known as a shift cipher.
//In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher,
//where the values of the letters are shifted by 13 places.
//Thus A ↔ N, B ↔ O and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase.
//Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    //create an alphabetic array A-Z + A-M
    let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
    return str
              .split("") //break string into array of characters;
              .map(function(e) {
                let index = letters.indexOf(e); //for each element, get it's index
                if (index !== -1) {             //if character exists in letters array
                                                //replace the letter for decoding
                  return e.replace(e, letters.slice(index+13, index+14)) 
                } else return e;
              })
              .join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));