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
