// Média de Vendas por Produto:
// OBJETIVO: Determinar a média de vendas para cada tipo de produto.
// Agrupe por produto e utilize $avg.

// Executa uma agregação na coleção item
db.item.aggregate([
  {
    $group: {
      // Agrupa os itens que possuem o mesmo nome de produto
      _id: "$produto",

      // Calcula a média da quantidade vendida de cada produto
      media_vendas: { $avg: "$quantidade" }
    }
  }
])



//Listar Clientes que Compraram Mais de 5 Produtos:
// Objetivo: Identificar clientes que realizaram grandes pedidos.
// Dica: Use $match após $group.

// Executa uma agregação na coleção venda
db.venda.aggregate([
  {
    $lookup: {
      // Busca os itens relacionados a cada venda
      from: "item",

      // Campo da coleção venda ATUAL USADO NA COMPARAÇÃO
      localField: "_id",

      // Campo da coleção item que referencia a venda, OUTRA COLEÇÃO USADA NA COMPARAÇÃO
      foreignField: "venda_id",

      // Nome do array que armazenará os itens encontrados
      as: "itens"
    }
  },
  {
    // Separa cada item do array em um documento individual
    $unwind: "$itens"
  },
  {
    $group: {
      // Agrupa as vendas pelo cliente
      _id: "$cliente_id",

      // Soma a quantidade total de produtos comprados pelo cliente
      total_produtos: { $sum: "$itens.quantidade" }
    }
  },
  {
    $match: {
      // Mostra apenas clientes que compraram mais de 5 produtos
      total_produtos: { $gt: 5 }
    }
  }
])



// Top 3 Produtos Mais Vendidos:
// Objetivo: Encontrar os produtos com maior número de vendas.
// Dica: Agrupe por produto, some quantidade e use $sort seguido de $limit.

// Executa uma agregação na coleção item
db.item.aggregate([
  {
    $group: {
      // Agrupa os registros pelo nome do produto
      _id: "$produto",

      // Soma todas as quantidades vendidas desse produto
      total_vendido: { $sum: "$quantidade" }
    }
  },
  {
    // Ordena do maior para o menor total vendido
    $sort: {
      total_vendido: -1
    }
  },
  {
    // Retorna apenas os 3 primeiros resultados
    $limit: 3
  }
])



//Total de Vendas por Região:
// Objetivo: Se houver um campo regiao em clientes, calcular o total de vendas por região.
// Dica: Utilize $lookup para unir pedidos e clientes, depois agrupe por regiao.

// Executa uma agregação na coleção venda
db.venda.aggregate([
  {
    $lookup: {
      // Relaciona cada venda ao cliente que a realizou
      from: "cliente",

      // Campo da coleção venda
      localField: "cliente_id",

      // Campo correspondente na coleção cliente
      foreignField: "_id",

      // Nome do array que armazenará os dados do cliente
      as: "cliente"
    }
  },
  {
    // Transforma o array cliente em um objeto simples
    $unwind: "$cliente"
  },
  {
    $group: {
      // Agrupa as vendas pela região do cliente
      _id: "$cliente.regiao",

      // Conta quantas vendas existem em cada região
      total_vendas: { $sum: 1 }
    }
  }
])