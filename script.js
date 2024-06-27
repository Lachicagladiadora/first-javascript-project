console.log('Hello, world');

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
  
  const getResult=()=>{
    console.log('result')
  }

  const numbers = [0,1,2,3,4,5,6,7,8,9]
  const constants = ['pi', 'e']
  const valueconst = {'pi': 22/7, 'e': 2.718}

  const onChange = (e)=>{
    const value = e.target.value
    console.log({value})
    if(numbers.some(value)) return value
    if(constants.some(value)) return valueconst[value]
    // if()
    else return value= ''
  }

inputDisplayElement.addEventListener('input', (e)=>onChange(e))
// inputDisplayElement.addEventListener('keyup', e=>{
//   if(e.code === null) return''
//   if(e.code === undefined) return ''
//   if(typeof(e.code) === Number)return e.code
// })
calculateButtonElement.addEventListener('click', getResult)
displayElement.addEventListener('submit', (e)=>e.preventDefault())
