function verificarPalindromo (verificar){
    if (!verificar){
        return "Nada declarado"
    }else if (verificar.split("").reverse().join("") === verificar){
    return true
    }else{
        return false
    }
}

console.log(verificarPalindromo(""))
console.log(verificarPalindromo("radar"))
console.log(verificarPalindromo("jessica"))