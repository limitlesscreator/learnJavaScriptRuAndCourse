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
initApp2(ids)
// here is results without order that we want