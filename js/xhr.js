
const requestURL = "https://jsonplaceholder.typicode.com/users"

function sendRequest(){
    return new Promise()
    const xhr = new XMLHttpRequest()

    xhr.open("GET", requestURL)

    xhr.responseType = "json"

    xhr.onload = () => {
        if (xhr.status >= 400){
            console.error(xhr.response)
        }
        else {
            console.log(xhr.response)
        }
    }

    xhr.onerror = () => {
        console.log(xhr.response)
    }

    xhr.send()
}
