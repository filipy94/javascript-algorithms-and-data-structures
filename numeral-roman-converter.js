//Convert the given number into a roman numeral.
function convertToNumber(roman) {
    let romanArr = roman
                        .split("")                                //break the string in every character
                        .map(e => e === "I" ? e.replace(e, 1) :   //change every letter for number
                                  e === "V" ? e.replace(e, 5) :
                                  e === "X" ? e.replace(e, 10) :
                                  e === "L" ? e.replace(e, 50) :
                                  e === "C" ? e.replace(e, 100) :
                                  e === "D" ? e.replace(e, 500) :
                                  e === "M" ? e.replace(e, 1000) : e.replace(e, 0)); //case don't fill in any case, replace for 0
    function validNumber(num) {         //a func to test if the arg is a roman number
        return num != 0;
    };
    if (romanArr.every(validNumber) === false) {
        return "Not a Roman Number";
    };
    let number = romanArr
                    .map(e => {  //a map to get numbers that are composed by 2 roman letters (i.e IX, XC)
                        let idx = romanArr.indexOf(e);
                        if (e < romanArr[idx+1]) {
                            let twoDigit = romanArr[idx+1] - e;
                            romanArr.splice(idx+1, 1);
                            return e.replace(e, twoDigit);
                        } else return e;
                    })
                    .map(n => {return n = Number(n)}) //convert string elements to number
                    .reduce((a, b) => a + b); //sum all elements
    return number;
};

console.log(convertToNumber("CMXCIX"));