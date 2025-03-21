
//?-----------------------------------Object.keys()--------------------------------------------

// *Características:
//* Solo claves enumerables:

// *Object.keys() solo devuelve las claves que son enumerables (es decir, aquellas que se pueden iterar con un bucle for...in).

//* No incluye claves heredadas:

//* No devuelve las claves de las propiedades heredadas (del prototipo).

//* Orden de las claves:

//* Las claves se devuelven en el mismo orden en que se insertaron en el objeto (esto es cierto para objetos creados con {} o new Object()).

//* No modifica el objeto original:

// *Devuelve un nuevo array con las claves, sin afectar el objeto original.

//TODO Ejercicio 1: Contar Propiedades de un Objeto
// *Enunciado:
//* Escribe una función que tome un objeto como argumento y devuelva el número de propiedades (claves) que tiene.

//* Datos de Entrada:
// javascript
// Copy
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
//*Resultado Esperado: 3

const countProperties=(persona)=>{
   return Object.keys(persona).length
}

console.log("-------------------------------------Método Object.keys()-------------------------------")
console.log("la cantidad de propiedades es:  ",countProperties(persona))


//TODO Ejercicio 2: Filtrar Propiedades de un Objeto
//* Enunciado:
//* Escribe una función que tome un objeto y un array de claves, y devuelva un nuevo objeto que solo contenga las propiedades cuyas claves estén en el array.

//* Datos de Entrada:

const persona2 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero"
};

const clavesPermitidas = ["nombre", "ciudad"];
// *Resultado Esperado:

//* {
//*     nombre: "Juan",
//*     ciudad: "Madrid"
// *}


const filtrarPropiedades=(objetoInicial,clavesPermitidas)=>{
   return Object.keys(objetoInicial)
                            .filter((clave)=>clavesPermitidas.includes(clave))
                            .reduce((nuevoObjeto,clave)=>{
                                nuevoObjeto[clave]=objetoInicial[clave]
                                return nuevoObjeto
                            },{})
}

console.log("Poopiedades filtradas",filtrarPropiedades(persona2,clavesPermitidas))

//?-----------------------------------Object.values()-------------------------------------

//* El método Object.values() es una función incorporada en JavaScript que toma un objeto como argumento y devuelve un array con los valores de las propiedades enumerables de ese objeto.

//* Sintaxis:

//* javascript
//* Copy
//* Object.values(obj);
// *obj: El objeto del cual se obtendrán los valores.

//* Valor de retorno:

//* Un array que contiene los valores de las propiedades enumerables del objeto, en el mismo orden en que aparecerían si se iterara sobre ellas con un bucle for...in.

//* Detalles importantes:
// *Solo propiedades enumerables:

// *Object.values() solo devuelve los valores de las propiedades que son enumerables (es decir, aquellas que no tienen el atributo enumerable: false).

//* No incluye propiedades heredadas:

//* Si el objeto tiene propiedades heredadas de su prototipo, estas no se incluirán en el array resultante.

//* Orden de los valores:

//* Los valores se devuelven en el mismo orden en que aparecerían si se iterara manualmente sobre las propiedades del objeto.

//*
//* Si el objeto no tiene propiedades enumerables, Object.values() devolverá un array vacío


//TODO  Ejercicio 2: Contar la frecuencia de valores
// *Dado el siguiente objeto, que contiene nombres de frutas como valores, escribe una función que cuente cuántas veces aparece cada fruta y devuelva un objeto con la frecuencia.


const frutas = {
  caja1: "manzana",
  caja2: "banana",
  caja3: "manzana",
  caja4: "naranja",
  caja5: "banana",
  caja6: "manzana"
};

// Escribe tu función aquí
function contarFrecuencia(objetoInicial) {
  return Object.values(objetoInicial)
                                     .reduce((frecuencia,fruta)=>{
                                        frecuencia[fruta]=(frecuencia[fruta]||0)+1;
                                        return frecuencia
                                     },{})
}
console.log("-------------------------------------Método Object.values()-------------------------------")
console.log("la frecuencia que se repite una fruta es:",contarFrecuencia(frutas)); // Debería imprimir { manzana: 3, banana: 2, naranja: 1 }


//?---------------------------------Object.entries()-------------------------------------------

//* el método Object.entries() es una función incorporada en JavaScript que toma un objeto como argumento y devuelve un array de arrays, donde cada subarray es un par [clave, valor] correspondiente a las propiedades enumerables del objeto.

//* Sintaxis:

//* Object.entries(obj);
//* obj: El objeto del cual se obtendrán los pares [clave, valor].

