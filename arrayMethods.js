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


//?------------------------------------------find()-------------------------------------

//TODO Ejersicio 1
//* Tienes un array de números. Usa .find() para encontrar el primer número negativo en el array.

//* Datos de Entrada:

const numbers4 = [1, -3, -5, 2, -7, 9];

const findFirstNegative=(numbers)=>{
 return numbers.find(num=>num<0)
}
console.log("el primer numero negativo es: ",findFirstNegative(numbers4))

//TODO Ejercicio 2: Encontrar el primer usuario mayor de 30 años
//* Enunciado:
// *Tienes un array de objetos que representan usuarios. Cada usuario tiene un nombre y una edad. Usa .find() para encontrar el primer usuario que tenga más de 30 años.

//* Datos de Entrada:

const users2 = [
    { name: "Juan", age: 25 },
    { name: "Ana", age: 35 },
    { name: "Carlos", age: 22 },
    { name: "Luisa", age: 40 }
];

const findMayor30=(users)=>{
   return users.find(user=>user.age>30).age
}
console.log("el priemr usuario mayor de 30 años es:  ",findMayor30(users2))


//?-------------------------------------includes()---------------------------------

// TODO Ejercicio 1: Verificar si un número está en el array
//* Enunciado:
// *Tienes un array de números. Usa .includes() para verificar si el número 5 está en el array.

// *Datos de Entrada:

const numbers5 = [1, 3, 8, 7, 9];

const includesFive=(numbers)=>{
   return numbers.includes(5)
}

console.log("verificando con includes si existe 5: ", includesFive(numbers5))

//?-----------------------------------------slice()------------------------------------

//TODO Ejercicio 1: Extraer una sublista de números
//* Enunciado:
// *Tienes un array de números. Usa .slice() para extraer una sublista que contenga los elementos desde la posición 0 hasta la posición 2 (sin incluir la posición 2).

// *Datos de Entrada:

const numbers6 = [10, 20, 30, 40, 50];

const sliceNumbers=(numbers)=>{
   return numbers.slice(0,2) //! no incluye la posición 2 
}

console.log("lista recortada con slice: ",sliceNumbers(numbers6))

//TODO Ejercicio 2: Extraer los últimos 3 elementos de un array
// *Enunciado:
//* Tienes un array de nombres. Usa .slice() para extraer los últimos 3 elementos del array.

// *Datos de Entrada:


const names = ["Juan", "Ana", "Carlos", "Luisa", "Pedro", "María"];

const extracThreeLastNames=(names)=>{
  return names.slice(names.length-3,names.length)
 //! return names.slice(-3);//  tambien se puede Usar índices negativos para extraer los últimos 3 elementos , de esta forma el método cuenta desde el final del array al inicio
}

console.log("los 3 últimos nombres extraidos con slice son: ",extracThreeLastNames(names))

//?--------------------------------------splice()------------------------------------------

// *Sintaxis de .splice()

// *array.splice(start, deleteCount, item1, item2, ...);
// *Parámetros:
// *start: La posición en el array donde comenzará la modificación.

//* Si es positivo, cuenta desde el inicio del array.

// *Si es negativo, cuenta desde el final del array.

// *deleteCount: El número de elementos a eliminar desde la posición start.

// *Si es 0, no se elimina ningún elemento.

//* Si no se proporciona, se eliminan todos los elementos desde start hasta el final.

// *item1, item2, ...: Elementos que se añadirán al array en la posición start.

//TODO Ejercicio 1: Eliminar y Reemplazar Elementos
// *Enunciado:
// *Tienes un array de nombres. Usa .splice() para:

//* Eliminar 2 nombres a partir de la posición 1.

// *Añadir los nombres "Luisa" y "Pedro" en esa misma posición.

//* Datos de Entrada:

const names2 = ["Juan", "Ana", "Carlos", "María"];

const removeAnsReplaceElements=(names)=>{
  return names.splice(2,2,"Luisa","Pedro")//!retorna los elementos que eliminó, NO RETORNA EL ARRAY
}
console.log("nombres eliminados con splice: ",removeAnsReplaceElements(names2))
console.log("nombres nuevos reemplazados con splice: ",names2)

//TODO Ejercicio 2: Añadir Elementos sin Eliminar
//* Enunciado:
// *Tienes un array de números. Usa .splice() para:

// *Añadir los números 10 y 20 en la posición 2.

// *No eliminar ningún elemento.

// *Datos de Entrada:

const numbers7 = [1, 2, 3, 4];
const replaceNums=(nums)=>{
  nums.splice(1,0,10,20)//!el resultado será [ 1, 10, 20, 2, 3, 4 ] porque se cuenta a partir de la posición que se declara en este caso posición (1)
}
replaceNums(numbers7)

console.log("Array actualizado despues de añadir números con splice: ",numbers7)





//?--------------------------------------------concat()-----------------------------------

//TODO Bonus: Ejercicio Adicional
//* Enunciado:
//* Tienes cuatro arrays: uno de nombres, uno de edades, uno de países y uno de profesiones. Combínalos en un solo array, asegurándote de que el orden sea: array2, array4, array1, array3.

