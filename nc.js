// How many words were given by the user?
let nbrWords = process.argv.length;

const numberMapping = [
    {word: "zero", number: 0},
    {word: "one", number: 1},
    {word: "two", number: 2}
]

for (i=2; i<nbrWords; i++) {
    userWord = process.argv[i].toLowerCase();
    for (j=0; j<numberMapping.length; j++) {
        if (numberMapping[j].word === userWord) {
            console.log(numberMapping[j].number);
            break;
        }
    }
}