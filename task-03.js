/* Task-03 */
const sentence = "The quick brown fox jumps over the lazy dog";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let foundVowels = [];

for (let letter of sentence.toLocaleLowerCase()) {
    if (vowels.includes(letter) && !foundVowels.includes(letter)) {
        foundVowels.push(letter);
    }
}

if (foundVowels.length === vowels.length) {
    console.log("The string contains all the vowels.");
}
else {
    console.log("The string does not contain all the vowels.");
}