// *Datos de Entrada:

const array1 = ["Juan", "Ana"];
const array2 = [25, 30];
const array3 = ["México", "España"];
const array4 = ["Ingeniero", "Doctor"];

//*Resultado Esperado:

//*El array combinado es: [25, 30, "Ingeniero", "Doctor", "Juan", "Ana", "México", "España"]

const concatenatedArray= array2.concat(array4,array1,array3)
console.log("el array concatenado es :   ",concatenatedArray)

const concatenatedWithSpreadOperator= [...array1,...array2,...array3,...array4]

console.log("array concatenado con spread operator: ",concatenatedWithSpreadOperator)

//?----------------------------------------sort()------------------------------------------

//* ¿Cómo funciona .sort()?
//* El método .sort() se utiliza para ordenar los elementos de un array. Por defecto, convierte los elementos a strings y los ordena alfabéticamente (según su valor Unicode). Sin embargo, para ordenar números u otros tipos de datos, es necesario proporcionar una función de comparación.

//* Sintaxis:

//!array.sort([compareFunction]);
//* Parámetros:
//* compareFunction (opcional): Una función que define el orden de clasificación.

//* Si no se proporciona, los elementos se convierten a strings y se ordenan alfabéticamente.

//* Si se proporciona, debe devolver:

//* Un número negativo si a debe ir antes que b.

//* Cero si a y b son iguales.

//* Un número positivo si a debe ir después que b.

//* Ejemplo básico:
//* javascript
//* Copy
const numbers8 = [3, 1, 4, 2];

//* Ordenar de menor a mayor
const sorted = numbers.sort((a, b) => a - b);

console.log(sorted); // [1, 2, 3, 4]

// TODO  Ejercicio 1: Ordenar un array de objetos
//* Enunciado:
// *Tienes un array de objetos que representan productos. Cada producto tiene un nombre y un precio. Ordena el array de productos de menor a mayor según su precio.

//* Datos de Entrada:

const products = [
    { name: "Camisa", price: 20 },
    { name: "Pantalón", price: 40 },
    { name: "Zapatos", price: 50 },
    { name: "Gorra", price: 10 }
];
//*Resultado Esperado:

[
    { name: "Gorra", price: 10 },
    { name: "Camisa", price: 20 },
    { name: "Pantalón", price: 40 },
    { name: "Zapatos", price: 50 }
]

const orderedProducts= products.sort((a,b)=>a.price-b.price)
const orderedfromEndToStart= products.sort((a,b)=>b.price-a.price)
console.log("productos ordenados con sort de menor a mayor: ",orderedProducts)
console.log("productos ordenados con sort de MAYOR a MENOR: ",orderedfromEndToStart)

//?------------------------------------------reverse()-------------------------------------


//TODO  Ejercicio: Invertir un array de objetos y filtrar elementos
//* Enunciado:
//* Tienes un array de objetos que representan tareas. Cada tarea tiene un id, un nombre y un completado (booleano que indica si la tarea está completada o no). Tu tarea es:

//* Invertir el orden del array de tareas.

//* Filtrar y mostrar solo las tareas que no están completadas.

//* Crear una función que realice estas operaciones y devuelva el resultado.

//* Datos de Entrada:

const tasks = [
    { id: 1, name: "Comprar pan", completed: true },
    { id: 2, name: "Hacer ejercicio", completed: false },
    { id: 3, name: "Llamar al médico", completed: false },
    { id: 4, name: "Estudiar JavaScript", completed: true },
    { id: 5, name: "Pasear al perro", completed: false }
];
//*Resultado Esperado:

[
    { id: 5, name: "Pasear al perro", completed: false },
    { id: 3, name: "Llamar al médico", completed: false },
    { id: 2, name: "Hacer ejercicio", completed: false }
]

const reverseAndFilterTasks=(tasks)=>{
   return tasks.filter(task=>task.completed===false).reverse()
}


console.log("tareas sin filtrar:  ", tasks)
const filteredTasks=reverseAndFilterTasks(tasks);
console.log("tareas filtradas e invertidas:  ",filteredTasks)


//?-----------------------------------------findIndex()-------------------------------------
//TODO Ejercicio: Encontrar el índice del primer número primo en un array
//* Enunciado:
//* Tienes un array de números. Tu tarea es:

//* Encontrar el índice del primer número primo en el array.

//* Si no hay números primos en el array, devolver -1.

// *Crear una función que realice esta operación y devuelva el resultado.

//* Datos de Entrada:


const numbers9 = [16, 6, 8, 9, 10, 11, 12];
// *Resultado Esperado:

//* El índice del primer número primo es: 5

const isPrime=(num)=>{
  if(num<= 1)return false
  for(let i=2;i<=Math.sqrt(num);i++){//! tiene que ser meno o IGUAL a la raiz
    if(num%i===0)return false
  }
  return true
}

const findIndexofFirstPrime=(nums)=>{
  return nums.findIndex((num)=>isPrime(num))
}
console.log("el primer número primo encontrado es : ",findIndexofFirstPrime(numbers9))
