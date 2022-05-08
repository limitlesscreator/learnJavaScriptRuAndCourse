// Symbol.toPrimitive

{
    let obj = {}


    obj[Symbol.toPrimitive] = function (hint) {
        if (hint === 'number') {
            console.log('here')
            return true
        }
        return 1
    }

    // console.log(Number(obj))
}
{
    let obj3 = {}
    let testUser = {
        name: 'Vladimir',
        age: 21,
        [Symbol.toPrimitive](hint){
            alert(`hint: ${hint}`)
            return hint === "string" ? `{name: "${this.name}"}` : this.age
        }
    }
    // console.log(testUser + obj3)

    let multiply = {
        toString(){
            return '2'
        }
    }

    // console.log(String(multiply) * 2)
    let nodeList = document.querySelectorAll('button')
    for (let el of nodeList){
        console.log(el)
    }
    let testStr = 'q w e r t y'
    for (let letter of  testStr){
        console.log(letter)
    }

    let testObj2 = Object.create({},{
        name: {
            value : 'Peet'
        },
        somethingMore: {
            value: 'test'
        }
    })
    console.log(testObj2)

    const user = {
        firstName: 'Roman',
        closeApp() {
            console.log(`${this.firstName} has just cosed the app!`)
        }
    }

    // setTimeout(() => user.closeApp(), 1000)

    function BigUser() {
        this.name = "Вася"

        return

        // return { name: "Godzilla" }
    }

    let result = new BigUser()
    console.log(result)
}

// FunctionExectionContext = {
//
//     ThisBinding: <Global Object>,
//     LexicalEnvironment: {
//     EnvironmentRecord: {
//         Type: "Declarative",
//             Данные о привязках для идентификаторов
            // Arguments: {0: 20, 1: 30, length: 2},
    // },
    // outer: <GlobalLexicalEnvironment>
// },
// VariableEnvironment: {
//     EnvironmentRecord: {
//         Type: "Declarative",
//             Данные о привязках для идентификаторов
            // g: undefined
    // },
    // outer: <GlobalLexicalEnvironment>
// }
// }


// mention that EnvironmentRecord has Arguments