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