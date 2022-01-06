//MANIPULANDO ARRAYS

//let array = ["string", 1, true];
//console.log(array)

let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]]

//console.log(array[3])


//array.forEach(function(item, index){console.log(item, index)})


//array.push('novo item')
//console.log(array)


//array.pop()
//console.log(array)

//array.unshift('novo item no inicio')
//console.log(array)

//indexOf = consultar o dado
//console.log(array.indexOf(true))

//array.splice(0, 3)
//console.log(array)

//let novoArray = array.slice(0, 3)
//console.log(novoArray)

/*-------------OBJETOS-------------*/

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}

console.log(object.boolean)
console.log(object.objectInterno)

var arrayInterno = object.array
console.log(arrayInterno)

var {string, boolean, objectInterno} = object
console.log(string, boolean)