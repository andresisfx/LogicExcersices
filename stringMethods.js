
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