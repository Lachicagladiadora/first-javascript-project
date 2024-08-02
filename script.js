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

if(!inputDisplayElement)console.warn('not found "id" from "inputDisplayElement"')
if(!calculateButtonElement)console.warn('not found "id" from "calculateButtonElement"')
if(!displayElement)console.warn('not found "id" from "displayElement"')

if(!number1ButtonElement)console.warn('not found "id" from "number1ButtonElement"')
if(!number2ButtonElement)console.warn('not found "id" from "number2ButtonElement"')
if(!number3ButtonElement)console.warn('not found "id" from "number3ButtonElement"')
if(!number4ButtonElement)console.warn('not found "id" from "number4ButtonElement"')
if(!number5ButtonElement)console.warn('not found "id" from "number5ButtonElement"')
if(!number6ButtonElement)console.warn('not found "id" from "number6ButtonElement"')
if(!number7ButtonElement)console.warn('not found "id" from "number7ButtonElement"')
if(!number8ButtonElement)console.warn('not found "id" from "number8ButtonElement"')
if(!number9ButtonElement)console.warn('not found "id" from "number9ButtonElement"')
if(!number0ButtonElement)console.warn('not found "id" from "number0ButtonElement"')

if(!additionButtonElement) console.warn('not found "id" from "addition"')
if(!subtractionButtonElement) console.warn('not found "id" from "subtraction"')
if(!multiplicationButtonElement) console.warn('not found "id" from "multiplication"')
if(!divisionButtonElement) console.warn('not found "id" from "division"')
  
if(!deleteButtonElement)console.warn('not found "id" from "delete"')
if(!cleanButtonElement)console.warn('not found "id" from "clean"')

const INPUT_VALUE = [""]
console.log({INPUT_VALUE}, '1')
  
const getAddition = (a, b) => {
 const addition = a+b
 return addition
}

const getSubtract = (a,b) => {
  const subtract = a-b
  return subtract
}

const getMultiplication = (a,b) =>{
  const multiplication = a * b
  return multiplication
}

const getDivision = (a,b)=>{
  const division = a/b
  return division
}

  // const numbers = [0,1,2,3,4,5,6,7,8,9]
  // const constants = ['pi', 'e']
  // const valueconst = {'pi': 22/7, 'e': 2.718}

const onChange = (e)=>{
  console.log({e}, "event", e.data)
  const possibleValue = (e.target.value)
  console.log({possibleValue})
  onWrite(possibleValue)
  
  console.log({INPUT_VALUE})
}

// al navegador atar un evnto key down


const onWrite=(value)=>{
//  debe ejecutarse el onChange
  INPUT_VALUE.push(value)
  inputDisplayElement.innerText = "".concat(...INPUT_VALUE)
  
  console.log({INPUT_VALUE}, '3')
}

const onPressKeybord = (e, value)=>{
console.log({e},{value})
e.preventDefault()
const keyPress = e.key
if (keyPress === Number(value)) {
  console.log('seva')
  onWrite(value)
} else {
  console.log('wally')
}


}

const getResult=()=>{
  inputDisplayElement.value = "wally"
  console.log({INPUT_VALUE}, '4')

  console.log('result')
}

// que en el input se escriba lo que se presiona con los botones

const onDelete= ()=>{
  INPUT_VALUE.pop()
  inputDisplayElement.value = "".concat(...INPUT_VALUE)

}

const onClean = ()=>{
  const lenght = INPUT_VALUE.length
  if (lenght){
    for(let i = 0; i < lenght; i++){
      INPUT_VALUE.pop()
    }
    inputDisplayElement.value = ''.concat(...INPUT_VALUE)
  }
  inputDisplayElement.value = ''.concat(...INPUT_VALUE)
}

// que no se pierda foco del input al presionar fuera de este
// hacer que funcionen los botones para escibir en el input


// que funcione el boton de borrar
// que funcione el boton igual
// que funcione el boton de limpiar input

// que sume decimales

// inputDisplayElement.value = value
// inputDisplayElement.innerText

number0ButtonElement.addEventListener("click", ()=>onWrite('0'))
number1ButtonElement.addEventListener("click", ()=>onWrite('1'))
number2ButtonElement.addEventListener("click", ()=>onWrite('2'))
number3ButtonElement.addEventListener("click", ()=>onWrite('3'))
number4ButtonElement.addEventListener("click", ()=>onWrite('4'))
number5ButtonElement.addEventListener("click", ()=>onWrite('5'))
number6ButtonElement.addEventListener("click", ()=>onWrite('6'))
number7ButtonElement.addEventListener("click", ()=>onWrite('7'))
number8ButtonElement.addEventListener("click", ()=>onWrite('8'))
number9ButtonElement.addEventListener("click", ()=>onWrite('9')) 


document.addEventListener("keypress", ()=>console.log("eva y wally"))
// window.addEventListener("keypress", ()=>console.log("wally y eva"))

additionButtonElement.addEventListener("click", ()=>onWrite('+'))
subtractionButtonElement.addEventListener("click", ()=>onWrite('-'))
multiplicationButtonElement.addEventListener("click", ()=>onWrite('×'))
divisionButtonElement.addEventListener("click", ()=>onWrite('÷'))

deleteButtonElement.addEventListener("click", onDelete)
calculateButtonElement.addEventListener("click", getResult)
cleanButtonElement.addEventListener("click", onClean)