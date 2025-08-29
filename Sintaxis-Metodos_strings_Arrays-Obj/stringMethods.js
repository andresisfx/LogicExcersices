
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


//TODO Ejercicio : Verificar Palíndromos con .includes()
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


//?------------------------------slice()-----------------------------------------------

//* ¿Qué es .slice()?
//* El método .slice() se utiliza para extraer una porción de un string (o un array) y devolverla como un nuevo string (o array). No modifica el string original.

//* Sintaxis:

//! string.slice(inicio, fin);
// *inicio: La posición inicial desde donde comenzar a extraer (incluida).

//* fin: La posición final hasta donde extraer (no incluida). Si se omite, extrae hasta el final del string.

// *Características:
//* Índices positivos: Cuentan desde el inicio del string (el primer carácter es 0).

//* Índices negativos: Cuentan desde el final del string (el último carácter es -1).

// *No modifica el string original: Devuelve un nuevo string.

//TODO Ejercicio: Extraer y Formatear Información de un Texto
// *Enunciado:
//* Tienes un texto que contiene información sobre varios productos en el siguiente formato:


// *"ID:123-Nombre:Camisa-Precio:20;ID:456-Nombre:Pantalón-Precio:40;ID:789-Nombre:Zapatos-Precio:50"
//* Tu tarea es:

// *Dividir el texto en productos individuales usando el separador ;.

//* Para cada producto, extraer el ID, el Nombre y el Precio usando .slice().

//* Formatear cada producto en un string con el formato: "<Nombre> (ID: <ID>) - <Precio>€".

//* Unir todos los productos formateados en un solo string, separados por saltos de línea (\n).

//* Datos de Entrada:

const text2 = "ID:123-Nombre:Camisa-Precio:20;ID:456-Nombre:Pantalón-Precio:40;ID:789-Nombre:Zapatos-Precio:50";
//* Resultado Esperado:

// *"Camisa (ID: 123) - 20€
//* Pantalón (ID: 456) - 40€
//* Zapatos (ID: 789) - 50€"

const extractAndFormatText=(text)=>{
   return text.split(";").map((str)=>{
         return `${str.split("-")[1].slice(7)}  (ID: ${str.split("-")[0].slice(3)}) - ${str.split("-")[2].slice(7)}$`
    }).join("\n")
   

}

console.log("------------------------------------Método slice()---------------------------")
console.log("Información extraida: \n", extractAndFormatText(text2))


//?--------------------------------------substring()---------------------------------------
//* substring no acpta indices negativos
//* a diferencia de slice ,substring no devuelve un string vacio si recibe el primer indice mayor que el segundo => text.substring(5,0); en lugar de esto substring los invierte así => text.substring(0,5)

//TODO Ejercicio : Extraer y Formatear Fechas
//* Enunciado:
//* Tienes un string que contiene varias fechas en el formato DD/MM/AAAA. Tu tarea es:

//* Extraer cada fecha del string.

//* Formatear cada fecha en el formato AAAA-MM-DD.

//* Unir las fechas formateadas en un solo string, separadas por comas.

//* Datos de Entrada:

const text3 = "Evento1: 12/05/2023; Evento2: 23/09/2023; Evento3: 01/01/2024";
//* Resultado Esperado:

//* "2023-05-12, 2023-09-23, 2024-01-01"

const formatDates=(text)=>{
  return text.split(";").map(str=>str.trim()).map(str=>`${str.substring(str.indexOf("/")+4)}-${str.substring(str.indexOf("/")+1,str.indexOf("/")+3)}-${str.substring(str.indexOf("/")-2,str.indexOf("/"))}`).join(", ")
}

console.log("----------------------------------------Método substring()------------------------------")
console.log("Fechas formateadas con substring: \n",formatDates(text3))


//?----------------------------------------replace()---------------------------------------

// *Sintaxis:
// *javascript
// *Copy
// *string.replace(valorBuscar, valorReemplazar);
//* valorBuscar: Puede ser un string o una expresión regular (regex) que define lo que se buscará en el string.

//* valorReemplazar: El string o función que reemplazará la coincidencia.

//* Características:
//* Reemplazo simple:

//* Si valorBuscar es un string, solo reemplaza la primera coincidencia.

//* Ejemplo:

// !const str = "Hola Mundo Mundo";
// !console.log(str.replace("Mundo", "JavaScript")); // "Hola JavaScript Mundo"
//* Reemplazo global:

//* Si valorBuscar es una expresión regular con la bandera g, reemplaza todas las coincidencias.

//* Ejemplo:


//! const str = "Hola Mundo Mundo";
//! console.log(str.replace(/Mundo/g, "JavaScript")); // "Hola JavaScript JavaScript"
//* Funciones de reemplazo:

//* Puedes pasar una función como valorReemplazar para realizar un reemplazo dinámico.

//* Ejemplo:

//!  const str = "Hola 123";
//!  console.log(str.replace(/\d+/, (match) => parseInt(match) * 2)); // "Hola 246"
//* No modifica el string original:

//* Devuelve un nuevo string con los reemplazos aplicados.

//TODO Ejercicio : Formatear y Reemplazar en un Texto Complejo
//* Enunciado:
// *Tienes un texto que contiene información sobre productos en el siguiente formato:


