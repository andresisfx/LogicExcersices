

//?------------------------------------------Map()----------------------------------------------------

// *¿Qué es un Map?
//* Un Map es una colección de pares clave-valor, similar a un objeto tradicional ({}), pero con algunas diferencias clave:

//* Claves de cualquier tipo:

//* En un Map, las claves pueden ser de cualquier tipo (objetos, funciones, números, strings, etc.), mientras que en un objeto tradicional, las claves solo pueden ser strings o símbolos.

//* Orden de inserción:

//* Un Map mantiene el orden en que se insertan los elementos, a diferencia de los objetos tradicionales, donde el orden no está garantizado.

// *Métodos y propiedades útiles:

// *Map tiene métodos específicos para manejar pares clave-valor, como set(), get(), has(), delete(), etc.

// *Tamaño dinámico:

//** Puedes obtene*r fácilmente el número de elementos en un Map usando la propiedad size.

// **Sintaxis básica:

//** const mapa = new Map();
//** Métodos principales de Map:
//** Método	Descripción
// **set(clave, valor)	Añade un par clave-valor al Map. Si la clave ya existe, actualiza su valor.
// **get(clave)	Devuelve el valor asociado a una clave. Si no existe, devuelve undefined.
// **has(clave)	Verifica si una clave existe en el Map. Devuelve true o false.
// **delete(clave)	Elimina un par clave-valor del Map. Devuelve true si la clave existía.
// **clear()	Elimina todos los pares clave-valor del Map.
// **size	Propiedad que devuelve el número de pares clave-valor en el Map.
// **Características importantes:
//** Claves de cualquier tipo:

// **Puedes usar objetos, funciones, números, etc., como claves en un Map.

console.log("-------------------------------------Coleccion de datos Map()-------------------------------")

const mapa = new Map();
const objeto = { nombre: "Juan" };

mapa.set(objeto, "Este es un objeto como clave");
console.log(mapa.get(objeto)); // "Este es un objeto como clave"
// Orden de inserción:

// **Los elementos en un Map se mantienen en el orden en que se insertaron.


const mapa1 = new Map();
mapa1.set("a", 1);
mapa1.set("b", 2);
mapa1.set("c", 3);

for (const [clave, valor] of mapa1) {
  console.log(`${clave}: ${valor}`);
}
//** Salida:
// **a: 1
//** b: 2
//** c: 3
//*Iteración:

//*Puedes iterar sobre un Map usando for...of, forEach, o métodos como keys(), values(), y entries().


const mapa2 = new Map();
mapa2.set("a", 1);
mapa2.set("b", 2);

//*** Iterar sobre claves y valores
for (const [clave, valor] of mapa2) {
  console.log(`${clave}: ${valor}`);
}
//* Salida:
// *a: 1
// *b: 2
//* Comparación con objetos tradicionales:

//* En un objeto tradicional, las claves se convierten automáticamente en strings. En un Map, las claves mantienen su tipo original.

//* Un Map es más adecuado para casos en los que necesitas claves dinámicas o no strings.

//* Ejemplo básico:

const mapa3 = new Map();

//* Añadir pares clave-valor
mapa3.set("nombre", "Juan");
mapa3.set("edad", 30);
mapa3.set("ciudad", "Madrid");

//* Obtener valores
console.log(mapa3.get("nombre")); // "Juan"
console.log(mapa3.get("edad"));   // 30

//* Verificar si una clave existe
console.log(mapa3.has("ciudad")); // true

//* Eliminar una clave
mapa3.delete("edad");
console.log(mapa3.has("edad"));   // false

// *Tamaño del Map
console.log(mapa3.size);          // 2

//* Iterar sobre el Map
for (const [clave, valor] of mapa3) {
  console.log(`${clave}: ${valor}`);
}
// *Salida:
// *nombre: Juan
// *ciudad: Madrid



//TODO Ejercicio 1: Contar la frecuencia de palabras
// *Escribe una función que tome un array de palabras y devuelva un Map con la frecuencia de cada palabra.
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const contarFrecuenciaPalabras=(palabras)=>{
    const map =new Map()
    for(const palabra of palabras){
        if(map.has(palabra)){
            map.set(palabra,(map.get(palabra)+1))
           
        }else{
        map.set(palabra,1)
        }
    }
    return map
}
console.log("\nRespuesta al ejersicio 1" ,contarFrecuenciaPalabras(palabras));