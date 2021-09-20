function start(){
    function clear() {
        console.clear()
    }


    let p = new Promise((resolve, reject) => {
        let a = 1 + 1
        if (a === 2) {
            resolve('Success')
        } else {
            reject('Failed')
        }
    })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('Error inside Promise' + message)
// })
/////////////////////////////////////////////////////////////////
// not good example of code bellow without Promise
    {
        const userLeft = false
        const userWatchingCatMeme = true

        function watchTutorialCallback(callback, errorCallback) {
            if (userLeft) {
                errorCallback({
                    name: 'User Left',
                    message: ':('
                })
            } else if (userWatchingCatMeme) {
                errorCallback({
                    name: 'User Watching Cat Meme',
                    message: 'WebDevSimplified < Cat'
                })
            } else {
                callback('Thumbs up and Subscribe')
            }
        }

        // watchTutorialCallback((message) => {
        //     console.log('Success: ' + message)
        // }, (error) => {
        //     console.log(error.name + ' ' + error.message)
        // })
    }

// good example of code bellow with Promise :)

    {
        const userLeft = false
        const userWatchingCatMeme = true

        function watchTutorialPromise() {
            return new Promise((resolve, reject) => {
                if (userLeft) {
                    resolve({
                        name: 'User Left',
                        message: ':('
                    })
                } else if (userWatchingCatMeme) {
                    reject({
                        name: 'User Watching Cat Meme',
                        message: 'WebDevSimplified < Cat'
                    })
                } else {
                    resolve('Thumbs up and Subscribe')
                }
            })
        }

        watchTutorialPromise().then((message) => {
            console.log('Success: ' + message)
        }).catch((error) => {
            // console.log(error.name + ' ' + error.message)
        })
    }

    const recordVideoOne = new Promise((resolve, reject) => {
        resolve('Video 1 Recorded')
    })

    const recordVideoTwo = new Promise((resolve, reject) => {
        resolve('Video 2 Recorded')
    })

    const recordVideoThree = new Promise((resolve, reject) => {
        resolve('Video 1 Recorded')
    })

    Promise.all([recordVideoOne, recordVideoThree, recordVideoTwo]).then((messages) => {
        // console.log(messages)
    })

//start
//Async code example
// setTimeout(() => {
//     console.log('We are in the timeout')
// },1000)

    console.log('Start')

    function loginUser(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({userEmail: email})
            }, 1500)
        })
    }

    const user = loginUser('deved@mail.ru', 123456)
        .then(obj => {
            console.log(obj)
        })
        .then(() => console.log('End'))
        .catch(() => console.log('Error'))

//Practice Call Stack

    function multiply(a, b) {
        return a * b
    }

    function square(n) {
        return multiply(n, n)
    }

    function printSquare(n) {
        const result = square(n)
        console.log(result)
    }

    setInterval(function timeout() {
        setTimeout(function timeout() {
            console.log('3')
        }, 1000)
    }, 1000)
}

console.log('start')

setTimeout(() => {
    console.log('timer 1')
    setTimeout(() => {
        console.log('timer 2')
    },0)
},0)

setTimeout(() => {
    console.log('timer3')
}, 0)

console.log('end')

//start
//end
//
// callStack = [1,3,2]

