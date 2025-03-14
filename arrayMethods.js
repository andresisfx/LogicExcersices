//? ------------------------------------------reduce()----------------------------------------------

//* Calcular el Total de una Lista de Compras
//* Imagina que tienes una lista de objetos que representan productos en un carrito de compras. Cada producto tiene un nombre y un precio. Tu tarea es usar reduce() para calcular el total de la compra.

//* Datos de Entrada:


const cart = [
    { name: "Camisa", price: 20 },
    { name: "Pantalón", price: 40 },
    { name: "Zapatos", price: 50 },
    { name: "Gorra", price: 10 }
];
//*calcular con impuestos 10%
const taxRate= 0.1 


const calculateTotalAmount=(cart)=>{
  const  value=cart.reduce((acc,cart)=>acc+cart.price,0)
   console.log(`el total de la compra es  ${value+ (value*taxRate)} `)
}
calculateTotalAmount(cart)


//?-------------------------------------------forEach--------------------------------------
//* ¿Qué hace?
//* Itera sobre cada elemento de un array y ejecuta una función para cada uno.

// *No devuelve ningún valor (su retorno es undefined).

// *¿Cuándo usarlo?
// *Cuando solo necesitas realizar una acción con cada elemento del array, como imprimir, modificar una variable externa, o ejecutar una función.

//* No necesitas crear un nuevo array con los resultados.

//TODO  Ejersicio:

//* Calcular el Cuadrado de Cada Número
//* Enunciado:
//* Tienes un array de números. Usa forEach() para calcular el cuadrado de cada número y almacenar los resultados en un nuevo array. Luego, imprime el nuevo array.

//* Datos de Entrada:
//* javascript

const numbers = [1, 2, 3, 4, 5];

let squareNumbersContainer=[];

const calculateSquare=(numbers)=>{
  numbers.forEach((num)=>{
    const squareOfNum= num*num;
    squareNumbersContainer.push(squareOfNum)
    
})
}

const printSquareNums= ()=>{
    squareNumbersContainer.forEach((num,index)=> console.log(`el cuadrado de ${numbers[index]} es igual a ${num}`))
}
calculateSquare(numbers)
printSquareNums()

//?---------------------------------------some()------------------------------------------

//* este método verifica si almenos un elemento cumple la condicion

// *Tienes un array de números. Usa .some() para verificar si hay al menos un número negativo en el array.

//* Datos de Entrada:


const nums = [1, 3, 5, -2, 7, 9];

const verifyNegativeNum=(numbers)=>{
  return numbers.some(num=>num<0)
}
console.log("verificando si hay negativos: ", verifyNegativeNum(nums))

// TODO Ejercicio 2: Verificar si hay usuarios menores de edad
//* Enunciado:
//* Tienes un array de objetos que representan usuarios. Cada usuario tiene un nombre y una edad. Usa .some() para verificar si hay al menos un usuario menor de 18 años.

//* Datos de Entrada:

const users = [
    { name: "Juan", age: 25 },
    { name: "Ana", age: 27 },
    { name: "Carlos", age: 22 },
    { name: "Luisa", age: 19 }
];

const verifyMinor=(users)=>{
  return users.some(user=>user.age<18)
}
console.log("verificando si hay menores de edad:  ",verifyMinor(users))

//?---------------------------------------every()------------------------------------------
// TODO Ejercicio 1: Verificar si todos los números son positivos
//* Enunciado:
// *Tienes un array de números. Usa .every() para verificar si todos los números en el array son positivos (mayores que 0).

// *Datos de Entrada:

const numbers3 = [2, 4, 6, 8, 10];

const verifyPositive=(nums)=>{
   return nums.every(num=>num>0)
}
console.log("verificando si todos son positivos:  ",verifyPositive(numbers3))