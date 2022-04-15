/* 
Function that takes two words with one space
in between them.
And convert a name into initials
Returns two capital letters with a dot separating them
*/

const convertName = fullName =>{
    if(fullName.length !== fullName.replaceAll(' ', '').length + 1){
        return 'The full name must be only 2 words and only one space can be in full name';
    }
    const fullNameArr = fullName.split(" ");
    const firstNameCharUpperCaase = fullNameArr[0][0].toUpperCase();
    const lastNameCharUpperCaase = fullNameArr[1][0].toUpperCase();
    const nameIntoInitials = firstNameCharUpperCaase+"."+lastNameCharUpperCaase;
    return nameIntoInitials;
}
console.log(convertName('Sam Harris'));
console.log(convertName('patrick feeney'));
console.log(convertName('Sam   Harris'));
console.log(convertName('jeramy math look'));