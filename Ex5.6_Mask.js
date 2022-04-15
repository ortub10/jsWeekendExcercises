//Function, which changes all characters into '#' except the last four
const maskify= string=>{
    if(typeof string !=='string'){
        return 'not a string value';
    }
    const charsArr = string.split("");
    const arrHideen = charsArr.map((char,index) =>{
        return charsArr.length - index >4?'#':char
    });
    return arrHideen.join("");
} 
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));