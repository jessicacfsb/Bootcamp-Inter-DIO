let bancoDeDados = []
console.log(bancoDeDados)

const criarItem = (tarefa, status= " ") => {
    const item = document.createElement("div")
    item.classList.add("minhaLista")
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${tarefa}</div>
        <input id="botao" type="button" value="x">
    `
    document.getElementById("toDoList").appendChild(item)
}

const chamar = () => {
    var item = document.getElementById("tarefa").value
    bancoDeDados.push({"tarefa": item, "status": ""})
    atualizarLista()
    document.getElementById("tarefa").value = ""
}

const atualizarLista = () => {
    limpaLista()
    bancoDeDados.forEach(ele => criarItem(ele.tarefa, ele.status))
}

const limpaLista = () => {
    const limpar = document.getElementById("toDoList")
    while (limpar.firstChild) {
        limpar.removeChild(limpar.lastChild)
    }
}

const deletarItem = () => {

    atualizarLista()
}
