/*
Function that find the different number in array 
that all numbers are equal except for one
*/

const findUniq = arr =>{
    if(arr.length <3){
        return 'The array must contain at least 3 numbers';
    }
    const firstNumberOfArr = arr[0];
    for(let i = 1; i<arr.length-1; i+=1){
        if(arr[i]!=firstNumberOfArr){
            if(arr[i]!=arr[i+1]){
                return arr[i]
            }
            else{
                return firstNumberOfArr;
            }
        }
    }
    return arr[arr.length-1];
}
console.log(findUniq([1,2]));
console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]));
console.log(findUniq([ 1, 2, 1, 1, 1, 1 ]));      
console.log(findUniq([ 1, 1, 1, 1, 2, 1 ]));   
console.log(findUniq([ 1, 1, 1, 1, 1, 2 ]));     
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); 