// Média de Vendas por Produto:
// OBJETIVO: Determinar a média de vendas para cada tipo de produto.
// Agrupe por produto e utilize $avg.
db.item.aggregate([
  {
    $group: {
      _id: "$produto",
      media_vendas: { $avg: "$quantidade" }
    }
  }
])



//Listar Clientes que Compraram Mais de 5 Produtos:
// Objetivo: Identificar clientes que realizaram grandes pedidos.
// Dica: Use $match após $group.
db.venda.aggregate([
  {
    $lookup: {
      from: "item",
      localField: "_id",
      foreignField: "venda_id",
      as: "itens"
    }
  },
  {
    $unwind: "$itens"
  },
  {
    $group: {
      _id: "$cliente_id",
      total_produtos: { $sum: "$itens.quantidade" }
    }
  },
  {
    $match: {
      total_produtos: { $gt: 5 }
    }
  }
])



// Top 3 Produtos Mais Vendidos:
// Objetivo: Encontrar os produtos com maior número de vendas.
// Dica: Agrupe por produto, some quantidade e use $sort seguido de $limit.
db.item.aggregate([
  {
    $group: {
      _id: "$produto",
      total_vendido: { $sum: "$quantidade" }
    }
  },
  {
    $sort: {
      total_vendido: -1
    }
  },
  {
    $limit: 3
  }
])



//Total de Vendas por Região:
// Objetivo: Se houver um campo regiao em clientes, calcular o total de vendas por região.
// Dica: Utilize $lookup para unir pedidos e clientes, depois agrupe por regiao.
db.venda.aggregate([
  {
    $lookup: {
      from: "cliente",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente"
    }
  },
  {
    $unwind: "$cliente"
  },
  {
    $group: {
      _id: "$cliente.regiao",
      total_vendas: { $sum: 1 }
    }
  }
])