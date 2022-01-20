const input = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos (array){
    const mySet = new Set (array)
    return [...mySet] // com os ... ele irá retornar um novo array

    // return [myset] irá retornar um set = [ Set(6) { 30, 40, 5, 223, 2049, 3034 } ]
    }

console.log(valoresUnicos(input))