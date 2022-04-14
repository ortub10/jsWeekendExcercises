// Function that return the century of the year.

const centuryFromYear = year =>{
    if(year%100 ===0){
        return year/100;
    }
    const century = Math.floor(year/100) + 1;
    return century;
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(160));
console.log(centuryFromYear(20));
console.log(centuryFromYear(1780));