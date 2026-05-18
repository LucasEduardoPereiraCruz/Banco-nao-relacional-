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

// ESCREVA UMA CONSULTA QUE RETORNE APENAS OS PRODUTOS QUE POSSUEM O CAMPO AVALIAÇÃO 
db.produtos.find({"avaliacao": {"$exists": true}})