//?------------------------------------------for tradicional--------------------------------

// *1. for tradicional
// *¿Para qué sirve?
//* El ciclo for tradicional se usa para iterar sobre un array u otra estructura indexada utilizando un índice numérico. Es muy flexible y te permite controlar manualmente el índice y la condición de parada.

// *Sintaxis:
// *javascript
// *Copy
// *for (inicialización; condición; actualización) {
//   // Código a ejecutar
//* }
//* Ejemplo:
//* javascript
// *Copy
// *const frutas = ["manzana", "banana", "naranja"];

// *for (let i = 0; i < frutas.length; i++) {
// *  console.log(frutas[i]);
//* }
// // Salida:
// // manzana
// // banana
// // naranja*
// *Características:
//* Control total: Tienes control sobre el índice (i), la condición de parada (i < frutas.length) y la actualización (i++).

//* Acceso al índice: Puedes acceder al índice (i) dentro del ciclo.

//* Flexibilidad: Puedes modificar el índice o la condición de parada durante la ejecución.

//* ¿Cuándo usarlo?
// *Cuando necesitas acceder al índice del array.
//* Cuando necesitas controlar manualmente el flujo del ciclo (por ejemplo, saltar elementos o iterar en orden inverso).

//* Usa for tradicional cuando:
//* Necesitas acceder al índice del array.

// *Necesitas controlar manualmente el flujo del ciclo (por ejemplo, iterar en orden inverso o saltar elementos).

//* Trabajas con estructuras indexadas que no son iterables (aunque esto es raro en JavaScript moderno).

//* Casos en los que necesitas índices
//* 1. Acceder a múltiples arrays simultáneamente
//* Si tienes dos o más arrays y necesitas acceder a sus elementos en la misma posición, el índice es esencial.

//* Ejemplo:
//* javascript
//* Copy
//* const nombres = ["Juan", "Ana", "Carlos"];
//* const edades = [25, 30, 35];

// *for (let i = 0; i < nombres.length; i++) {
// *  console.log(`${nombres[i]} tiene ${edades[i]} años.`);
//* }
// ** Salida:
// ** Juan tiene 25 años.
// ** Ana tiene 30 años.
// ** Carlos tiene 35 años.
//* ¿Por qué no usar for...of?

// *Con for...of, no tienes acceso al índice, por lo que no podrías acceder a los elementos de ambos arrays en la misma posición.

// *2. Modificar el array original
// *Si necesitas modificar el array original (por ejemplo, eliminar o reemplazar elementos), el índice es útil.

//* Ejemplo:
//* javascript
// *Copy
// *const numeros = [1, 2, 3, 4, 5];

// *for (let i = 0; i < numeros.length; i++) {
// *  if (numeros[i] % 2 === 0) {
// *    numeros[i] = 0; // Reemplazar números pares por 0
//*   }
//* }

//* console.log(numeros); // [1, 0, 3, 0, 5]
//* ¿Por qué no usar for...of?

//* Con for...of, no tienes acceso al índice, por lo que no podrías modificar el array original directamente.

//* 3. Iterar en orden inverso
//* Si necesitas recorrer un array desde el final hasta el principio, el índice es necesario.

//* Ejemplo:

//* const frutas = ["manzana", "banana", "naranja"];

// *for (let i = frutas.length - 1; i >= 0; i--) {
// *  console.log(frutas[i]);
//* }
// * Salida:
// * naranja
// * banana
// * manzana
//* ¿Por qué no usar for...of?

//* for...of siempre itera en orden directo (desde el principio hasta el final).

//* 4. Saltar elementos o iterar en pasos específicos
//* Si necesitas saltar elementos o iterar en pasos específicos (por ejemplo, de 2 en 2), el índice es esencial.

//* Ejemplo:

// *const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// *for (let i = 0; i < numeros.length; i += 2) {
//*   console.log(numeros[i]);
// *}
// * Salida:
// * 1
// * 3
// * 5
// * 7
// * 9
//* ¿Por qué no usar for...of?

//* for...of no te permite controlar el paso de la iteración.

//* 5. Trabajar con estructuras no iterables
// *Si estás trabajando con estructuras que no son iterables (por ejemplo, un objeto que simula un array), el índice es necesario.

//* Ejemplo:

//* const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

//* for (let i = 0; i < arrayLike.length; i++) {
//*   console.log(arrayLike[i]);
//* }
// * Salida:
// * a
// * b
// * c
//* ¿Por qué no usar for...of?

//* for...of no funciona con estructuras que no son iterables.

//* 6. Necesitar el índice para cálculos o lógica adicional
// *Si necesitas el índice para realizar cálculos o lógica adicional, el for tradicional es la mejor opción.

// *Ejemplo:
// *javascript
//* Copy
//* const nombres = ["Juan", "Ana", "Carlos"];

// *for (let i = 0; i < nombres.length; i++) {
// *  console.log(`El nombre ${nombres[i]} está en la posición ${i}.`);
// *}
// * Salida:
// * El nombre Juan está en la posición 0.
// *El nombre Ana está en la posición 1.
// *El nombre Carlos está en la posición 2.
// *¿Por qué no usar for...of?

// *for...of no te da acceso al índice directamente.*