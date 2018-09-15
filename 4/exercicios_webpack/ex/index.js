const produto = {
    nome: 'Caneta Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Azul'

console.log(produto, novoProduto)