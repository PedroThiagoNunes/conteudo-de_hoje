const pedidos = require('../../dados/pedidos.json');

function calctotal() {
    pedidos.forEach(p => {
        p.calctotais = p.quantidade * p.preco;
        
    });
}

const listar = (req,res) => {
    calctotal();
    res.json(pedidos);
};

const criar = (req, res) => {
    const dados = req.body;
    dados.id = Number(pedidos[pedidos.length - 1].id + 1);
    pedidos.push(dados);
    res.status(201).json(dados);
};

const alterar = (req,res) => { 
    const id = req.params.id;
    const dados = req.body;

    const p = pedidos.find(p => p.id == id);
    if (!p) {
        return res.status(404).send("Pedido não encontrado!");
    }
    
    p.id = Number(id);
    p.cpf = dados.cpf;
    p.nome = dados.nome;

    res.send("cliente alterado com sucesso!")
};

const excluir = (req,res) => {

    const id = req.params.id;
    const indice = pedidos.findLastIndex(p => p.id == id);
    if (indice === -1) {
        return res.status(404).send("pedido não encontrado!");
    }
    pedidos.splice(indice, 1);
    res.send("Pedido excluído com sucesso!");
};




module.exports = {
    criar, listar, alterar, excluir, 
}