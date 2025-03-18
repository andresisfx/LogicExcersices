
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
console.log(convertirAStrings(persona2));
// Debería imprimir: ["nombre: Ana", "edad: 25", "ciudad: Barcelona"]