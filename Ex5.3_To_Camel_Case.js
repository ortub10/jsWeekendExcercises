///Function that converts dash/underscore delimited words into camel casing

const toCamelCase =(string) =>{
    if(typeof string !=='string'){
        return 'not a string value';
    }
    const stringArray = string.split(/_|-/);
    let stringCamelCasing = stringArray[0];
    for(let i = 1; i<stringArray.length; i+=1){
        const currentWord = stringArray[i];
        const firstCahrBig = currentWord[0].toUpperCase();
        const restOfword = currentWord.slice(1);
        stringCamelCasing+=firstCahrBig + restOfword; 
    }
    return stringCamelCasing;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The-stealth-warrior"));
console.log(toCamelCase(["The-stealth-warrior"]));