//* "Producto: Camisa, Precio: $20; Producto: Pantalón, Precio: $40; Producto: Zapatos, Precio: $50"
//* Tu tarea es:

//* Reemplazar el símbolo $ por USD en los precios.

//* Formatear cada producto para que tenga el formato: "<Nombre> - <Precio>".

// *Unir todos los productos formateados en un solo string, separados por saltos de línea (\n).

// *Datos de Entrada:


 const text4 = "Producto: Camisa, Precio: $20; Producto: Pantalón, Precio: $40; Producto: Zapatos, Precio: $50";

//* Resultado Esperado:

//* "Camisa - USD20
//* Pantalón - USD40
// *Zapatos - USD50"

const replaceText=(text)=>{
  return text.split(";").map(str=> str.trim().split(",")).map(strArr=>`${strArr[0].slice(strArr[0].indexOf(":")+1)} - ${strArr[1].slice(strArr[1].replace("$","USD ").indexOf(":")+1)}`).join("\n")
}
console.log("-------------------------------------Método replace()-------------------------------")

console.log("Informacion formateada con replace()\n",replaceText(text4) )

//?----------------------------------toUpperCase y toLowerCase-------------------------------

// *Resumen de lo que debes saber:
//* No modifican el string original: Devuelven un nuevo string.

//* Compatibilidad con Unicode: Funcionan bien con la mayoría de los caracteres, pero ten cuidado con idiomas específicos.

//* Versiones locale-aware: Usa toLocaleUpperCase() y toLocaleLowerCase() para mayor precisión en idiomas específicos.
const str = "istanbul";
const upper = str.toLocaleUpperCase('tr-TR'); // "İSTANBUL" (correcto en turco)

//* Comparaciones de strings: Útiles para normalizar strings antes de compararlos.

//* Errores comunes: Asegúrate de que el valor sea un string antes de usarlos.

//! toUpperCase(): Convierte el string a mayúsculas.
const upper2 = str.toUpperCase(); // "HOLA MUNDO"

//! toLowerCase(): Convierte el string a minúsculas.
const lower = str.toLowerCase(); // "hola mundo"

//?----------------------------------trim()-----------------------------------------

// trim(): Elimina espacios en blanco al inicio y final.
const trimmed = "  Hola  ".trim(); // "Hola"

//?----------------------------------startsWith()-----------------------------------------

// startsWith(): Verifica si el string comienza con una subcadena.
const startsWithHola = str.startsWith("Hola"); // true
//TODO Ejercicio práctico
//* Enunciado:
//* Escribe una función llamada verificarPrefijo que tome dos argumentos: un string (texto) y una subcadena (prefijo). La función debe devolver true si el string comienza con el prefijo proporcionado, y false en caso contrario. Además, la función debe ignorar mayúsculas y minúsculas al realizar la comparación.

const text5=" La VACA lola Tiene Cabeza Y tiene cola"
const verificarPrefijo =(text)=>{
  const verificacion= text.toLowerCase().trim().startsWith("vaca",3)
  if(verificacion){
     console.log("el texto a partir de la posicion 3 empieza con vaca")
  }else{
    console.log("El texto en la posición 3 No empieza con Vaca")
  }
}

console.log("-------------------------------------Método startsWith()-------------------------------")
verificarPrefijo(text5)

//?----------------------------------endsWith()-----------------------------------------

// !endsWith(): Verifica si el string termina con una subcadena.
const endsWithMundo = str.endsWith("Mundo"); // true

// *Ejemplo básico

const str3 = "Hola Mundo";
const endsWithMundo3 = str.endsWith("Mundo"); //! true
console.log(endsWithMundo); // !true
//* En este caso, endsWithMundo será true porque el string "Hola Mundo" termina con "Mundo".

//* Ejemplo con longitud
// *Puedes especificar una longitud para limitar la parte del string que se evalúa. Por ejemplo:


const str2 = "Hola Mundo";
const endsWithHola = str.endsWith("Hola", 4); // true
console.log("-------------------------------------Método endsWith()-------------------------------")
console.log(endsWithHola); // true
// *Aquí, endsWithHola será true porque, si limitamos la longitud del string a 4, el string evaluado es "Hola", que coincide con la subcadena proporcionada.

// *Consideraciones adicionales
//* Strings vacíos: Si el sufijo es un string vacío (""), endsWith() siempre devolverá true, ya que técnicamente todos los strings terminan con un string vacío.

// *Sufijo más largo que el texto: Si el sufijo es más largo que el texto, endsWith() devolverá false.

//?----------------------------------repeat()-----------------------------------------
//* repeat(): Repite el string un número de veces.


const  generarLinea=(caracter, longitud)=> {
  // Verificar si la longitud es válida
  if (longitud < 0) {
      throw new Error("La longitud no puede ser negativa");
  }

  // Repetir el carácter hasta alcanzar la longitud
  return caracter.repeat(longitud);
}

// Pruebas

console.log("-------------------------------------Método repeat()-------------------------------")
console.log(generarLinea("/--/", 15)); // "----------"
console.log(generarLinea("*", 50)); // "*****"
console.log(generarLinea("A", 35)); // "AAA"


//Daniela está viendo este cambio