//Function that removes the first and last characters of a string.

const removeFirstAndLast = string =>{
    if(typeof string !=='string'){
        return 'not a string value';
    }
    const startIndex = 1;
    const endIndex =string.length -1;
    return string.slice(startIndex,endIndex);
}

console.log(removeFirstAndLast('hello'));
console.log(removeFirstAndLast(15));
