/*
Get string and return new string with dash delimited.
Each letter of the get string will repeat
in the new string according the index of the letter  
And the first will be capitalized
*/
const accum = string =>{
    if(typeof string !== 'string'||!(/^[a-zA-Z]+$/.test(string))){
        return 'the value must be a string and includes only alphabetical characters'
    }
    const chars = string.split("");
    const multiArr = chars.map((char,index)=>{
        let str = char.toUpperCase();
        str+=char.toLowerCase().repeat(index);
        return str;
    });
    return multiArr.join("-");
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
console.log(accum("abc%8d"));
console.log(accum(84));