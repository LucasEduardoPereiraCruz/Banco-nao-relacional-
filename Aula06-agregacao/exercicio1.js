// ========== COLEÇÕES UTILIZADAS ========== // 

db.cliente.insertMany([{
    "_id": 153, 
    "nome": "Alice", 
    "email": "alice@exemple.com", 
    "regiao": "Sudeste" 
}]); 


db.venda.insertMany([{
    "_id": 57, 
    "cliente_id": 153, 
    "data_venda": ISODate("2023-0115T08:00:00Z"), 
    "mes": 1,
    "ano": 2023
}]); 


db.item.insertMany([
{
    "_id": 1,
    "venda_id": 57,
    "produto": "Laptop",
    "quantidade": 2,
    "preco_unitario": 1200
},
{
    "_id": 2,
    "venda_id": 57,
    "produto": "Mouse",
    "quantidade": 3,
    "preco_unitario": 50
},
{
    "_id": 3,
    "venda_id": 57,
    "produto": "Teclado",
    "quantidade": 4,
    "preco_unitario": 100
},
{
    "_id": 4,
    "venda_id": 57,
    "produto": "Monitor",
    "quantidade": 1,
    "preco_unitario": 800
}
]);


// Contagem de vendas por cliente 
// OBJETIVO: Calcular quantas vendas cada cliente realizou 
// Usar $group com cliente_id

db.venda.aggregate([{
    $group: { // Agrupa os documentos de acordo com um campo
        _id: "$cliente_id",  // Cria um grupo para cada cliente_id encontrado
        total_vendas: {$sum: 1} // Conta quantas vendas existem em cada grupo - // Cada documento soma 1 ao total
    }
}]) 