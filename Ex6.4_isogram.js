//Return if the string is isogram

const isIsogram = string =>{
    if(string ==="") return true;
    if(typeof string !== 'string'||!(/^[a-zA-Z]+$/.test(string))){
        return 'the value must be a string and includes only alphabetical characters'
    }
    const chars= string.split("");
    const objectLetters = {};
    chars.forEach(element => {
        const smallLetter  =  element.toLowerCase();
        if(objectLetters[smallLetter] === undefined){
            objectLetters[smallLetter] = 0;
        } 
        objectLetters[smallLetter]+=1;
    });
    const values = Object.values(objectLetters);
    for (const item of values) {
        if(item>1){
            return false;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram(""));
console.log(isIsogram(58));
console.log(isIsogram("ade$"));

