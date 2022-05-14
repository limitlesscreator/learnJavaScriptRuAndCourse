// Single Responsibility Principle

class News { // current class only for updating news
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    // toHTML() {
    //     return `
    //     <div>
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //     </div>
    //     `
    // }
    //
    // toJson(){
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     },null, 2)
    // }
}


// console.log(news.toHTML()) нарушение! принципа Single Responsibility Principle
// console.log(news.toJson()) нарушение! принципа Single Responsibility Principle // должен быть отдельный класс по выводу информации в определённом формате

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
         <div>
            <h1>${this.news.title}</h1>
             <p>${this.news.text}</p>
         </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
        <news>
            <title>${this.news.title}</title>
            <text>${this.news.text}</text>
        </news>
        `
    }
}

const printer = new NewsPrinter(
    new News('Salary', 'Aston has the best salary for workers') // :D
)

console.log(printer.html())
console.log(printer.xml())
console.log(printer.json()  )



function Random(){
    this.name = 'Vova'
    this.age = 21
    this.sayName = function(){
        console.log(this.name)
    }
}

const man = new Random()

class Random2{
    constructor() {
        this.something = 5
    }
    showSomething(){
        console.log(this.something)
    }
}

const man2 = new Random2()

console.log(Object.getOwnPropertyNames(man))
console.log(Object.getOwnPropertyNames(man2))