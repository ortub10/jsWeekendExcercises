// Return the length of the shortest word(s)

const lengthShortestWord = string =>{
    if(string.replaceAll(" ","").length===0) return 'The string can not be empty';
    const words = string.split(" ");
    const lengthOfWordsArr = words.map(word => (word.length));
    return Math.min(...lengthOfWordsArr);
}

console.log(lengthShortestWord("the end of batman"));
console.log(lengthShortestWord(""));
console.log(lengthShortestWord("    "));
