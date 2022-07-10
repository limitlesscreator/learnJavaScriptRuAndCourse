let elem = document.getElementById('div2')
let style = window.getComputedStyle(elem).color

elem.setAttribute('value', '28')
console.log(elem.getAttribute('value'))
elem.removeAttribute('style')
console.log(elem)

let test2 = document.createElement('div')
test2.innerHTML = `Test2`
test2.setAttribute('id','test2')

let childTest1 = document.createElement('span')
let childTest2 = document.createElement('span')
childTest1.innerHTML = 'Child 1'
childTest2.innerHTML = 'Child 2'

test2.append(childTest1)
test2.prepend(childTest2)
console.log(test2)


elem.after(test2)


// clear interval repeating

let startInterval = document.getElementById('startI')
let stopInterval = document.getElementById('cancelI')
let count = 0
let firstInterval

function intervalFunction() {
    console.log(count)
    count++
}

function start(){
   firstInterval = setInterval(intervalFunction,1000)
}

function stop(){
    clearInterval(firstInterval)
}


// const firstInterval =  setInterval(intervalFunction,1000)
startInterval.addEventListener('click', start)
stopInterval.addEventListener('click', stop)

// finished reading on page 34 you don't know js Async

console.log(window.getComputedStyle(elem).fontSize)
console.clear()
let store1 = new Set([1,2,3,4])
let store2 = {
    'one': 1,
    'two': '2',
    [Symbol.iterator](n = 10){
        let i = 0
        return {
            next(){
                if(i < n){
                    return {value: ++i, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}

// for (let elem of store2){
//     console.log(elem)
// }

console.log(store2.next())
