// return the number fibonacci in Location num

const fibonacci = num => {
  let first = 0;
  let second = 1;
  if(num === first){return first}
  if(num === second){return second}
  for(let i = 0; i<num; i+=1){
    const temp = first;
    first = second;
    second+=temp;
    }
    return first;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(8));