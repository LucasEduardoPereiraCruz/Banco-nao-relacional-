//use loja

// Inserindo produtos
db.produtos.insertMany([
    {
      "_id": 1, 
      "Nome": "Notebook Dell",
      "Categoria": "Eletrônicos",
      "preco": 4500, 
      "estoque": 15,
      "avaliacao": 4.7
    },
    {
      "_id": 2, 
      "Nome": "SmarthPhone Samsung",
      "Categoria": "Eletrônicos",
      "preco": 2500,
      "estoque": 30, 
      "avaliacao": 4.5, 
    },
    {
      "_id": 3, 
      "Nome": "Cadeira Gamer",
      "Categoria": "Móveis",
      "preco": 1200,
      "estoque": 10,
      "avaliacao": 4.8
    }
  ]);


  // (Igual a)
  db.produtos.find(
    { "preco": 
        {"$eq": 2500} 
    })

  // (Diferente de)
  db.produtos.find(
    { "preco": 
        {"$ne": 4500} 
    })

  // (Maior que)
  db.produtos.find(
    { "preco": 
        {"$gt": 2000} 
    })

  // (Menor que)
  db.produtos.find(
    { "preco": 
        {"$lt": 3000}
    })

  // (maior ou igual / menor ou igual)
  db.produtos.find(
    { "preco": 
        {"$gte": 1000, "$lte": 3000} 
    })

    
  db.produtos.find({ "preco": {"$gte": 2000} })



// Coleção users do banco Loja

db.users.insertMany([
  {
    "_id": 1,
    "username": "Joao",
    "age": 24,
    "active": true,
    "premium": false,
    "hobbies": ["reading", "soccer"],
    "tasks": [
      { "title": "Study MongoDB", "status": "pending" }
    ]
  },
  {
    "_id": 2,
    "username": "Maria",
    "age": 30,
    "active": true,
    "premium": true,
    "hobbies": ["cooking", "yoga"],
    "tasks": [
      { "title": "Complete Project", "status": "done" }
    ]
  },
  {
    "_id": 3,
    "username": "Carlos",
    "age": 35,
    "active": true,
    "premium": false,
    "hobbies": ["gaming", "music"],
    "tasks": [
      { "title": "Write Report", "status": "pending" }
    ]
  }
]);



// ========== OPERADORES LÓGICOS ========== // 
// $and exige que todas as condições especificasdas sejam verdadeiras
db.produtos.find({
  "$and": [
    {"categoria": "Eletrônicos"}, 
    {"preco": {"$gt": 3000}}
  ]
})
// Retornará Notebook Dell pois ele é de ELETRONICOS e tem o preço maior que 3000 



// $or retorna os documentos que satisfaçam pelo menos uma das condições especificadas 
db.produtos.find({
  "$or": [
    {"categoria": "Eletrônicos"}, 
    {"preco": {"$gt": 4000}}
  ]
})
// Qualquer produto da categoria ELETRONICOS ou que tenha o preço superior a 4000 será retornado 


// $Not é um operador que nega uma condição especifica 
db.produtos.find({ "preço": {
    "$not": {"$gt": 3000}
  }
})
// Retornará todos os produtos cujo preço não seja maior que 3000 


// $Nor é o oposto de $or, excluindo documentos que satisfaçam qualquer uma das condições listadas 
db.produtos.find({
  "$nor": [
    {"categoria": "Eletrônicos"}, 
    {"preco": {"$gt": 4000}}
  ]
})
// Serão retornados apenas produtos que não sejam da categoria ELETRONICOS e que tenham preço inferior ou igual a 4000 



// ========== OPERADORES DE ELEMENTOS ========== // 

// $exists verifica se um campo está presente ou não em um documento
db.produtos.find({"avaliacao": {"$exists": true}})
// retorna todos os produtos que possuem o campo avaliacao 

// $type filtra os documentos com base no tipo de dado armazenado em um campo 
db.produtos.find({"preco": {"$type": "double"} })
// retorna todos os documentos onde o campo preco seja do tipo double


// FALTA FAZER OS EXERCICIOS
