
// ========== INSERÇÃO DE DOCUMENTOS ========== // 

// Cria coleções automaticamente quando documentos são inseridos
db.createCollection("usuarios");

// Inserção de um único documento
db.usuarios.insertOne(
    {nome: "Alice", idade: 25, cidade: "São Paulo"}
);

// Inserção de multiplos documentos 
db.usuarios.insertMany([
    {nome: "Bob", idade: 30, cidade: "Rio de Janeiro"},
    {nome: "Carlos", idade: 22, cidade: "Belo Horizonte"}
]);


// ========== FILTRAR DOCUMENTOS ========== // 

// Filtra documentos (Encontra usuários com 25 anos de idade)
db.usuarios.find({idade: 25}).pretty();

// Filtra e exibe apenas alguns campos. Retorna apenas o campo nome, 
// excluindo _id
db.usuarios.find(
    {cidade: "São Paulo"}, 
    {nome: 1, _id: 0} // 1 e 0 definem quais campos irão aparecer na consulta. Campos com valor 0 (false) não aparecem 
);


// ========== ATUALIZAR DOCUMENTOS ========== //

// Atualiza um único documento 
db.usuarios.updateOne(
    {nome: "Alice"},
    {$set: {idade: 26}}
);

// Atualiza um multiplos documentos. Todos os usuários de São Paulo terão o campo estado: "SP"
db.usuarios.updateMany(
    {cidade: "São Paulo"}, 
    {$set: {estado: "SP"}}
);

// Adiciona um novo valor a um array dentro do documento
db.usuarios.updateOne(
    {nome: "Alice"}, 
    {$push: {hobbies: "Leitura"}} 
);


// ========== REMOVER DOCUMENTOS ========== // 

// Remover um unico documento 
db.usuarios.deleteOne(
    {nome: "Carlos"}
); 

// Remove todos os usuários com menos de 25 anos
db.usuarios.deleteMany(
    {ìdade: {$lt: 25}} 
)


// ========== CONVERSÃO SQL P/ NOSQL ========== // 
db.clientes.insertOne({
    _id: 1,
    nome: "João Silva", 
    email: "joao@email.com", 
    pedidos: [
        {id_pedido: 101, produto: "Notebook", valor: 3000}, 
    ]
})


//Quando for converter:

//Cada tabela principal → coleção
//Relacionamentos → arrays ou objetos dentro do documento
//Evitar JOIN → embutir dados
//Chave estrangeira → vira campo dentro do documento