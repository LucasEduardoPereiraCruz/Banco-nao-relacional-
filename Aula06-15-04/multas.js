db.multas.insertMany([
{
  agente: { nome: "Marcia" },
  veiculo: { placa: "EVA4960", modelo: { nome: "Polo", marca: "Volkswagen" }, cor: "Branco" },
  proprietario: { nome: "Tiago", sexo: "Masculino" },
  multa: { descricao: "Falta do cinto de segurança" },
  cidade: "Cajuru",
  data_multa: ISODate("2018-12-31")
},
{
  agente: { nome: "Leticia" },
  veiculo: { placa: "BLD7764", modelo: { nome: "Fusca", marca: "Volkswagen" }, cor: "Branco" },
  proprietario: { nome: "Tiago", sexo: "Masculino" },
  multa: { descricao: "Avançar sinal vermelho" },
  cidade: "Mococa",
  data_multa: ISODate("2019-02-28")
},
{
  agente: { nome: "Valdir" },
  veiculo: { placa: "CFU0412", modelo: { nome: "Gol", marca: "Volkswagen" }, cor: "Azul" },
  proprietario: { nome: "Tiago", sexo: "Masculino" },
  multa: { descricao: "Excesso de velocidade" },
  cidade: "Guaxupé",
  data_multa: ISODate("2018-12-30")
},
{
  agente: { nome: "Kauan" },
  veiculo: { placa: "ZZZ0666", modelo: { nome: "Opala", marca: "Chevrolet" }, cor: "Preto" },
  proprietario: { nome: "Tiago", sexo: "Masculino" },
  multa: { descricao: "Falta do cinto de segurança" },
  cidade: "Curitiba",
  data_multa: ISODate("2017-12-23")
},
{
  agente: { nome: "Filipe" },
  veiculo: { placa: "YDX5892", modelo: { nome: "Chevette", marca: "Chevrolet" }, cor: "Vermelho" },
  proprietario: { nome: "Joazim", sexo: "Masculino" },
  multa: { descricao: "Excesso de velocidade" },
  cidade: "Mococa",
  data_multa: ISODate("2018-05-30")
},
{
  agente: { nome: "Tiago" },
  veiculo: { placa: "KYN0169", modelo: { nome: "Palio", marca: "Fiat" }, cor: "Branco" },
  proprietario: { nome: "Mariazinha", sexo: "Feminino" },
  multa: { descricao: "Avançar sinal vermelho" },
  cidade: "Guaxupé",
  data_multa: ISODate("2019-05-30")
},
{
  agente: { nome: "Lucas" },
  veiculo: { placa: "OKY0101", modelo: { nome: "Ká", marca: "Ford" }, cor: "Preto" },
  proprietario: { nome: "Zezinho", sexo: "Masculino" },
  multa: { descricao: "Avançar sinal vermelho" },
  cidade: "Guaxupé",
  data_multa: ISODate("2017-03-14")
},
{
  agente: { nome: "Juan" },
  veiculo: { placa: "YAG0101", modelo: { nome: "Polo", marca: "Volkswagen" }, cor: "Verde" },
  proprietario: { nome: "Joazim", sexo: "Masculino" },
  multa: { descricao: "Falta do cinto de segurança" },
  cidade: "Curitiba",
  data_multa: ISODate("2016-08-19")
},
{
  agente: { nome: "Rafinha" },
  veiculo: { placa: "EVA4960", modelo: { nome: "Polo", marca: "Volkswagen" }, cor: "Branco" },
  proprietario: { nome: "Tiago", sexo: "Masculino" },
  multa: { descricao: "Excesso de velocidade" },
  cidade: "Guaxupé",
  data_multa: ISODate("2018-11-15")
},
{
  agente: { nome: "Marina" },
  veiculo: { placa: "EVA4960", modelo: { nome: "Polo", marca: "Volkswagen" }, cor: "Branco" },
  proprietario: { nome: "Tiago", sexo: "Masculino" },
  multa: { descricao: "Falta do cinto de segurança" },
  cidade: "Guaxupé",
  data_multa: ISODate("2019-01-28")
}
])