// *Valor de retorno:

//* Un array donde cada elemento es un subarray de la forma [clave, valor], en el mismo orden en que aparecerían si se iterara sobre ellas con un bucle for...in.

//TODO Ejercicio 1: Convertir un objeto a un array de strings
//* Dado el siguiente objeto, escribe una función que convierta cada par [clave, valor] en un string de la forma "clave: valor" y devuelva un array con estos strings.

const persona3 = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Barcelona"
};

// Escribe tu función aquí
function convertirAStrings(objeto) {
  // Usa Object.entries() para obtener los pares [clave, valor]
  // Luego, transforma cada par en un string "clave: valor"

   return Object.entries(objeto)
                               .reduce((arrStringUnificado,arrayDeStrings)=>{
                                  arrStringUnificado.push( `${arrayDeStrings[0]} : ${arrayDeStrings[1]}`)
                                    return arrStringUnificado
                               },[])
}

console.log("-------------------------------------Método Object.entries()-------------------------------")
console.log("el objeto convertido  a strings es: \n", convertirAStrings(persona2));
// Debería imprimir: ["nombre: Ana", "edad: 25", "ciudad: Barcelona"]


//?-----------------------------------Object.assign()------------------------------------------

//* El método Object.assign() se utiliza para copiar las propiedades de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino modificado.

//* Sintaxis:

//* javascript
// *Copy
// *Object.assign(destino, fuente1, fuente2, ...);
// *destino: El objeto al cual se copiarán las propiedades.

// *fuente1, fuente2, ...: Los objetos de los cuales se copiarán las propiedades.

// *Valor de retorno:

// *El objeto destino con las propiedades copiadas de los objetos fuente.

// *Detalles importantes:
//* Copia superficial (shallow copy):

// *Object.assign() realiza una copia superficial, lo que significa que si una propiedad es un objeto, se copia la referencia al objeto, no una copia profunda del mismo.

// *Sobrescribe propiedades:

//* Si el objeto destino ya tiene una propiedad con la misma clave que una propiedad en uno de los objetos fuente, el valor de la propiedad en el destino será sobrescrito.

//* Solo propiedades enumerables: Object.assign() solo copia propiedades enumerables (aquellas que no tienen el atributo enumerable: false).

//* Uso común: Se usa frecuentemente para crear un nuevo objeto combinando las propiedades de otros objetos, o para clonar un objeto.

// Copia superficial (Shallow Copy)
// Una copia superficial significa que solo se copian las propiedades del objeto en el primer nivel. Si una propiedad es un objeto o un array, no se copia el objeto o array en sí, sino que se copia la referencia a ese objeto o array. Esto implica que:

// Si modificas una propiedad de tipo primitivo (como number, string, boolean) en la copia, no afectará al objeto original.

// Si modificas una propiedad que es un objeto o array en la copia, sí afectará al objeto original, porque ambas (la copia y el original) apuntan al mismo objeto en memoria.

// Ejemplo de copia superficial:
// javascript
// Copy
// const original = {
//   nombre: "Juan",
//   edad: 30,
//   direccion: {
//     ciudad: "Madrid",
//     pais: "España"
//   }
// };

// // Copia superficial con Object.assign()
// const copiaSuperficial = Object.assign({}, original);

// // Modificamos una propiedad primitiva en la copia
// copiaSuperficial.nombre = "Ana";
// console.log(original.nombre); // "Juan" (no se modifica el original)

// // Modificamos una propiedad que es un objeto en la copia
// copiaSuperficial.direccion.ciudad = "Barcelona";
// console.log(original.direccion.ciudad); // "Barcelona" (¡se modifica el original!)
// ¿Qué pasó?:

// nombre es una propiedad primitiva, por lo que al modificarla en la copia, el original no se ve afectado.

// direccion es un objeto, por lo que al modificarlo en la copia, el original también se modifica, porque ambos comparten la misma referencia.

// Copia profunda (Deep Copy)
// Una copia profunda significa que se copian todos los niveles del objeto, incluyendo objetos y arrays anidados. Esto implica que:

// Si modificas cualquier propiedad en la copia, no afectará al objeto original, porque la copia es completamente independiente.

// Ejemplo de copia profunda:
// Para realizar una copia profunda, no puedes usar Object.assign() ni el operador de propagación (...). En su lugar, puedes usar métodos como JSON.parse(JSON.stringify(obj)) o librerías como lodash.

// javascript
// Copy
// const original = {
//   nombre: "Juan",
//   edad: 30,
//   direccion: {
//     ciudad: "Madrid",
//     pais: "España"
//   }
// };

