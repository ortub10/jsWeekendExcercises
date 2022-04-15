// returns the first n elements

const tribonacci = (signature,lengthOfNewArray) => {
    let first = signature[0];
    let second = signature[1];
    let third = signature[2];
    arr= [];
    for(let i = 0; i<lengthOfNewArray; i+=1){
        arr.push(first);
        const temp = first;
        first = second;
        second = third;
        third +=first+temp;
    }
    return arr;
} 

console.log(tribonacci([0,0,1],8));
console.log(tribonacci([0,0,1],2));

console.log(tribonacci([1,1,1],8));
console.log(tribonacci([1,1,1],0));