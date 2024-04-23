// Función para convertir un número decimal a binario
function decimalABinario(decimal) {
    // Convierte la parte entera del número decimal a binario
    let binarioParteEntera = '';
    let parteEntera = Math.floor(decimal);
    while (parteEntera > 0) {
        // Obtiene el residuo de la división entre la parte entera y 2
        binarioParteEntera = (parteEntera % 2) + binarioParteEntera;
        // Actualiza la parte entera dividiéndola entre 2 (eliminando el último dígito)
        parteEntera = Math.floor(parteEntera / 2);
    }

    // Convierte la parte fraccionaria del número decimal a binario
    let binarioParteFraccionaria = '';
    let parteFraccionaria = decimal - Math.floor(decimal);
    if (parteFraccionaria !== 0) {
        // Si hay parte fraccionaria, se agrega el punto decimal
        binarioParteFraccionaria = '.';
        while (parteFraccionaria !== 0) {
            // Multiplica la parte fraccionaria por 2 para obtener el próximo bit
            parteFraccionaria *= 2;
            // Si el resultado es mayor o igual a 1, se agrega un 1 al binario y se resta 1
            if (parteFraccionaria >= 1) {
                binarioParteFraccionaria += '1';
                parteFraccionaria -= 1;
            } else {
                // Si no, se agrega un 0 al binario
                binarioParteFraccionaria += '0';
            }
        }
    }

    // Concatena la parte entera y la parte fraccionaria para obtener el número binario completo
    return binarioParteEntera + binarioParteFraccionaria;
}

// Función para convertir un número decimal a hexadecimal
function decimalAHexadecimal(decimal) {
    // Convierte el número decimal a su representación binaria
    const binario = decimalABinario(decimal);

    // Convierte el número binario a su representación hexadecimal
    let hexadecimal = '';
    let partesBinarias = binario.split('.');
    let parteEntera = parseInt(partesBinarias[0], 2).toString(16);
    hexadecimal += parteEntera.toUpperCase();
    if (partesBinarias.length > 1) {
        let parteFraccionaria = partesBinarias[1];
        let fraccionHexadecimal = '';
        for (let i = 0; i < parteFraccionaria.length; i += 4) {
            // Divide la parte fraccionaria en grupos de 4 bits
            let fragmento = parteFraccionaria.substr(i, 4);
            // Convierte cada grupo de 4 bits a su equivalente hexadecimal
            let digitoHexadecimal = parseInt(fragmento, 2).toString(16);
            // Agrega el dígito hexadecimal resultante a la representación hexadecimal
            fraccionHexadecimal += digitoHexadecimal.toUpperCase();
        }
        // Agrega la parte fraccionaria en hexadecimal a la representación hexadecimal completa
        hexadecimal += '.' + fraccionHexadecimal;
    }

    // Retorna el número decimal convertido a hexadecimal
    return hexadecimal;
}

// Ejemplo de uso
const numeroDecimal = 13.75;
const numeroBinario = decimalABinario(numeroDecimal);
const numeroHexadecimal = decimalAHexadecimal(numeroDecimal);

console.log(`Número decimal ${numeroDecimal}`);
console.log(`En binario: ${numeroBinario}`);
console.log(`En hexadecimal: ${numeroHexadecimal}`);