// // Copia profunda con JSON.parse y JSON.stringify
// const copiaProfunda = JSON.parse(JSON.stringify(original));

// // Modificamos una propiedad primitiva en la copia
// copiaProfunda.nombre = "Ana";
// console.log(original.nombre); // "Juan" (no se modifica el original)

// // Modificamos una propiedad que es un objeto en la copia
// copiaProfunda.direccion.ciudad = "Barcelona";
// console.log(original.direccion.ciudad); // "Madrid" (no se modifica el original)

// *Ejercicio 1: Combinar objetos
//* Dado los siguientes objetos, usa Object.assign() para combinarlos en un nuevo objeto. Luego, imprime el resultado paso a paso.
// **Salida esperada:


// *Objeto 1: { a: 1, b: 2 }
//* Objeto 2: { b: 3, c: 4 }
//* Objeto 3: { d: 5 }
//* Nuevo objeto combinado: { a: 1, b: 3, c: 4, d: 5 }

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

// Escribe tu código aquí
const newObj = Object.assign({}, obj1, obj2, obj3);

console.log("-------------------------------------Método Object.assign()-------------------------------")
console.log("Objeto 1:", obj1);
console.log("Objeto 2:", obj2);
console.log("Objeto 3:", obj3);
console.log("Nuevo objeto combinado:", newObj);


//?----------------------------------Object.freeze-------------------------------------------

// Detalles importantes:
// Congelación superficial:

// Object.freeze() solo congela el objeto en el primer nivel. Si el objeto contiene propiedades que son objetos o arrays, esos objetos o arrays no se congelan y pueden ser modificados.

// Ejemplo:

// javascript
// Copy
// const obj = { a: 1, b: { c: 2 } };
// Object.freeze(obj);

// obj.a = 10; // No tiene efecto
// obj.b.c = 20; // ¡Sí tiene efecto!
// console.log(obj); // { a: 1, b: { c: 20 } }
// No se puede deshacer:

// Una vez que un objeto está congelado, no se puede descongelar. No hay un método nativo en JavaScript para "descongelar" un objeto.

// Modo estricto (strict mode):

// En modo no estricto, si intentas modificar un objeto congelado, simplemente no tendrá efecto.

// En modo estricto ("use strict"), intentar modificar un objeto congelado lanzará un error.

// Ejemplo:

// javascript
// Copy
// "use strict";
// const obj = { a: 1 };
// Object.freeze(obj);

// obj.a = 10; // Lanza un error: TypeError
// No afecta a propiedades no enumerables:

// Object.freeze() solo afecta a las propiedades enumerables del objeto. Las propiedades no enumerables (como las heredadas) no se ven afectadas.

// No se pueden agregar o eliminar propiedades del prototipo:

// Si el objeto tiene un prototipo, Object.freeze() no evita que se agreguen o eliminen propiedades del prototipo.

// Ejemplo básico:
console.log("---------------------------------Método Object.freeze()------------------------------")

const obj5 = { a: 1, b: 2 };

Object.freeze(obj5);

obj5.a = 10; // No tiene efecto
obj5.c = 3; // No tiene efecto
delete obj5.b; // No tiene efecto

console.log(obj5); // { a: 1, b: 2 }
// TODO Ejercicio práctico:
//* Ejercicio 1: Congelar un objeto
// *Dado el siguiente objeto, congélalo usando Object.freeze() y luego intenta modificarlo. Observa qué sucede.


const usuario = {
  nombre: "Ana",
  edad: 25,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  }
};

// Congela el objeto
Object.freeze(usuario);

// Intenta modificar propiedades
usuario.nombre = "Carlos"; // ¿Qué sucede?
usuario.direccion.ciudad = "Barcelona"; // ¿Qué sucede?

console.log(usuario);

//?-------------------------------------------Object.seal()-------------------------------------

// ¿Qué hace Object.seal()?
// El método Object.seal() sella un objeto, lo que significa:

// Evita agregar nuevas propiedades: No se pueden agregar nuevas propiedades al objeto.

// Evita eliminar propiedades: No se pueden eliminar propiedades existentes.

// Permite modificar propiedades existentes: Los valores de las propiedades existentes sí se pueden modificar.

// Sintaxis:

// javascript
// Copy
// Object.seal(obj);
// obj: El objeto que se desea sellar.

// Valor de retorno:

// Devuelve el mismo objeto que fue pasado como argumento, pero ahora sellado.

// Detalles importantes:
// Sellado superficial:

// Object.seal() solo sella el objeto en el primer nivel. Si el objeto contiene propiedades que son objetos o arrays, esos objetos o arrays no se sellan y pueden ser modificados.

