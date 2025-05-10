

//?----------------------------------------for .. in-------------------------------------------


//* ¿Qué es for...in?
//* El ciclo for...in se usa para iterar sobre las propiedades enumerables de un objeto. Es especialmente útil cuando necesitas recorrer las claves (nombres de las propiedades) de un objeto.

//* Sintaxis:
// *javascript
// Copy
// *for (const clave in objeto) {
//   // Código a ejecutar
//* }
// *clave: En cada iteración, clave será el nombre de una propiedad del objeto.

// *objeto: El objeto cuyas propiedades quieres recorrer.

//* Características clave:
//* Itera sobre propiedades enumerables:

// *Solo recorre las propiedades que tienen el atributo enumerable: true.

// *Por defecto, las propiedades que defines en un objeto son enumerables.

// *No garantiza un orden específico:

//* Aunque en la práctica suele seguir el orden de inserción, el estándar no garantiza un orden específico.

//* Incluye propiedades heredadas:

//* Si el objeto tiene propiedades heredadas de su prototipo, también se incluirán en la iteración (a menos que uses hasOwnProperty para filtrarlas).

//* No es recomendable para arrays:

// *Aunque puedes usarlo con arrays, no es recomendable porque puede incluir propiedades no deseadas (como métodos heredados).

//*Ejemplo básico:

const usuario = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (const clave in usuario) {
  console.log(`${clave}: ${usuario[clave]}`);
}
//* Salida:
//* nombre: Juan
// *edad: 30
// *ciudad: Madrid

//TODO Ejercicio 1: Contar propiedades de un objeto
// *Escribe una función que tome un objeto y devuelva el número de propiedades que tiene.


function contarPropiedades(objeto) {
  let contador = 0;

  for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) { // Filtra solo las propiedades propias
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso
const usuario2 = { nombre: "Ana", edad: 25, ciudad: "Barcelona" };
console.log("\nRespuesta al ejersicio 1: ",contarPropiedades(usuario2)); // 3