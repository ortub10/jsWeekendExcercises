
/* 
return the count of distinct case-insensitive alphabetic characters and
numeric digits that occur more than once in the input string.
*/

const countDuplicates = (string) =>{
    const chars = string.split("");
    const objectCount = {};
    for (const char of chars) {
        const letterCapitalized = char.toUpperCase();
        if(objectCount[letterCapitalized] === undefined){
            objectCount[letterCapitalized] = 0;
        }
        objectCount[letterCapitalized]+=1;
    }
    const values = Object.values(objectCount);
    let count = 0;
    for (const item of values) {
        if(item >1) count+=1;
    }
    return count;
}
console.log(countDuplicates("abcde")); 
console.log(countDuplicates("aabbcde")); 
console.log(countDuplicates("aabBcde")); 
console.log(countDuplicates("iindivisibility")); 
console.log(countDuplicates("Indivisibilities")); 
console.log(countDuplicates("aA11")); 
console.log(countDuplicates("ABBA")); 