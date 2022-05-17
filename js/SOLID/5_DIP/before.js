// Dependence inversion principle (5_DIP)
function writeFile(){

}

class TerminalPrinter {
    write(msg){
        console.log(msg)
    }
}

class FilePrinter {
    write(msg){
        writeFile('log.txt')
    }
}