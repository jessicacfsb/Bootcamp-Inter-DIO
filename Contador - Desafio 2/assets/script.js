var numeroInicial = document.getElementById("currentNumber")
var numeroAtual = 0

function increment () {
    numeroAtual = numeroAtual + 1
    numeroInicial.innerHTML = numeroAtual
}

function decrement () {
    numeroAtual = numeroAtual - 1
    numeroInicial.innerHTML = numeroAtual
}
