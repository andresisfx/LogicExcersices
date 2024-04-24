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
