function clear() {
    console.clear()
}

// window.addEventListener("DOMContentLoaded",() => {
//     function req(){
//         const request = new XMLHttpRequest()
//         request.open("GET", "https://jsonplaceholder.typicode.com/")
//         request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//         request.send();
//         request.addEventListener("readystatechange", function (){
//             if (request.readyState === 4 && request.status === 200){
//                 let data = JSON.parse(request.response)
//                 console.log(data)
//             }
//             else {
//                 console.error("Something is going wrong  ")
//             }
//         })
//     }
//     req()
// })
console.log("Request data...")
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(("Preparing data..."))
        const backendData = {
            server: "aws",
            port: 2000,
            status: "working"
        }
        resolve(backendData)
    },2000)
})

p.then(data => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
            // consol.log("Data received", back)
        })
    })

    p2.then(clientData => {
        console.log("Data received", clientData)
    })
})

