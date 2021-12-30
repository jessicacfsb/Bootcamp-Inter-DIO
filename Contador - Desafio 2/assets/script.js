var numeroInicial = document.getElementById("currentNumber")
var numeroAtual = 0

    function increment () {
        numeroAtual ++
        numeroInicial.innerHTML = numeroAtual
        if (numeroAtual >= 0 && numeroAtual > 10){  
            window.alert("ERRO... Contador Acima do limite")
        }
    }

    function decrement () {
        numeroAtual --
        numeroInicial.innerHTML = numeroAtual
        if (numeroAtual < 0 && numeroAtual < -10){
            window.alert("ERRO... Contador Abaixo do limite")
        }
}