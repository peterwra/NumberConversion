// How many words were given by the user?
let nbrWords = process.argv.length;

const numberMapping = [
    {word: "negtive", number: -1},
    {word: "zero", number: 0},
    {word: "one", number: 1},
    {word: "two", number: 2},
    {word: "three", number: 3},
    {word: "four", number: 4},
    {word: "five", number: 5},
    {word: "six", number: 6},
    {word: "seven", number: 7},
    {word: "eight", number: 8},
    {word: "nine", number: 9},
    {word: "ten", number: 10},
    {word: "eleven", number: 11},
    {word: "twelve", number:12},
    {word: "thirteen", number: 13},
    {word: "fourteen", number: 14},
    {word: "fifteen", number: 15},
    {word: "sixteen", number: 16},
    {word: "seventeen", number: 17},
    {word: "eighteen", number: 18},
    {word: "nineteen", number: 19},
    {word: "twenty", number: 20},
    {word: "thirty", number: 30},
    {word: "forty", number: 40},
    {word: "fifty", number: 50},
    {word: "sixty", number: 60},
    {word: "seventy", number: 70},
    {word: "eighty", number: 80},
    {word: "ninety", number: 90},
    {word: "hundred", number: 100, multiply: true},
    {word: "thousand", number: 1000, multiply: true, reset: true},
    {word: "million", number: 1000000, multiply: true, reset: true},
    {word: "billion", number: 1000000000, multiply: true, reset: true}
]

// Array to hold the various parts of the number (ie. millions, thousands, etc)
let tempArray = [];

for (i=2; i<nbrWords; i++) {
    let isFound = false;
    let userWord = process.argv[i].toLowerCase();
    for (j=0; j<numberMapping.length; j++) {
        if (numberMapping[j].word === userWord) {
            isFound = true;
            tempArray.push(
                {
                    number: numberMapping[j].number,
                    multiply: numberMapping[j].multiply,
                    reset: numberMapping[j].reset
                })
            break;
        }
    }
    if (!isFound){
        console.log(`Invalid word ${userWord} received!`);
        return -1;
    }
}

let returnValue = 0;
let tempValue = 0;
for (i=0; i<tempArray.length; i++){
    console.log(tempArray[i].number);
    if (tempArray[i].multiply){
        tempValue*=tempArray[i].number;
        if (tempArray[i].reset) {
            returnValue+=tempValue;
            tempValue = 0;
        }
    } else {
        tempValue+=tempArray[i].number;
    }
}
if (tempValue>0){
    returnValue+=tempValue;
}

console.log(`Your number is: ${returnValue}`);
