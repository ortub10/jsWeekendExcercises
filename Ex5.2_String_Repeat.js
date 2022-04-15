/*Function that repeats the given string src exactly count times.
Actually exists a function like this in javascript,
the goal was to create it alone.
*/

const repeatStr = (num, string) => {
    if(typeof string !=='string'){
        return 'not a string value';
    }

    let repeat = '';
    for(let i = 0; i<num; i+=1){
        repeat+=string;
    }
    return repeat;
} 
console.log(repeatStr(6,'|'));
console.log(repeatStr(5,'Hello'));
console.log(repeatStr(5,5));