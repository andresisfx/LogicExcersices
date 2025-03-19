

//?---------------------------------------Set()-------------------------------------------



//* Un Set es una colección de valores únicos, lo que significa que no puede contener elementos duplicados. Es útil cuando necesitas almacenar valores sin repetirlos.

//* Características principales:

//* Valores únicos: No permite duplicados.

//* Sin índices: Los elementos no tienen una posición específica (no se accede con índices como en los arrays).

//* Iterable: Puedes recorrerlo con un bucle for...of o métodos como forEach.

//* Sintaxis:


// *const miSet = new Set([iterable]);
//* iterable: Opcional. Un array o cualquier otro iterable cuyos elementos se añadirán al Set.

//* Métodos principales de Set:
//* Método                	Descripción
//* add(valor)	Añade un valor al Set. Si ya existe, no lo añade.
//* delete(valor)	Elimina un valor del Set. Devuelve true si el valor existía.
//* has(valor)	Verifica si un valor existe en el Set. Devuelve true o false.
//* clear()	Elimina todos los valores del Set.
//* size	Propiedad que devuelve el número de elementos en el Set.

//*Ejemplo básico:
console.log("-------------------------------------Coleccion de datos set()-------------------------------")

const miSet = new Set();

miSet.add(1); //* Añade 1
miSet.add(2); //* Añade 2
miSet.add(1); //*No añade 1, porque ya existe

console.log("Aquí el set",miSet); //* Set { 1, 2 }
console.log("comprobando con miSet.has(1)",miSet.has(1)); //* true
console.log("comprobar el tamaño del set con miSet.size",miSet.size); //* 2

miSet.delete(2); //* Elimina 2
console.log("miSet despuesd de eliminar con miSet.delete(2)",miSet); //* Set { 1 }

miSet.clear(); //* Elimina todos los elementos
console.log("eliminando todos los elemntos con miSet.clear()",miSet); // Set {}
//TODO Ejercicio con Set:
// *Ejercicio 1: Eliminar duplicados de un array
//* Escribe una función que tome un array y devuelva un nuevo array sin elementos duplicados usando un Set.


function eliminarDuplicados(array) {
  const set = new Set(array); //* Crea un Set a partir del array
  return [...set]; //* Convierte el Set de nuevo a un array
}

const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);

console.log("\nRespuesta al Ejercicio 1: Eliminar duplicados de un array",arraySinDuplicados); //* [1, 2, 3, 4, 5]