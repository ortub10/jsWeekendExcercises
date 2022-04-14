/* 
Function that finds the next integral perfect
square after the onepassed as a parameter.
If the parameter is itself not a perfect square
then the function return -1
*/
const findNextSquare = number =>{
    const numberBeforeSquare = Math.sqrt(number);
    if(numberBeforeSquare %1 !==0){
        return -1;
    }
    const nextNumberBeforeSquare = numberBeforeSquare + 1;
    const nextNumberSquare = Math.pow(nextNumberBeforeSquare,2);
    return nextNumberSquare;
}
console.log('121, next:',findNextSquare(121));
console.log('625, next:',findNextSquare(625));
console.log('114, next:',findNextSquare(114));