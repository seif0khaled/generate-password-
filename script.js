let capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "/"]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
 let textBox =document.querySelector(".textBox")

 function random(length) {
    let rand = Math.floor(Math.random() * length)
    return rand
}

 function generate() {
    let str = "";
    for (i = 0; i < 2; i++) {
        let smallN = random(smallLetters.length)
        let capN = random(capitalLetters.length)
        let symbolN = random(specialChars.length)
        let numN = random(numbers.length)

        str = str + smallLetters[smallN] + capitalLetters[capN] + specialChars[symbolN] + numbers[numN]
    }
    console.log(str)
    textBox.value = str
}
