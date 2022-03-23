function ordenarNumeros(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    for (let i = 0; i < numeros.length - 1; i++) {
        
        for (let j = 0; j < numeros.length - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }
}

let datos1 = [1, 2, 45, 5, 6, 3, 1, 8];

let datos2 = [100, 5, 5, 8, 3, 7, 8];

console.log(datos1);

console.log();

ordenarNumeros(datos1);

console.log(datos2);

console.log();

ordenarNumeros(datos2);