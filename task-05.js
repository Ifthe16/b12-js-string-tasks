/* Task-05 */
const sentence = "hello world this is a javascript practice";
const capitalizedWords = [];

const words = sentence.split(' ');
console.log(words);

for (let word of words) {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1);
    const fullWord = firstLetter.concat(rest);
    capitalizedWords.push(fullWord);

}
console.log(capitalizedWords.join(' '));
