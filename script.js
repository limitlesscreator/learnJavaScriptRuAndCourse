// Repeating promises

// let data1 = new Promise((resolve,reject) => {
//     resolve(fetch('https://jsonplaceholder.typicode.com/todos'))
// })
// let data2 = setTimeout(() => {
//     return new Promise((resolve,reject) => {
//         resolve(5)
//     })
// },1000)
//
// Promise.race([data1,data2]).then(el => console.log(el))
//

const promiseOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promiseOne Resolved!')
            // reject('promiseOne Rejected :D')
        }, 500)
    })
}

const promiseTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('promiseTwo Resolved!')
            reject('promiseTwo Rejected :D')
        }, 400)
    })
}

const promiseThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise Three Resolved!')
        }, 700)
    })
}

const throwError = () => new Promise((_, reject) => {
    setTimeout(() => {
        reject('took too long time')
    }, 500)
})


const fetchData = async () => {
    try {
        // const beforeTime = new Date()
        const responseOne = await promiseOne()
        const responseTwo = await promiseTwo()
        const responseThree = await promiseThree()
        // const afterTime = new Date()
        //
        // console.log(responseOne, responseTwo, responseThree, afterTime - beforeTime)

        const beforeTime = new Date()
        // Running all of these in parallel
        // const response = await Promise.all([promiseOne(),promiseTwo(),promiseThree()])
        // the first one
        const response = await Promise.all([promiseThree(), throwError()])
        const afterTime = new Date()
        console.log('response from promise race', response, afterTime - beforeTime)
    } catch (error) {
        console.log("i'm sorry the api sucks :)", error)
    }
}
fetchData()




