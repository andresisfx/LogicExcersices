

//?---------------------------------------Set()-------------------------------------------



//* Un Set es una colección de valores únicos, lo que significa que no puede contener elementos duplicados. Es útil cuando necesitas almacenar valores sin repetirlos.

//* Características principales:

//* Valores únicos: No permite duplicados.

//* Sin índices: Los elementos no tienen una posición específica (no se accede con índices como en los arrays).

//* Iterable: Puedes recorrerlo con un bucle for...of o métodos como forEach.

//* Sintaxis:


// *const miSet = new Set([iterable]);
//* iterable: Opcional. Un array o cualquier otro iterable cuyos elementos se añadirán al Set.

//* Métodos principales de Set:
//* Método                	Descripción
//* add(valor)	Añade un valor al Set. Si ya existe, no lo añade.
//* delete(valor)	Elimina un valor del Set. Devuelve true si el valor existía.
//* has(valor)	Verifica si un valor existe en el Set. Devuelve true o false.
//* clear()	Elimina todos los valores del Set.
//* size	Propiedad que devuelve el número de elementos en el Set.

//*Ejemplo básico:
console.log("-------------------------------------Coleccion de datos set()-------------------------------")

const miSet = new Set();

miSet.add(1); //* Añade 1
miSet.add(2); //* Añade 2
miSet.add(1); //*No añade 1, porque ya existe

console.log("Aquí el set",miSet); //* Set { 1, 2 }
console.log("comprobando con miSet.has(1)",miSet.has(1)); //* true
console.log("comprobar el tamaño del set con miSet.size",miSet.size); //* 2

miSet.delete(2); //* Elimina 2
console.log("miSet despuesd de eliminar con miSet.delete(2)",miSet); //* Set { 1 }

miSet.clear(); //* Elimina todos los elementos
console.log("eliminando todos los elemntos con miSet.clear()",miSet); // Set {}
//TODO Ejercicio con Set:
// *Ejercicio 1: Eliminar duplicados de un array
//* Escribe una función que tome un array y devuelva un nuevo array sin elementos duplicados usando un Set.


function eliminarDuplicados(array) {
  const set = new Set(array); //* Crea un Set a partir del array
  return [...set]; //* Convierte el Set de nuevo a un array
}

const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);

console.log("\nRespuesta al Ejercicio 1: Eliminar duplicados de un array",arraySinDuplicados); //* [1, 2, 3, 4, 5]

//TODO Ejersicio2: Filtrar nombres únicos de una lista
//* Enunciado:
//* Tienes una lista de nombres que puede contener duplicados. Tu tarea es escribir una función que tome esta lista y devuelva un nuevo array con los nombres únicos, es decir, sin duplicados.

// *Requisitos:
//* Usa un Set para eliminar los duplicados.

//* Convierte el Set de nuevo a un array antes de devolverlo.

//* Entrada:

const nombres = [
  "Juan", "Ana", "Carlos", "Ana", "Maria", "Juan", "Pedro", "Maria"
];
//*Salida esperada:

//*["Juan", "Ana", "Carlos", "Maria", "Pedro"]

const filtrarNombres=(nombres)=>{
   const set=new Set(nombres);
   const nombresFiltrados = [...set]
    
    return nombresFiltrados

}

console.log("\nRespuesta al ejersicio 2",filtrarNombres(nombres))

// TODO Ejercicio3: Filtrar objetos únicos basados en una propiedad
//* Enunciado:
//* Tienes una lista de objetos que representan usuarios. Cada usuario tiene las propiedades id y nombre. Algunos usuarios pueden tener el mismo id, pero queremos obtener una lista de usuarios únicos basados en su id.

//* Requisitos:
//* Usa un Set para eliminar los objetos duplicados basados en la propiedad id.

//* Convierte el Set de nuevo a un array antes de devolverlo.
//* Salida esperada:
// *[
// *  { id: 1, nombre: "Juan" },
//*   { id: 2, nombre: "Ana" },
//*   { id: 3, nombre: "Maria" },
//* ]
//* Entrada:

const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 1, nombre: "Carlos" }, // Mismo id que el primer usuario
  { id: 3, nombre: "Maria" },
  { id: 2, nombre: "Pedro" }, // Mismo id que el segundo usuario
];

const filterObjects=(usuarios)=>{
  const setIds = new Set();
  const usuariosUnicos=[];

  for(usuario of usuarios){
    if(!setIds.has(usuario.id)){
      setIds.add(usuario.id)
      usuariosUnicos.push(usuario)
    }
    
  }
  return usuariosUnicos;
  
}

console.log("respuesta al ejersicio 3",filterObjects(usuarios))

//TODO Ejercicio 4: Encontrar la intersección de dos arrays
//*Enunciado:
//* Dados dos arrays de números, escribe una función que devuelva un nuevo array con los elementos que están presentes en ambos arrays (es decir, la intersección de los dos arrays). El array resultante no debe contener duplicados.

//* Requisitos:
//* Usa un Set para manejar los valores únicos.

//* La función debe ser eficiente, especialmente para arrays grandes.

//* Entrada:

const array1 = [1, 2, 2, 3, 4, 5];
const array2 = [2, 3, 3, 6, 7];
//*Salida esperada:

[2, 3]

const encontrarInterseccion=(arr1,arr2)=>{
    const setArray= new Set(arr1)
    
    let interseccion=new Set()
    for(const num of arr2){
      if(setArray.has(num)){
          interseccion.add(num)
      }
    }
    return [...interseccion]

    
}
console.log("Respuesta al ejersicio 4: ",encontrarInterseccion(array1,array2))

