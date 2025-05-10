//* Las HashTables (o tablas hash) son una estructura de datos fundamental que permite almacenar pares clave-valor con un tiempo de acceso promedio muy eficiente (O(1)).

//* Conceptos Básicos
//* Una HashTable funciona:

//* Aplicando una función hash a la clave para obtener un índice

//* Almacenando el valor en ese índice

//* Manejando colisiones (cuando dos claves generan el mismo índice)

//!Métodos Principales Evaluados en Pruebas Técnicas
// *set(key, value): Almacena un valor asociado a una clave

// *get(key): Obtiene el valor asociado a una clave

// *remove(key): Elimina un par clave-valor (no mostrado en el ejemplo)

//* keys(): Devuelve todas las claves almacenadas

//* values(): Devuelve todos los valores almacenados

//* Preguntas Comunes en Pruebas Técnicas
//* Implementar una HashTable desde cero (como el ejemplo anterior)

//* Manejo de colisiones: Explicar e implementar estrategias como:

//* Separate chaining (como en el ejemplo)

//* Open addressing (linear probing, quadratic probing)

//* Rehashing: Implementar el redimensionamiento cuando el factor de carga supera un umbral

//* Análisis de complejidad temporal de las operaciones

// TODO Problemas prácticos:

//* Contar frecuencia de elementos en un array

//* Encontrar elementos duplicados

//* Implementar un caché LRU (Least Recently Used)

class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    // Función hash simple (puede ser más sofisticada)
    _hash(key) {
      let total = 0;
      const PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % this.keyMap.length;
      }
      return total;
    }
  
    // Método para manejar colisiones (separate chaining)
    set(key, value) {
      const index = this._hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      // Evitar duplicados (opcional)
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value;
          return;
        }
      }
      this.keyMap[index].push([key, value]);
    }
  
    get(key) {
      const index = this._hash(key);
      if (this.keyMap[index]) {
        for (let item of this.keyMap[index]) {
          if (item[0] === key) {
            return item[1];
          }
        }
      }
      return undefined;
    }
  
    keys() {
      const keysArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let item of this.keyMap[i]) {
            if (!keysArr.includes(item[0])) {
              keysArr.push(item[0]);
            }
          }
        }
      }
      return keysArr;
    }
  
    values() {
      const valuesArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let item of this.keyMap[i]) {
            if (!valuesArr.includes(item[1])) {
              valuesArr.push(item[1]);
            }
          }
        }
      }
      return valuesArr;
    }
  }