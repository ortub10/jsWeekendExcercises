// Return a "Yes" string for true, or a "No" string for false

const yesOrNo = bool =>{
if(typeof bool !== 'boolean' ){
    return 'This not a boolean value';
}
return bool?'Yes':'No';
}
console.log('2>3?:',yesOrNo(2>3));
console.log('2<3?:',yesOrNo(2<3));
console.log('""',yesOrNo(""));