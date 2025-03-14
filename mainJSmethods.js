// Métodos de Arrays
const numbers = [1, 2, 3, 4];

// map(): Crea un nuevo array aplicando una función a cada elemento.
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]

// filter(): Filtra elementos que cumplen una condición.
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce(): Reduce el array a un solo valor aplicando una función acumuladora.
const sum = numbers.reduce((acc, num) => acc + num, 0); // 10
//acc comienza con el valor inicial que le das (en este caso, 0).

//En cada iteración, acc se actualiza sumándole el precio del producto actual (product.price).

// forEach(): Ejecuta una función para cada elemento del array.
numbers.forEach(num => console.log(num)); // 1, 2, 3, 4

// some(): Verifica si al menos un elemento cumple una condición.
const hasEven = numbers.some(num => num % 2 === 0); // true

// every(): Verifica si todos los elementos cumplen una condición.
const allEven = numbers.every(num => num % 2 === 0); // false

// find(): Devuelve el primer elemento que cumple una condición.
const firstEven = numbers.find(num => num % 2 === 0); // 2

// findIndex(): Devuelve el índice del primer elemento que cumple una condición.
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // 1

// includes(): Verifica si el array incluye un elemento.
const includesTwo = numbers.includes(2); // true

// slice(): Devuelve una copia de una parte del array.
const sliced = numbers.slice(1, 3); // [2, 3]

// splice(): Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos.
const spliced = numbers.splice(1, 2, 10, 20); // numbers = [1, 10, 20, 4]

// concat(): Combina dos o más arrays.
const combined = numbers.concat([5, 6]); // [1, 2, 3, 4, 5, 6]

// sort(): Ordena los elementos de un array.
const sorted = [3, 1, 4, 2].sort((a, b) => a - b); // [1, 2, 3, 4]

// reverse(): Invierte el orden de los elementos.
const reversed = numbers.reverse(); // [4, 3, 2, 1]

// flat(): Aplana un array de arrays.
const nested = [1, [2, [3]]];
const flattened = nested.flat(2); // [1, 2, 3]

// flatMap(): Mapea y luego aplana el array.
const flatMapped = numbers.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6, 4, 8]

// Métodos de Strings
const str = "Hola Mundo";

// split(): Divide un string en un array basado en un separador.
const words = str.split(" "); // ["Hola", "Mundo"]

// join(): Une elementos de un array en un string.
const joined = words.join(" "); // "Hola Mundo"

// includes(): Verifica si un string contiene una subcadena.
const hasHola = str.includes("Hola"); // true

// slice(): Extrae una parte del string.
const subStr = str.slice(0, 4); // "Hola"

// substring(): Similar a slice, pero no acepta índices negativos.
const subStr2 = str.substring(0, 4); // "Hola"

// replace(): Reemplaza una parte del string.
const replaced = str.replace("Mundo", "JavaScript"); // "Hola JavaScript"

// toUpperCase(): Convierte el string a mayúsculas.
const upper = str.toUpperCase(); // "HOLA MUNDO"

// toLowerCase(): Convierte el string a minúsculas.
const lower = str.toLowerCase(); // "hola mundo"

// trim(): Elimina espacios en blanco al inicio y final.
const trimmed = "  Hola  ".trim(); // "Hola"

// startsWith(): Verifica si el string comienza con una subcadena.
const startsWithHola = str.startsWith("Hola"); // true

// endsWith(): Verifica si el string termina con una subcadena.
const endsWithMundo = str.endsWith("Mundo"); // true

// repeat(): Repite el string un número de veces.
const repeated = "Hola".repeat(2); // "HolaHola"

// Métodos de Objetos
const obj = { a: 1, b: 2, c: 3 };

// Object.keys(): Devuelve un array con las claves de un objeto.
const keys = Object.keys(obj); // ["a", "b", "c"]

// Object.values(): Devuelve un array con los valores de un objeto.
const values = Object.values(obj); // [1, 2, 3]

// Object.entries(): Devuelve un array de pares [clave, valor].
const entries = Object.entries(obj); // [["a", 1], ["b", 2], ["c", 3]]

// Object.assign(): Copia las propiedades de un objeto a otro.
const newObj = Object.assign({}, obj, { d: 4 }); // { a: 1, b: 2, c: 3, d: 4 }

// Object.freeze(): Congela un objeto para evitar modificaciones.
Object.freeze(obj);
obj.a = 10; // No tiene efecto

// Object.seal(): Sella un objeto, permitiendo solo modificar propiedades existentes.
Object.seal(obj);
obj.a = 10; // Funciona
obj.d = 4; // No tiene efecto

// Object.hasOwnProperty(): Verifica si un objeto tiene una propiedad específica.
const hasA = obj.hasOwnProperty("a"); // true

// Funciones de Orden Superior
function greet(name, callback) {
    console.log(`Hola, ${name}`);
    callback();
}
greet("Juan", () => console.log("Callback ejecutado"));

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

// Manejo de Asincronía
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Datos obtenidos"), 1000);
    });
};

fetchData().then(data => console.log(data));

async function getData() {
    const data = await fetchData();
    console.log(data);
}
getData();

// Recursividad
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Métodos de Comparación y Búsqueda
const numbers2 = [1, 2, 3, 4];

// indexOf(): Devuelve el índice de un elemento.
const index = numbers2.indexOf(3); // 2

// find(): Devuelve el primer elemento que cumple una condición.
const found = numbers2.find(num => num > 2); // 3

// Manipulación del DOM (si aplica)
const element = document.querySelector("#id");
element.textContent = "Nuevo texto";
element.addEventListener("click", () => console.log("Clickeado"));



