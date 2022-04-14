/*
The function get 4 parameters:
1. p0 - population of town at the beginning of a year.
2. percent - increase percent per year
3. aug - new inhabitants per year come to live in the town
4. p - population to surpass.
The function nb_year return number of entire years needed to get a population
greater or equal to p.
 */

const nb_year = (p0, percent, aug,p) =>{
    if(typeof p0 !=='number' || typeof p !== 'number'){
        return 'p0 and p must be number value';
    }
    let numberOfyearNeeded = 0;
    let currentPopulation = p0
    while(currentPopulation < p){
        currentPopulation+=currentPopulation*(percent/100) + aug;
        numberOfyearNeeded+=1;
    }
    return numberOfyearNeeded;
}
console.log(nb_year(1000,2,50,1200));
console.log(nb_year(1500,5,100,5000));
console.log(nb_year(1500000,2.5,10000,2000000));