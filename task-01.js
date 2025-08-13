/* Task-01 */
const sentence = "I am a professional web developer";
let count = 0;
for (letter of sentence) {
    if (letter === 'a') {
        count++;
    }
}
console.log(count);