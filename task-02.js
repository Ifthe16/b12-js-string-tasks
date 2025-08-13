/* Task-02 */
const sentence = "A cat and a parrot are amazing animals";
let count = 0;
for (let letter of sentence) {
    if (letter === 'a' || letter === 'A') {
        count++;
    }
}
console.log(count);