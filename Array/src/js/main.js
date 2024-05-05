// Arreglos

// A

// Para convertir de objeto a array se usa Array.from(myObj)
// Para unir o concatenar arrays se usa myArray1.concat(myArray2)
// Para pasar de un array a un string separado por x signo o parametro, se usa myArray.join('-')
// Para saber que hay un array se usa includes(valor, numVecesValor)
// Para pasar de string a array usamos split(parametro)
// Para buscar se usa indexOf(valor, desdeDondeBuscaElIndice) y devuelve el primero que encuentre desde donde este contando
// Se usan push y pop, para agregar y eliminar al final. unshift para agregar al inicio y delete para eliminar en x posicion

console.groupCollapsed('Crear array:')

const arraySimple = [
    1,
    'x',
    true,
    [1, 2, 3],
    { name1: 'xavi', name2: 'alba', name3: 'marco' }
]

const arraySimple1 = [2, 4]
const arraySimple2 = Array('yo', 'tu')

arraySimple2[0] = 'hola'
arraySimple2.push('chao')

const arraySimple3 = new Array(5)                   // vacio, pero x cant de veces [ , , , , ] (5)

console.log(arraySimple)
console.log(arraySimple1)
console.log('Asi se ve antes:', arraySimple2)
console.log(arraySimple3)

console.groupEnd()
console.log("")

// B

console.groupCollapsed('Funciones para arrays:')

let arrayInterno1 = arraySimple[4].name1.split('')
console.log(arrayInterno1)

let arrayInterno2 = Array.from(arraySimple[4].name1)
console.log(arrayInterno2)

// C

console.log(arraySimple.at(-1))                     // con at(-num) me los desde el ultimo al primero

// D 

arraySimple2.unshift('sicko')
const delArraySimple2 = arraySimple2.pop()

console.log('Tras eliminar a:', delArraySimple2)

delete arraySimple2[1]                              // elimina segun la posicion indicada, y deja espacio vacio

console.log('Y asi se ve despues:', arraySimple2)    // quito la ultima ('chao')

// E

console.log(arraySimple2.indexOf('tu'))
console.log(arraySimple2.includes('tu'))

console.groupEnd()
console.log("")

// F

console.group('Union de arrays:')

let clanGates = ['david', 'luisa', 'simon']
let clanGosling = ['mariana', 'kevin']

clanGates.push(clanGosling)
console.log(clanGates)
clanGates.pop()

clanGates = clanGates.concat(clanGosling)
console.log(clanGates)

let clanGatesComas = clanGates.join(', ')
console.log(clanGatesComas)

console.groupEnd()
console.log('')

// G

let arrayDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayDiez)

let stringDiezRota = arrayDiez.join(', ')
console.log(stringDiezRota)

let arrayDiezJunta = stringDiezRota.split(', ')
console.log(arrayDiezJunta)

'one'

//let arrayDiezJuntaNum = []

//arrayDiezJunta.forEach(element => {
//    let elementNum = Number (element)
//    arrayDiezJuntaNum.push(elementNum)
//});

//console.log(arrayDiezJuntaNum)

'two...'

// let arrayDiezJuntaNum = arrayDiezJunta.map (numero => {
//    return Number(numero)
//})
// console.log(arrayDiezJuntaNum)

'three...'

// console.log(arrayDiezJunta.map(numero=> Number (numero)))

'four.'

console.log(arrayDiezJunta.map(Number))                             //aqui no se esta copiando a otra variable. Aqui se esta sobreescribiendo la original

//      NOTA:
// Se podia separar usando Array.from(text,Number) y lo convertir a array y a 
// numeros, pero en este caso puntual, debido a las comas, no pudimos usarlo