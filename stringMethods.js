
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

