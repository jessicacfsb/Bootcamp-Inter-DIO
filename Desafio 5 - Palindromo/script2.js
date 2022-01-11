//Solução 2

function verificarPalindromo(verificar){
    if (!verificar) return "Nada Declarado!"
        for (let i = 0; i < verificar.length; i++){
            if (verificar[i] !== verificar[(verificar.length - 1 - i)]){
            return false  
            }else{
                return true
            }
        }
}

console.log(verificarPalindromo(""))
console.log(verificarPalindromo("radar"))
console.log(verificarPalindromo("jessica"))