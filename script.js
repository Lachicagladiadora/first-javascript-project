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


const displayElement = document.getElementById("display")
const inputDisplayElement = document.getElementById("input-display")
const calculateButtonElement = document.getElementById("calculate")

if(!displayElement)console.warn('not found "id" from "displayElement"')
if(!inputDisplayElement)console.warn('not found "id" from "inputDisplayElement"')
if(!calculateButtonElement)console.warn('not found "id" from "calculateButtonElement"')

  
  const getResult=()=>{
    console.log('result')
  }

  // inputDisplayElement.addEventListener("onchange", (e)=>console.log(e.target.value))

  calculateButtonElement.addEventListener('click', getResult())
  displayElement.addEventListener('submit', (e)=>e.preventDefault())