// Ejemplo:

// javascript
// Copy
// const obj = { a: 1, b: { c: 2 } };
// Object.seal(obj);

// obj.a = 10; // Funciona
// obj.b.c = 20; // ¡También funciona!
// console.log(obj); // { a: 10, b: { c: 20 } }
// No se puede deshacer:

// Una vez que un objeto está sellado, no se puede "desellar". No hay un método nativo en JavaScript para revertir el sellado.

// Modo estricto (strict mode):

// En modo no estricto, si intentas agregar o eliminar propiedades de un objeto sellado, simplemente no tendrá efecto.

// En modo estricto ("use strict"), intentar agregar o eliminar propiedades de un objeto sellado lanzará un error.

// Ejemplo:

// javascript
// Copy
// "use strict";
// const obj = { a: 1 };
// Object.seal(obj);

// obj.b = 2; // Lanza un error: TypeError
// No afecta a propiedades no enumerables:

// Object.seal() solo afecta a las propiedades enumerables del objeto. Las propiedades no enumerables (como las heredadas) no se ven afectadas.

// No se pueden reconfigurar propiedades:

// Aunque puedes modificar los valores de las propiedades existentes, no puedes cambiar sus atributos (como configurable, enumerable, writable).

// Ejemplo básico:

console.log("------------------------------------Método Object.seal()------------------------------")
const obj6 = { a: 1, b: 2 };

Object.seal(obj6);

obj6.a = 10; //* Funciona
obj6.c = 3; //* No tiene efecto
delete obj6.b; //* No tiene efecto

console.log(obj6); // { a: 10, b: 2 }
//TODO Ejercicio práctico:
//* Ejercicio 1: Sellar un objeto
// *Dado el siguiente objeto, séllalo usando Object.seal() y luego intenta modificarlo. Observa qué sucede.


const usuario2 = {
  nombre: "Ana",
  edad: 25,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  }
};

// Sella el objeto
Object.seal(usuario2);

// Intenta modificar propiedades
usuario2.nombre = "Carlos"; // ¿Qué sucede?
usuario2.direccion.ciudad = "Barcelona"; // ¿Qué sucede?

// Intenta agregar y eliminar propiedades
usuario2.email = "ana@example.com"; // ¿Qué sucede?
delete usuario2.edad; // ¿Qué sucede?

console.log(usuario2);

//?--------------------------------------hasOwnProperty()-------------------------------------


//* Detalles importantes:
// *Solo propiedades directas:

//* hasOwnProperty() solo verifica propiedades que pertenecen directamente al objeto, no propiedades heredadas de su prototipo.

//* Ejemplo:


const obj7 = { a: 1 };
console.log(obj7.hasOwnProperty("a")); // true
console.log(obj7.hasOwnProperty("toString")); // false (toString es heredado)
//* No verifica propiedades no enumerables:

//* hasOwnProperty() funciona con propiedades enumerables y no enumerables, siempre y cuando sean propiedades directas del objeto.

//* Uso con objetos creados con Object.create(null):

//* Si un objeto se crea con Object.create(null), no hereda el método hasOwnProperty() de Object.prototype. En este caso, debes usar Object.prototype.hasOwnProperty.call(obj, prop).

//* Ejemplo:
console.log("------------------------------------Método hsOwnPropertyl()------------------------------")

const obj8 = Object.create(null);
obj8.a = 1;
console.log(Object.prototype.hasOwnProperty.call(obj8, "a")); // true
//* No verifica propiedades en la cadena de prototipos:

//* Si necesitas verificar propiedades en toda la cadena de prototipos, debes usar el operador in.

//* Ejemplo:


const obj9 = { a: 1 };
console.log("toString" in obj9); // true (toString es heredado)

//TODO Ejercicio 1: Verificar propiedades en un objeto
// *Dado el siguiente objeto, escribe una función que verifique si el objeto tiene ciertas propiedades y devuelva un objeto con los resultados.

//*Salida esperada:


//* { nombre: true, edad: true, email: false, toString: false }
const usuario3 = {
  nombre: "Ana",
  edad: 25,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  }
};

// Escribe tu función aquí
function verificarPropiedades(obj, propiedades) {
  const resultados = {};
  for (const prop of propiedades) {
    resultados[prop] = obj.hasOwnProperty(prop);
  }
  return resultados;
}

const propiedadesAVerificar = ["nombre", "edad", "email", "toString"];
const resultados = verificarPropiedades(usuario3, propiedadesAVerificar);

console.log(resultados);
