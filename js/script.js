function clear() {
    console.clear()
}


// Выведите строку по одному слову в столбик, выравние по правому краю
function wordsInColumn(text) {
    let maxLengthWord = Math.max(...text.split(' ').map(el => el.length))
    // let str = text.split(' ').map(el => `${el}\n`).join('')
    let arr = text.split(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let tempSpace = maxLengthWord - arr[i].length
        let newWord = arr[i].split('')

        if (i === 0 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (i !== arr.length - 1 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (i === arr.length - 1 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}`.split(''))
            result.push(`${newWord.join('')}`)
        }
        //For biggest word
        else if (newWord.length === maxLengthWord && i === 0) {
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        }
        else if (newWord.length === maxLengthWord && i !== arr.length - 1) {
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        }
        else if (newWord.length === maxLengthWord && i === arr.length - 1) {
            console.log(`${newWord.join('')}`.split(''))
            result.push(`${newWord.join('')}`)
        }
    }
    console.log(result)
    console.log(result.join(''))
}

// wordsInColumn('I will get everything I want')
// wordsInColumn('Enjoy every moment')
// wordsInColumn('Live without regrets')
wordsInColumn('Never look back')