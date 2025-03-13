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

