//Function that convert the equivalent binary value to an integer.

const convert =arrBinary =>{
    let numberFromBinary = 0;
    for(let i = 0; i<arrBinary.length; i+=1){
        if(arrBinary[i]!==0 && arrBinary[i]!==1){
            return 'Array must contain only 1 or 0';
        }
        const pow = arrBinary.length - 1-i;
        numberFromBinary+=arrBinary[i]*2**pow;
    }
    return numberFromBinary;
}

console.log(convert([1,0,0,1,1]));
console.log(convert([1,0,0,1]));