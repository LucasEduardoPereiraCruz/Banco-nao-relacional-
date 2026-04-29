// Exercícios da lista // 

// 1- Modelo de carro com mais multas // 
db.multas.aggregate([
  { $group: { _id: "$veiculo.modelo.nome", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()



// 2- Quantidade de multas por cidade // 
db.multas.aggregate([
  { $group: { _id: "$cidade", total: { $sum: 1 } } }
]).pretty()



// 3- Infração mais aplicada // 
db.multas.aggregate([
  { $group: { _id: "$multa.descricao", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()



// 4- Mês com mais multas // 
db.multas.aggregate([
  {
    $project: {
      mes: { $month: "$data_multa" }
    }
  },
  {
    $group: {
      _id: "$mes",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()



// 5- Cor de veículo mais multada // 
db.multas.aggregate([
  { $group: { _id: "$veiculo.cor", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()


// 6- Agente que mais aplica multas // 
db.multas.aggregate([
  { $group: { _id: "$agente.nome", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()



// 7- Sexo mais multado // 
db.multas.aggregate([
  { $group: { _id: "$proprietario.sexo", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()


// 8- Marca de carro preferida pelos homens // 
db.multas.aggregate([
  { $match: { "proprietario.sexo": "Masculino" } },
  { $group: { _id: "$veiculo.modelo.marca", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()



// 9- Cor de carro preferida pelas mulheres // 
db.multas.aggregate([
  { $match: { "proprietario.sexo": "Feminino" } },
  { $group: { _id: "$veiculo.cor", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 1 }
]).pretty()


// 10- Ranking dos veículos mais multados - DECRESCENTE // 
db.multas.aggregate([
  {
    $group: {
      _id: "$veiculo.placa",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } }
]).pretty() // Ele só formata a saída pra ficar mais bonita (legível) // 