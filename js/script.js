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
        console.log(error.name + ' ' + error.message)
    })
}

const recordVideoOne = new Promise((resolve,reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve,reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 1 Recorded')
})

Promise.all([recordVideoOne,recordVideoThree,recordVideoTwo]).then((messages) => {
    console.log(messages)
})