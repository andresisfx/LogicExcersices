function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
  
      let factores = [];
      let divisor = 2; // Comenzamos con el primer número primo
      
      while (num>1) {
        while (num%divisor===0) {
          factores.push(divisor)
          num/=divisor
        }
        divisor++
        
      }
      return factores
    }  
   console.log(factorear(180))

   function bubbleSort(arr) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
   for (let i = 0; i < arr.length-1; i++) {
      let swapped = false
      for (let j = 0; j < arr.length-1-i; j++) {
        
        if(arr[j]>arr[j+1]){
          [arr[j],arr[j + 1]]=[arr[j + 1],arr[j]]
          swapped = true
        }
      }
      if(!swapped){
        break;
      }
    
   }
    return arr
  }
  const arr = [5, 3, 8, 1, 2];
  console.log("Original array:", arr);
  console.log("sorted array with Bubble Sort:", bubbleSort(arr))
 
  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    
    for (let i = 0; i < array.length; i++) {            // [8,2,4,7,9,5]
      let min=i                                         //  i
      for (let j = i+1; j < array.length; j++) {        //    j
        if(array[j]<array[min]){ 
          //    m 
          min=j
        }
      }
      let aux = array[i]
      array[i]=array[min];
      array[min] = aux
    }
    return array
  }
  console.log("selectionsort here "+selectionSort([8,2,4,7,9,5]))

  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
                                                        //  0 1 2 3 4 5 
   for (let i = 0; i < array.length; i++) {
    let j=i-1;
    let aux = array[i]
     while (array[j]>aux) {
        array[j+1]=array[j];
        j--
     }
    array[j+1]=aux
  }
  return array
  }
  console.log("insertionsort here "+insertionSort([8,2,4,7,9,5]));

  function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if(array.length<=1)return array
    let calcPivot= Math.floor(Math.random()*array.length);
    let pivot = array[calcPivot];
  
    let equals =[];
    let left=[];
    let right=[];
  
    for (let i = 0; i < array.length; i++) {
      if(array[i]!==pivot){
        if(array[i]<pivot){
          left.push(array[i])
        }else{
          right.push(array[i])
        }
      }else{
        equals.push(array[i])
      }
      
    }
  
  return quickSort(left).concat(equals).concat(quickSort(right))
  }
  console.log("Quicksort here "+quickSort([6,5,2,3,7,9,1]))