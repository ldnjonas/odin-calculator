let add = (...args) => {return args.reduce((accumulator,currentValue) => accumulator + currentValue)};

let substract = (...args) => {return args.reduce((accumulator,currentValue) => accumulator - currentValue)};

let multiply = (...args) => {return (args.reduce((accumulator,currentValue) => accumulator * currentValue)).toFixed(8)};

let divide = (...args) => {
    if(args[1] === o){
        alert("You can't divide by 0!")
        return
    }
    return (args.reduce((accumulator,currentValue) => accumulator / currentValue)).toFixed(8)
};

let num1
let num2
let operator
let operatorPossible = true

let outputField = document.querySelector("#output-field")
outputField.textContent = ""
let addToTextField = (input) => (outputField.textContent += input)







let button1 = document.querySelector("#button-1")
let button2 = document.querySelector("#button-2")
let button3 = document.querySelector("#button-3")
let button4 = document.querySelector("#button-4")
let button5 = document.querySelector("#button-5")
let button6 = document.querySelector("#button-6")
let button7 = document.querySelector("#button-7")
let button8 = document.querySelector("#button-8")
let button9 = document.querySelector("#button-9")

let plusButton = document.querySelector("#plus-button")
let minusButton = document.querySelector("#minus-button")
let multiplicationButton = document.querySelector("#multiplication-button")
let divisionButton = document.querySelector("#division-button")
let resultButton = document.querySelector("#result-button")
let decimalButton = document.querySelector("#decimal-button")

let clearButton = document.querySelector("#clear-button")
let deleteButton = document.querySelector("#delete-button")


button1.addEventListener("click",() => addToTextField("1"))
button2.addEventListener("click",() => addToTextField("2"))
button3.addEventListener("click",() => addToTextField("3"))
button4.addEventListener("click",() => addToTextField("4"))
button5.addEventListener("click",() => addToTextField("5"))
button6.addEventListener("click",() => addToTextField("6"))
button7.addEventListener("click",() => addToTextField("7"))
button8.addEventListener("click",() => addToTextField("8"))
button9.addEventListener("click",() => addToTextField("9"))


plusButton.addEventListener("click",() => {
    if(!operatorPossible) return
    saveOutputFieldContentToNum1()
    operator = "+"
    addToTextField("+")
    operatorPossible = false
})

minusButton.addEventListener("click",() => {
    if(!operatorPossible) return
    saveOutputFieldContentToNum1()
    operator = "-"
    addToTextField("-")
    operatorPossible = false
})

multiplicationButton.addEventListener("click",() => {
    if(!operatorPossible) return
    saveOutputFieldContentToNum1()
    operator = "*"
    addToTextField("*")
    operatorPossible = false
})

divisionButton.addEventListener("click",() => {
    if(!operatorPossible) return
    saveOutputFieldContentToNum1()
    operator = "/"
    addToTextField("/")
    operatorPossible = false
})

resultButton.addEventListener("click",() => {
    operatorPossible = true
    saveOutputFieldContentToNum2()
    clearTextField() 
    addToTextField(operate(num1,operator,num2))
})

decimalButton.addEventListener("click",() => {
    operatorPossible = true
    addToTextField(".")
})

clearButton.addEventListener("click", () => clearTextField())
deleteButton.addEventListener("click", () => 
    {
    let lastCharacter = outputField.textContent[outputField.textContent.length-1]
    if(isOperator(lastCharacter)) operatorPossible = true
    outputField.textContent = outputField.textContent.slice(0,outputField.textContent.length-1)
    }
)


let clearTextField = () => {
    (outputField.textContent = "")
    operatorPossible = true
}


let saveOutputFieldContentToNum1 = () => {(num1 = outputField.textContent)}
let saveOutputFieldContentToNum2 = () => {(num2 = outputField.textContent.split(operator)[1].trim())}

let isOperator = (input) => {
    switch (input){
        case "+":
            return true
        case "-":
            return true
        case "*":
            return true
        case "/":
            return true    
        default:
            return false
}
}
 
let operate = (num1,op,num2) => {
    num1 = Number.parseFloat(num1)
    num2 = Number.parseFloat(num2)
    switch (op){
        case "+":
            console.log(add(num1,num2))
            return add(num1,num2)
        case "-":
            return substract(num1,num2)
        case "*":
            return multiply(num1,num2)
        case "/":
            return divide(num1,num2)    
        default:
           console.log("Error: Can't recognize calculation operator")
    }
}

