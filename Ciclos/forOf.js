

//?---------------------------------------for ... of---------------------------------

// **for...of
//* ¿Para qué sirve?
//* El ciclo for...of se usa para iterar sobre los valores de un iterable (como arrays, strings, sets, maps, etc.). Es más simple y directo que el for tradicional, pero no te da acceso al índice.

//* Sintaxis:
//* javascript

//* for (const elemento of iterable) {

//* }
//* Ejemplo:
//* javascript

//* const frutas = ["manzana", "banana", "naranja"];

//* for (const fruta of frutas) {
//*   console.log(fruta);
//* }
// //*Salida:
// //* manzana
// //* banana*
// //* naranja
//* Características:
//* Sencillez: No necesitas manejar índices ni condiciones de parada.

//* Acceso directo a los valores: Solo iteras sobre los valores del iterable.

//* No acceso al índice: No puedes acceder directamente al índice del elemento actual.

//* ¿Cuándo usarlo?
//* Cuando solo necesitas recorrer los valores de un array u otro iterable.

//* Cuando no necesitas acceder al índice o modificar el flujo del ciclo.

//* Diferencias clave:

//* Característica	        |for tradicional	            |    for...of
//*-----------------------------------------------------------------------------
//* Acceso al índice	    | Sí (i).	                    |    No.
//*-------------------------------------------------------------------------------
//* Control del flujo	    |Completo (puedes modificar i). |Limitado (solo valores).
//*---------------------------------------------------------------------------------
//* Sintaxis	Más verbosa.|	Más simple y legible.       |
//*----------------------------------------------------------------------------------
//* Uso con otros iterables |	Solo arrays (o estructuras  |	Arrays, strings, sets, maps,etc.
//*                              indexadas).
//*---------------------------------------------------------------------------------------




