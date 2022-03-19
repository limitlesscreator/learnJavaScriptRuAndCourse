// https://metanit.com/web/javascript/3.3.php
// closure and function IIFE
// Immediately Invoked Function Expression

(function (n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
        console.log(`Factorial of number ${i} equal ${result}`)
    }
}(4))

// Child functions have access to the scope of their parent functions

let x = 1

const parentFunction = () => {
    // local scope
    let myValue = 2
    console.log(x)
    console.log(myValue)

    const childFUnction = () => {
        console.log(x += 5)
        console.log(myValue += 1)
    }

    childFUnction()
}

parentFunction()

// Debounce Functions

const initApp = () => {
    const button = document.querySelector('button')
    // button.addEventListener('click', debounce(clickLog, 2000))
    button.addEventListener('click', () => {
        button.disabled = true
        clickLog()
        setTimeout(() => {
            button.disabled = false
        }, 2000)
    })
}
const clickLog = () => console.log(`clicked`)

document.addEventListener('DOMContentLoaded', initApp)

const debounce = (fn, delay) => {
    let id

    console.log(`id at immediate load: ${id}`)

    return (...args) => {
        console.log(`previous id: ${id}`)
        if (id) clearTimeout(id)

        id = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

// forEach in some case is BAD, example bellow :)

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const getPost = async (id) => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
}

const useForEach = (ids) => {
    ids.forEach(async (id) => {
        const data = await getPost(id)
        console.log(data)
    })
}

const initApp2 = async () => {
    useForEach(ids)
}
// initApp2(ids)
// here is results without order that we want
console.clear()

// Recursion in JS
// Official Definition of Recursion:
// In computer science, recursion is a method of solving problem where the solution depends on solution to smaller
// instances of the  same problem. Any iteration function can be recursive instead.

// The Fibonacci Sequence

// Without Recursion
const fibonacciCount = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2)
        array.push(nextToLast + last)
        num -= 1
    }
    return array
}

console.log(fibonacciCount(12))

// With Recursion
const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array
    const [lastToNext, last] = array.slice(-2)
    return fib(num - 1, [...array, lastToNext + last])
}

console.log(fib(12))

const artistsByGenre = {
    jazz: ['Miles Davis', 'John Coltrane'],
    rock: {
        classic: ['Bob Seger', 'The Eagles'],
        hair: ['Def Leppard', 'Whitesnake', 'Poison'],
        alt: {
            classic: ['Pearl Jam', 'The Killers'],
            current: ['Joywave', 'SIr Sly']
        }
    },
    unclassified: {
        new: ['Caamp', 'Neil Young'],
        classic: ['Seal', 'Morcheeba', 'Chris Stapleton']
    }
}

//without recursion
const showArtists = (arr) => {
    let result = []
    Object.keys(arr).forEach(el => {
        if (Array.isArray(arr[el])) {
            arr[el].forEach(el => result.push(el))
        } else {
            console.log(Object.keys(arr[el]))
            Object.keys(arr[el]).forEach(secEl => {
                if (Array.isArray(arr[el][secEl])) {
                    arr[el][secEl].forEach(el => {
                        result.push(el)
                    })
                } else {
                    console.log(Object.keys(arr[el][secEl]))
                    Object.keys(arr[el][secEl]).forEach(thirdEl => {
                        if (Array.isArray(arr[el][secEl][thirdEl])) {
                            arr[el][secEl][thirdEl].forEach(pushEl => {
                                result.push(pushEl)
                            })
                        }
                    })
                }
            })
        }        // console.log(Array.isArray(arr[el]))
    })
    console.log(result)
}

showArtists(artistsByGenre)

// The better solution with recursion

const getArtistNames = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        console.log(dataObj[key])
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist)
            })
        }
        // console.log(dataObj[key])
        getArtistNames(dataObj[key], arr)
    })
    return arr
}

getArtistNames(artistsByGenre)

