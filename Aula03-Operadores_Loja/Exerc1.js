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


// ENCONTRAR TODOS OS PRODUTOS COM PREÇO MAIOR OU IGUAL A 2.000,00 
db.produtos.find({ "preco": {"$gte": 2000} })