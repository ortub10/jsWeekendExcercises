/*
Each integer array has two items which represent number of people get
into bus (The first item) and number of people get
off the bus (The second item) in a bus stop.
The function return number of people who are still in the bus after the last bus station 
*/

const findPeopleOnBus = arr =>{
    let currentPeopleOnBus = 0;
    for (const innerArr of arr) {
        currentPeopleOnBus+=innerArr[0]-innerArr[1];
    }
    return currentPeopleOnBus;
}

const bus1 = [
    [1, 0],
    [4, 1],
    [3, 1],
    [0, 3]
]
console.log(findPeopleOnBus(bus1));