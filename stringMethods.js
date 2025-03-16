
//?-------------------------------------------split()--------------------------------------

//*convierte una cadena string en uno o varios array dependiendo del separador que le proporcionemos

// TODO Ejercicio 1: Contar la frecuencia de palabras en un texto
//* Enunciado:
//* Tienes un texto (string). Tu tarea es:

// *Dividir el texto en palabras individuales usando .split().

//* Contar la frecuencia de cada palabra (cuántas veces aparece cada una).

//* Devolver un objeto donde las claves sean las palabras y los valores sean la frecuencia.

//* Datos de Entrada:
//* expresion regular para quitar espacios de mas de 1 barra space (/\s+/);
//*Resultado Esperado:

// {
    //     Hola: 1,
    //     hola: 2,
    //     mundo: 2,
    //     JavaScript: 1
    // }
const text = "Hola    mundo    hola     JavaScript  mundo    mundo mundo mundo  mundo hola";

const wordsArray= text.split(/\s+/)

const wordCounter=(words)=>{
    
    let result={}
  for(let i=0;i<words.length;i++){
    if(result.hasOwnProperty(words[i])){
        
        result[words[i]]++
        
    }else{

        result[words[i]]=1
    }
    
  }
  return result;
}
console.log("//----------------------------- Metodo split()--------------------------")
console.log("Aqui el array con split(): ",wordsArray)
console.log("Cantidad de veces que una palabra se repite: ",wordCounter(wordsArray))

//TODO
//*  Otra alternativa
// const text = "Hola mundo hola JavaScript mundo hola";

// Función para contar la frecuencia de palabras
// const countWordFrequency = (text) => {
//     const words = text.split(" ");
//     const frequency = words.reduce((acc, word) => {
//         const lowerWord = word.toLowerCase();
//         acc[lowerWord] = (acc[lowerWord] || 0) + 1;
//         return acc;
//     }, {});
//     return frequency;
// };

// // Llamar a la función y mostrar el resultado
// const result = countWordFrequency(text);
// console.log("Frecuencia de palabras:", result);

//?----------------------------------------join()-------------------------------------------

// TODO Ejercicio: Generar un Texto Formateado a Partir de un Array de Objetos
//* Enunciado:
//* Tienes un array de objetos que representan productos. Cada producto tiene un nombre, un precio y una cantidad. Tu tarea es:

// *Filtrar los productos que tienen una cantidad mayor que 0.

//* Formatear cada producto en un string con el formato: "<nombre> - <precio>€ x<cantidad>".

// *Unir todos los productos formateados en un solo string, separados por saltos de línea (\n).

//* Datos de Entrada:

const productos = [
    { nombre: "Camisa", precio: 20, cantidad: 2 },
    { nombre: "Pantalón", precio: 40, cantidad: 0 },
    { nombre: "Zapatos", precio: 50, cantidad: 1 },
    { nombre: "Gorra", precio: 10, cantidad: 3 }
];
//* Resultado Esperado:

//* "Camisa - 20€ x2
//* Zapatos - 50€ x1
//* Gorra - 10€ x3"

const joinStrings=(products)=>{
   return products.filter(product=>product.cantidad>0).map(product=>`\n${product.nombre} - ${product.precio.toString()}$X${product.cantidad.toString()}`).join("\n")
} 

console.log("//----------------------------- Metodo join()--------------------------")
console.log("Productos originales:  ",productos)
console.log("productos en un solo string",joinStrings(productos))



//?-------------------------------includes(caden,posicionInicio)--------------------------

// *string.includes(subcadena, posicionInicio);
// *subcadena: La cadena de texto que deseas buscar.

//* posicionInicio (opcional): La posición en el string desde donde comenzar la búsqueda. Por defecto es 0.

// *Características:
// *Distingue entre mayúsculas y minúsculas: "Hola" no es lo mismo que "hola".

//* Devuelve un booleano: true si la subcadena existe, false si no.

// *No modifica el string original: Es un método de solo lectura.


//* Ejercicio Difícil: Verificar Palíndromos con .includes()
// *Enunciado:
// *Un palíndromo es una palabra, frase o secuencia que se lee igual de izquierda a derecha que de derecha a izquierda (ignorando espacios, signos de puntuación y mayúsculas/minúsculas). Tu tarea es:

// *Crear una función que verifique si una frase es un palíndromo.

//* Usar el método .includes() para verificar si la frase contiene alguna palabra prohibida (por ejemplo, "spam" o "publicidad").

//* Si la frase contiene una palabra prohibida, devolver "No válido".

//* Si la frase es un palíndromo y no contiene palabras prohibidas, devolver "Es un palíndromo".

//* Si no es un palíndromo, devolver "No es un palíndromo".

//* Datos de Entrada:

const frase1 = "  Anita lava la tina";
const frase2 = "Este es un spam";
const frase3 = "Hola mundo";
//*Resultado Esperado:

"Es un palíndromo"       // Para frase1
"No válido"              // Para frase2
"No es un palíndromo"    // Para frase3

const verifyIfPalindrom=(phrase)=>{
    
   const convertedInArray=phrase.trim().toLowerCase().split("").filter(char=>char!==" ")
   const invertedArray= phrase.trim().toLowerCase().split("").filter(char=>char!==" ").reverse()
  
   console.log("frase Normal   :  ",convertedInArray.join(""))
   console.log("Frase Invertida:  ",invertedArray.join(""))
   if(invertedArray.join("")===convertedInArray.join("")){
    return "Es un palíndomo"
   }else if(phrase.includes("spam")||phrase.includes("publicidad")) {
     return "NO válido"
   }else{
    return "No es un palíndromo"
   }
   
}

const depuredPhrase= frase1.split(/\s+/)//!por si existe más de un espacio entre cada palabra, aqui el resultado es un array de strings "Anita     lava la    tina"=> ["Anita","lava","la","tina"]
const depuredString=depuredPhrase.join(" ")//! de esto ["Anita","lava","la","tina"] => "Anita lava la tina"
console.log("---------------------------Metodo includes()-------------------------------")

console.log("Resultado de frase 1: ", verifyIfPalindrom(depuredString))
console.log("\n //////////////-----------//////////////////")
console.log("Resultado frase 2: ", verifyIfPalindrom(frase2))
console.log("\n //////////////-----------//////////////////")

console.log("Resultado frase 3:  ", verifyIfPalindrom(frase3))
