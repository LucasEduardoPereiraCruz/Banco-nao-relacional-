// Criar um indice em um unico campo 
db.usuarios.createIndex({email: 1})

// Buscas pelo campo email serão mais rápidas 
db.usuarios.find({email: "joao@email.com"})


// ====== INDICES COMPOSTOS ======= // 
// Utilizado para achar multiplos resultados 
db.usuarios.createIndex({nome: 1, idade: -1}) // Este indice ajuda a achar nomes por ordem crescente e idade em ordem decrescente


db.usuarios.find({nome: "Carlos"}).sort({idade: -1})


// ====== INDICES EM ARRAYS ======= //  
// Criar um indice para um array 
db.pedidos.createIndex({itens: 1}) // Melhora buscas em coleções onde itens são arrays 



// ====== INDICES EM CAMPOS TEXTUAIS ======= //
// Criar um indice para busca textual 
db.produtos.createIndex({descricao: "text"})

db.produtos.find({$text: {$search: "Notebook"}}) // Retorna todos os produtos cuja a descrição contem notebook 



// ====== INDICES GEOESPACIAIS ======= //
db.locais.createIndex({localizacao: "2dsphere"}) // Agora podemos buscar locais próximos de um ponto especifico 





// ====== QUANTO UM INDICE OCUPA ======= //
db.usuarios.totalIndexSize()
// SAIDA: 12288
// SIGNIFICA QUE ELE OCUPA 0,012 MB APROXIMADAMENTE NA COLEÇÃO 


// ====== REMOVENDO INDICES ======= //
db.usuarios.dropIndex("email_1")

// Listar indices existentes 
db.usuarios.getIndexes()



// Continuação de códigos mais "Complexos" // 
// Oq falta ainda: Detalhando o espaço usado por indices de uma coleção, como saber se o indice está sendo usado, 
// Para oq serve o hint() e exemplo de uso do mesmo, avaliando desempenhos de indices, como usar o .Explain()


// ====== ESPAÇO USADO POR INDICES DE UMA COLEÇÃO ======= //
db.usuarios.stats().indexSizes

// Saída esperada 
{
    "_id_": 4096000,
    "email_1": 1146880,
    "_nome_1_idade_1": 2293760
}

// Explicação 
 // _id_ 4mb (Mongo cria esse indice automaticamente)
 // email_1 1.1mb indice no campo email 
 // nome_1_idade_1 2.2 indice composto em nome e idade 



// ====== COMO SABER SE O INDICE ESTÁ SENDO USADO ======= //
 // Podemos analisar como uma consulta está sendo processada com .explain("executionStats")

// Exemplo sem indice 
db.usuarios.find({email: "joao@email.com"}).explain("executionStats") 

// Exemplo com indice 
db.usuarios.find({email: "joao@email.com"}).hint({email: 1}).explain("executionStats")

 // Se o totalKeysExamined e totalDocsExamined for baixo, foi utilizado com sucesso 




// ====== EXEMPLO USANDO HINT ======= //
db.pedidos.createIndex({email: 1})
db.pedidos.createIndex({cliente: 1, status: 1})

db.pedidos.find({email: "joao@email.com"}).explain("executionStats")

db.pedidos.find({email: "joao@email.com"}).hint({cliente: 1, status: 1}).explain("executionStats")