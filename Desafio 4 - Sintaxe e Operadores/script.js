function comparaNumeros (num1, num2) {
    const compararOsNumeros = comparar(num1, num2)
    const maiorQue = calcularDiferenca(num1, num2);

    return `${compararOsNumeros}. ${maiorQue}`
}

function comparar (num1, num2){
    if (num1 == num2){
        return `Os números ${num1} e ${num2} SÃO iguais`
    }else{
        return `Os números ${num1} e ${num2} NÃO são iguais`
    }
}

function calcularDiferenca (num1, num2) {
    let somar = num1 + num2
    if (somar < 10){
        return `Sua soma é ${somar}, que é menor que 10 e menor que 20.`
    }else if (somar ==10){
        return `Sua soma é ${somar}, que é menor que 20.`
    }else if (somar > 10 && somar < 20){
        return `Sua soma é ${somar}, que é maior que 10 e menor que 20.`
    }else if (somar == 20){
        return `Sua soma é ${somar}, que é maior que 10.`
    }else{
        return `Sua soma é ${somar}, que é maior que 10 e maior que 20.`
    }
}

console.log(comparaNumeros(20, 10))