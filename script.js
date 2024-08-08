const containElement = document.getElementById("contain")
const inputDisplayElement = document.getElementById("input-display")
const calculateButtonElement = document.getElementById("calculate")
const displayElement = document.getElementById("display")

const number1ButtonElement = document.getElementById("number1")
const number2ButtonElement = document.getElementById("number2")
const number3ButtonElement = document.getElementById("number3")
const number4ButtonElement = document.getElementById("number4")
const number5ButtonElement = document.getElementById("number5")
const number6ButtonElement = document.getElementById("number6")
const number7ButtonElement = document.getElementById("number7")
const number8ButtonElement = document.getElementById("number8")
const number9ButtonElement = document.getElementById("number9")
const number0ButtonElement = document.getElementById("number0")

const additionButtonElement = document.getElementById("addition")
const subtractionButtonElement = document.getElementById("subtraction")
const multiplicationButtonElement = document.getElementById("multiplication")
const divisionButtonElement = document.getElementById("division")

const deleteButtonElement = document.getElementById("delete")
const cleanButtonElement = document.getElementById("clean")

if (!inputDisplayElement) console.warn('not found "id" from "inputDisplayElement"')
if (!calculateButtonElement) console.warn('not found "id" from "calculateButtonElement"')
if (!displayElement) console.warn('not found "id" from "displayElement"')

if (!number1ButtonElement) console.warn('not found "id" from "number1ButtonElement"')
if (!number2ButtonElement) console.warn('not found "id" from "number2ButtonElement"')
if (!number3ButtonElement) console.warn('not found "id" from "number3ButtonElement"')
if (!number4ButtonElement) console.warn('not found "id" from "number4ButtonElement"')
if (!number5ButtonElement) console.warn('not found "id" from "number5ButtonElement"')
if (!number6ButtonElement) console.warn('not found "id" from "number6ButtonElement"')
if (!number7ButtonElement) console.warn('not found "id" from "number7ButtonElement"')
if (!number8ButtonElement) console.warn('not found "id" from "number8ButtonElement"')
if (!number9ButtonElement) console.warn('not found "id" from "number9ButtonElement"')
if (!number0ButtonElement) console.warn('not found "id" from "number0ButtonElement"')

if (!additionButtonElement) console.warn('not found "id" from "addition"')
if (!subtractionButtonElement) console.warn('not found "id" from "subtraction"')
if (!multiplicationButtonElement) console.warn('not found "id" from "multiplication"')
if (!divisionButtonElement) console.warn('not found "id" from "division"')

if (!deleteButtonElement) console.warn('not found "id" from "delete"')
if (!cleanButtonElement) console.warn('not found "id" from "clean"')

const inputValue = []
console.log({ inputValue }, '1')

const getAddition = (a, b) => {
  const addition = a + b
  return addition
}

const getSubtract = (a, b) => {
  const subtract = a - b
  return subtract
}

const getMultiplication = (a, b) => {
  const multiplication = a * b
  return multiplication
}

const getDivision = (a, b) => {
  const division = a / b
  return division
}

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const SIGNS = ['+', "-", "*", "/", "%", "√", "÷", "×"]
const DELETE_KEYBOARD = ["Backspace", "Delete"]
const EQUAL = ['Enter', "="]
// const constants = ['pi', 'e']
// const valueconst = {'pi': 22/7, 'e': 2.718}

const onDelete = () => {
  inputValue.pop()
  inputDisplayElement.innerText = "".concat(...inputValue)
}

const onClean = () => {
  const lenght = inputValue.length
  if (lenght) {
    for (let i = 0; i < lenght; i++) {
      inputValue.pop()
    }
    inputDisplayElement.innerText = ''.concat(...inputValue)
  }
  inputDisplayElement.innerText = ''.concat(...inputValue)
}

const processInput = (value) => {
  const haveOperation = inputValue.some((c) => SIGNS.includes(c))
  if (haveOperation && SIGNS.includes(value)) return

  if (EQUAL.includes(value)) getResult()
  if (DELETE_KEYBOARD.includes(value)) onDelete()

  if (NUMBERS.includes(value)) {
    const lastElement = inputValue[inputValue.length - 1]
    inputDisplayElement.innerText = `${inputValue.join('')}${value}`
    if (/^([0-9])*$/.test(lastElement)) {
      inputValue[inputValue.length - 1] = `${lastElement}${value}`
    } else {
      inputValue.push(value)
    }
  }

  if (SIGNS.includes(value)) {
    const lastElement = inputValue[inputValue - 1]

    if (/^([0-9])*$/.test(lastElement)) {
      inputValue.push(value)
    } else {
      inputValue.pop()
      inputValue.push(value)
    }
  }
}

const onClick = (e) => {
  try {
    console.log({ e })
    processInput(e.target.value)
  } catch (error) {
    console.error(error)
  }
}

const onPressKeybord = (e) => {
  try {
    console.log({ e })
    e.preventDefault()
    const keyPress = e.key
    processInput(keyPress)
    console.log({ inputValue })
  } catch (error) {
    console.error(error)
  }
}




const getResult = (inputValue) => {

  inputDisplayElement.innerText = "wally"


  console.log({ inputValue }, '4')
  console.log('result')
}
// que sume decimales

number0ButtonElement.addEventListener("click", onClick)
number1ButtonElement.addEventListener("click", onClick)
number2ButtonElement.addEventListener("click", onClick)
number3ButtonElement.addEventListener("click", onClick)
number4ButtonElement.addEventListener("click", onClick)
number5ButtonElement.addEventListener("click", onClick)
number6ButtonElement.addEventListener("click", onClick)
number7ButtonElement.addEventListener("click", onClick)
number8ButtonElement.addEventListener("click", onClick)
number9ButtonElement.addEventListener("click", onClick)
additionButtonElement.addEventListener("click", onClick)
subtractionButtonElement.addEventListener("click", onClick)
multiplicationButtonElement.addEventListener("click", onClick)
divisionButtonElement.addEventListener("click", onClick)

window.addEventListener("keypress", (e) => onPressKeybord(e))

// configurar con onclick
deleteButtonElement.addEventListener("click", onDelete)
calculateButtonElement.addEventListener("click", getResult)
cleanButtonElement.addEventListener("click", onClean)
