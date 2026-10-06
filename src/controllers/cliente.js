const clientes = require("../../dados/clientes.json") 


const listar = (req, res) => {
    res.json(clientes);
    
}

const criar = (req, res) => {
    const dados = req.body;
    dados.id = Number(clientes[clientes.length - 1].id + 1);
    clientes.push(dados);
    res.status(201).json(dados);
};

const alterar = (req, res) => { 
    const id = req.params.id;
    const cliente = clientes.find(c => c.id == id);


};

const excluir = (req, res) => { 
    const id = req.params.id;
    const dados = req.body;

    const p = clientes.find(p => p.id == id);

    if (!p) 

};


module.exports = {
    criar, listar, alterar, excluir
}