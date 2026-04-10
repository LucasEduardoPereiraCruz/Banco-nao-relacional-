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