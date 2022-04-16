/*
Get 2 strings s1 and s2 including only letters from a-z;
Return a new sorted string, the
longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
*/
const longest = (string1, string2) =>{
    if(typeof string1 !== 'string'||typeof string2 !== 'string' ||
    !(/^[a-z]+$/.test(string1))|| !(/^[a-z]+$/.test(string2))){
        return 'the values must be strings and includes only alphabetical characters from a-z';
    }
    const string1AddString2 = string1 + string2;
    const chars = string1AddString2.split("");
    const objectLetters = {};
    chars.forEach(element => {
        if(objectLetters[element] === undefined){
            objectLetters[element] = 1;
        }        
    });
    const arrLetters = Object.keys(objectLetters);
    return arrLetters.sort().join("");
}
const s1 = "xyaabbbccccdefww";
const s2 = "xxxxyyyyabklmopq";
console.log(longest(s1,s2));

const s3 = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(s3,s3));
console.log(longest('adD',s3));
console.log(longest(58,s3));