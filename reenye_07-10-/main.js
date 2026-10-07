const pedidos = require('./dados.json');

const busca = pedidos.find((pedido) => pedido.id == 1 );

const alteracao = {
    telefone: "(19) 70601 7060",
    senha: "pedrins"
}

console.log(Object.keys(alteracao));

const chaves = Object.keys(alteracao);

console.log(busca);

chaves.forEach((chave) => {
    console.log(chave);
    console.log(busca[chave]);
    busca[chave] = alteracao[chave];
    console.log(busca[chave]);
})

console.log(busca);

//simulando Back-end
const alterar = (req, res)  => {
    const id = req.params.id;
    const info = req.body;

    const busca = pedidos.find((pedido) => pedido.id == id);
    
    Object.keys(info).forEach((i) => {
        busca[i] = info[i]
    });
    res.send("Atualizada com sucesso!").end()

}

console.log(Object.keys(cliente))

pedidos.forEach((pedido) => {
    if(pedido.id == 2){
    cliente.id = info.id;
    cliente.telefone = info.telefone;
    cliente.senha = info.senha;

    }

})
Object.keys(cliente).forEach((key) => {
    cliente[key] = info[key];
});
