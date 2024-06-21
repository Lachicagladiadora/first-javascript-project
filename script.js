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

  const onChange = (e)=>{
    const value = e.target.value
    console.log({value})
  }

  const write = (number)=>{
    return number
  }


inputDisplayElement.addEventListener('input', (e)=>onChange(e))
calculateButtonElement.addEventListener('click', getResult)
displayElement.addEventListener('submit', (e)=>e.preventDefault())

number1ButtonElement.addEventListener('click', ()=>write(1))
number2ButtonElement.addEventListener('click', ()=>write(2))
number3ButtonElement.addEventListener('click', ()=>write(3))
number4ButtonElement.addEventListener('click', ()=>write(4))
number5ButtonElement.addEventListener('click', ()=>write(5))
number6ButtonElement.addEventListener('click', ()=>write(6))
number7ButtonElement.addEventListener('click', ()=>write(7))
number8ButtonElement.addEventListener('click', ()=>write(8))
number9ButtonElement.addEventListener('click', ()=>write(9))
number0ButtonElement.addEventListener('click', ()=>write(0))

