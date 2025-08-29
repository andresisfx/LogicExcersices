 function longestPalindrome(s) {
    let longest = "";
    console.log(`\nBuscando el palíndromo más largo en: "${s}"\n`);
    
    for (let i = 0; i < s.length; i++) {
        console.log(`\n--- Iteración ${i} (carácter actual: '${s[i]}') ---`);
        
        // Palíndromos de longitud impar (centro en i)
        console.log(`\nBuscando palíndromo IMPAR centrado en '${s[i]}' (índice ${i})`);
        let odd = expandAroundCenter(s, i, i);
        console.log(`Palíndromo impar encontrado: "${odd}"`);
        
        // Palíndromos de longitud par (centro entre i e i+1)
        console.log(`\nBuscando palíndromo PAR centrado entre '${s[i]}' y '${s[i+1] || ''}' (índices ${i} y ${i+1})`);
        let even = expandAroundCenter(s, i, i + 1);
        console.log(`Palíndromo par encontrado: "${even}"`);
        
        // Actualiza el más largo encontrado
        if (odd.length > longest.length) {
            console.log(`Actualizando palíndromo más largo (impar): "${odd}"`);
            longest = odd;
        }
        if (even.length > longest.length) {
            console.log(`Actualizando palíndromo más largo (par): "${even}"`);
            longest = even;
        }
    }
    
    console.log(`\nFIN DEL PROCESO. Palíndromo más largo encontrado: "${longest}"`);
    return longest;
}

function expandAroundCenter(s, left, right) {
    console.log(`  Expandiendo desde índices ${left}-${right}: '${s.substring(left, right + 1)}'`);
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        console.log(`  Coincidencia: '${s[left]}' == '${s[right]}' → expandiendo...`);
        left--;
        right++;
    }
    console.log(`  Fin de expansión. Substring: '${s.substring(left + 1, right)}'`);
    return s.substring(left + 1, right);
}

// Ejecutamos con el ejemplo "babad"
console.log(longestPalindrome("babad"));