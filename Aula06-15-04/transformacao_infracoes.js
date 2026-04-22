db.infracoes.aggregate([

    {
        $project: {
            _id: 0,

            // Tipo de infração
            descricao: {
                $arrayElemAt: [
                    ["Excesso de velocidade", "Avanço de sinal", "Estacionamento irregular", "Sem cinto"],
                    { $floor: { $multiply: [{$rand: {}}, 4] } }
                ]
            },

            // Valor da multa
            valor: { 
                $floor: { $multiply: [{$rand: {}}, 500] } 
            },

            // Pontos na CNH
            pontos: { 
                $floor: { $multiply: [{$rand: {}}, 7] } 
            }
        }
    },

    { $limit: 5 },

    { $out: "infracao" }

]);