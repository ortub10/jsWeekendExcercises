/*
The function take three arguments - operation(string/char), value1(number),
value2(number).
The function return result of numbers after applying the chosen operation.
 */
const basicOp = (char,number1,number2) =>{
    switch (char) {
        case '+':
            return number1+number2;            
        case '-':
            return number1-number2;            
        
        case '*':
            return number1*number2;            
        
        case '/':
            return number1/number2;            
        
        default:
            return `The char ${char} Invalid`;
    }
}
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));
console.log(basicOp('&', 49, 7));