/*
Function that finds the summation of every number from 1 to num. The number will
always be a positive integer greater than 0.
*/

const summation = number =>{
    if(number<=0){
        return 'The number must be greater than 0';
    }
const sum = (number/2)*(1+number);
return sum
}
console.log(summation(2));
console.log(summation(8));
console.log(summation(-7));