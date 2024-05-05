//Ejercicios: ARREGLOS

// 1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes.

let arrayFruits = ['pear','grape','orange','strawberry','pineapple']

// 2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola.

for (let i = 0; i < arrayFruits.length; i++) {
    console.log(arrayFruits[i]);
}
console.log("")

// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la consola.

arrayFruits.forEach(fruit => {
    console.log(fruit.toUpperCase())
});
console.log("");

// 4. Crea un array llamado números que contenga los números del 1 al 10.

let arrayNums = [1,2,3,4,5,6,7,8,9,10];

// 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la consola.

let i=0
while (i<arrayNums.length){
    console.log(arrayNums[i])
    i++
}
console.log("");

// 6. Agrega una nueva fruta al final del array frutas.

arrayFruits.push('apple')
console.log(arrayFruits)

// 7. Elimina el segundo elemento del array números.

delete arrayNums[1]
console.log(arrayNums)

// 8. Invierte el orden de los elementos en el array frutas.

'FOR'
//arrayFruitsReversed = []
//for (let i = arrayFruits.length - 1; i > -1; i--) {
//    arrayFruitsReversed.push(arrayFruits[i]) 
//}
//console.log(arrayFruitsReversed);

'.REVERSE'
console.log(arrayFruits.toReversed())

// 9. Ordena el array numeros en orden descendente.

console.log(arrayNums.toReversed());

// 10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelva true si esa fruta está en el array frutas, y false en caso contrario.

function searchFruits(fruta) {
    console.log('¿esta la fruta '+fruta+'?: '+arrayFruits.includes(fruta))
}
searchFruits('pear')

// 11. Imprime en la consola el primer elemento del array frutas.

console.log(arrayFruits[0])

// 12. Imprime en la consola el último elemento del array numeros.

console.log(arrayNums[(arrayNums.length) - 1])

// 13. Utiliza el método forEach para imprimir cada fruta pero convertida a array.

arrayFruits.forEach(fruit => {
    console.log(fruit.split(""))
});

// 14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola.

for (let num of arrayNums) {
    console.log(num)
}

// 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array numeros utilizando el método map.

let arrayNumsDuplicated = arrayNums.map(num =>{
    return (num * 2)
})
console.log(arrayNumsDuplicated)

// 16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números.

let array1 = [1,2,3]
let array2 = [1,5,3];

// 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados en la consola.

let sumaArray1=0

for (let i= 0; i < array1.length; i++) {
    sumaArray1 = sumaArray1 + array1[i]
}
console.log(sumaArray1);

let sumaArray2= 0;

for (let i = 0; i < array2.length; i++) {
    sumaArray2 = sumaArray2 + array2[i];
}
console.log(sumaArray2);

// 18. Crea una función llamada buscarNumero que tome como argumentos un número y un array de números, y devuelva true si el número está en el array, y false en caso contrario.

function searchNum(num,array3) {
    console.log("¿esta el num " + num + " en el array "+ array3 + "?: " + array3.includes(num));
}

searchNum(2,[1,0,2]);

// 19. Crea un array llamado edades que contenga al menos 5 números (edades).

let arrayAges = [4,75,26,3,33]

// 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga solo las edades mayores o iguales a 18.

let olderPeople = arrayAges.map(age=>{
    if (age >= 18){
        return age
    }
})
console.log(olderPeople)

// 21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).

arrayPrices = [23, 24.2, 5, 6, 9.6]

// 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los precios con un 21% de IVA aplicado a cada uno.

let ivaPrices = arrayPrices.map(price=>{
    return price + (price * 0.21)
})
console.log(ivaPrices)

// 23. Crea un array llamado duplicados que contenga algunos números duplicados.

let arrayWithDuplicatedNums = [2,2,2,2,3,4,3,5,4]

// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola.

let arrayFiltered = []

'.PUSH'                                     // It is not well done

for (let i = 0; i < arrayWithDuplicatedNums.length; i++) {
    let element = arrayWithDuplicatedNums[i]
    let found = false
    for (let j = 0; j < arrayFiltered.length; j++) {
        if(element===arrayWithDuplicatedNums[j]){
            found = true
            break
        } 
    }
    if(!found){
        arrayFiltered.push(element)
    }
}
console.log(arrayWithDuplicatedNums)
console.log(arrayFiltered)
                                            // Not to use previous one!

'DELETE'

function deleteDuplicated(array) {
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (elemento === array[j]) {
                delete array[j];
            }
        }
    }
    console.log(array);
    return array;
}
deleteDuplicated(arrayWithDuplicatedNums);

// 25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.

let arrayNoms1 = ['carlos','juan','luisa']
let arrayNoms2 = ["carla", "juana", "luis"];

// 26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la
// consola.

let arrayNomsConcat = arrayNoms1.concat(arrayNoms2)
console.log(arrayNomsConcat)

// 27. Crea un array llamado colores que contenga al menos 5 colores diferentes.

let arrayColors = ["green", "silver", "black","yellow","blue"];

// 28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola.

console.log('El array tiene',arrayColors.length,'elementos')