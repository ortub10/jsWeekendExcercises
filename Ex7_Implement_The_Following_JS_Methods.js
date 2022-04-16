// Implement filter function

const myFilter =(array, callbackFunction) =>{
    const newArr = [];
    for(let i = 0; i<array.length; i+=1){
        const value = array[i];
        const index = i;
        if(callbackFunction(value,index,array)){
            newArr.push(value)
        }
    }
    return newArr;
}

// Implement forEach function

const myForEach =(array, callbackFunction) =>{
    for(let i = 0; i<array.length; i+=1){
        const value = array[i];
        const index = i;
        callbackFunction(value,index,array);
    }
}

// Implement map function

const myMap =(array, callbackFunction) =>{
    const newArr = [];
    for(let i = 0; i<array.length; i+=1){
        const value = array[i];
        const index = i;
        newArr.push(callbackFunction(value,index,array));
    }
     return newArr;
}

const arr1 = [1,1,1,1];
const arr2 = [1,2,3,4,5,6,7,8,9,10];
const multiInIndex=((num,i) => num*i);
const upFrom3 = ((num) => num>3);
const printArr = (item => console.log(item));

console.log(myMap(arr1,multiInIndex));
console.log(myFilter(arr2,upFrom3))
myForEach(arr2, printArr);