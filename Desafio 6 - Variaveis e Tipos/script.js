var arr = [1, 3, 4, 6, 80, 33, 23, 90]

function numerosPares (array){
    if (!array.length) return -1
    for(var i = 0; i < array.length; i++)
    if (array[i] % 2 == 0){
        array[i] = 0
    }

    return array
}

console.log(numerosPares(arr))