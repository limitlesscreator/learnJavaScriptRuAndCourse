function clear() {
    console.clear()
}

// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.
//     Your task is to output a list of everything inbetween both occurrences of this element in the list.
function duplicateSandwich(a) {
    let result = a
    let temp
    let indexFirstDuplicate
    let indexSecondDuplicate
    for (let i = 0; i < a.length; i++) {
        temp = a[i]
        for (let j = 0; j < a.length; j++) {
            if (temp === a[j] && a.lastIndexOf(temp) !== a.indexOf(temp)) {
                indexFirstDuplicate = a.indexOf(temp)
                indexSecondDuplicate = a.lastIndexOf(temp)
                break
            }
        }
    }
    result = result.slice(indexFirstDuplicate + 1, indexSecondDuplicate)
    return result
}

duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])// [2, 3, 4, 5, 6]
duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])// ["Hello", "Example", "hello"]
duplicateSandwich([0, 0])// []

// In English, all words at the begining of a sentence should begin with a capital letter.You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence. For example, input:
// "hello. my name is inigo montoya. you killed my father. prepare to die." output: "Hello. My name is inigo montoya. You killed my father. Prepare to die."
// You may assume:there will be no punctuation besides full stops and spaces all but the last full stop will be followed by a space and at least one word

function fix(paragraph) {
    if (paragraph.length) {
        let result = paragraph
        result = result.split('. ').map(el => el.split('')[0].toUpperCase() + el.slice(1)).join('. ')
        return result
    } else return paragraph
}

fix("")//, "")
fix("hi.")// "Hi.")
fix("hello. my name is inigo montoya. you killed my father. prepare to die.")//"Hello. My name is inigo montoya. You killed my father. Prepare to die."

// Write a function to split a string and convert it into an array of words. For example:
const stringToArray = string => string.split(' ')

stringToArray("Robin Singh")// ["Robin", "Singh"];
stringToArray("I love arrays they are my favorite")// ["I", "love", "arrays", "they", "are", "my", "favorite"]);