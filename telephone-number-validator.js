//Return true if the passed string looks like a valid US phone number.
//Valid US phone-numbers
//555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//The area code is required.
//If the country code is provided, you must confirm that the country code is 1.

function telephoneCheck(str) {
    let regexLength = /\d/g;
    let numberLength = str.match(regexLength);
    let regexCond1 = /^[1\s]*\d{3}-\d{3}-\d{4}$/;
    let regexCond2 = /^[1\s]*\(\d{3}\)\d{3}-\d{4}$/;
    let regexCond3 = /^[1\s]*\(\d{3}\)\s\d{3}-\d{4}$/;
    let regexCond4 = /^[1\s]*\d{3}\s\d{3}\s\d{4}$/;
    let regexCond5 = /^[1\s]*\d{10}$/;
    if (numberLength.length === 10 || numberLength.length === 11) {
      if (str.match(regexCond1) || str.match(regexCond2) || str.match(regexCond3) || str.match(regexCond4) || str.match(regexCond5)) {
        return true;
      }
    }  
    return false;
  }
  
  console.log(telephoneCheck("555-555-5555"));