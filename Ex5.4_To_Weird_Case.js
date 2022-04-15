/*
Function that accepts a string, and returns the same string 
with all even indexed characters in each word upper cased,
and all odd indexed characters in each word lower cased */
const toWeirdCase = string =>{
    if(typeof string !== 'string'||!(/^[a-zA-Z ]+$/.test(string))){
        return 'the value must be a string and includes only alphabetical characters and spaces'
    }
    const words = string.split(" ");
    const weirdCaseArr = words.map(word =>{
        const charsArrayFromWord  = word.split("")
        let weirdCaseWord = '';
        for(let i = 0; i<charsArrayFromWord.length; i+=1){
            const currentChar = charsArrayFromWord[i];
            if(i%2===0){weirdCaseWord+=currentChar.toUpperCase()}
            else{weirdCaseWord+=currentChar.toLowerCase()}
        }
        return weirdCaseWord;
    });
return weirdCaseArr.join(" ");
}
console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
console.log(toWeirdCase("Weird str4%ing case"));
console.log(toWeirdCase([1,1]));
 