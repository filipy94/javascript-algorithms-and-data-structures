//Convert the given number into a roman numeral.
function convertToRoman(num) {
    var convert = num;      //save arg on a variable
    var roman = [];         //create an emprty array to push roman numbers
    while (convert > 0) {   //start a looping subtracting until 0
      if (convert >= 1000) {
        convert -= 1000;
        roman.push("M");
      } else if (convert >= 900) {
        convert -= 900;
        roman.push("CM");
      } else if (convert >= 500) {
        convert -= 500;
        roman.push("D");
      } else if (convert >= 400) {
        convert -= 400;
        roman.push("CD");
      } else if (convert >= 100) {
        convert -= 100;
        roman.push("C");
      } else if (convert >= 90) {
        convert -= 90;
        roman.push("XC");
      } else if (convert >= 50) {
        convert -= 50;
        roman.push("L");
      } else if (convert >= 40) {
        convert -= 40;
        roman.push("XL");
      } else if (convert >= 10) {
        convert -= 10;
        roman.push("X");
      } else if (convert >= 9) {
        convert -= 9;
        roman.push("IX");
      } else if (convert >= 5) {
        convert -= 5;
        roman.push("V");
      } else if (convert >= 4) {
        convert -= 4;
        roman.push("IV");
      } else if (convert >= 1) {
        convert -= 1;
        roman.push("I");
      }
    }
   return roman.join("");       //convert back to a string
  }

  console.log(convertToRoman(36));