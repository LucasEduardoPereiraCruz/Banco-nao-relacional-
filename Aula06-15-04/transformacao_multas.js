db.multa_rascunho.aggregate([

    {
        $project: {
            _id: 0,

            // Data aleatória
            data: {
                $add: [
                    new Date("2022-01-01"),
                    { $multiply: [
                        { $rand: {} },
                        (new Date() - new Date("2022-01-01"))
                    ]}
                ]
            },

            // Hora aleatória
            hora: {
                $concat: [
                    { $toString: { $floor: { $multiply: [{$rand: {}}, 23] } } },
                    ":",
                    { $toString: { $floor: { $multiply: [{$rand: {}}, 59] } } }
                ]
            },

            // Local fixo (pode mudar se quiser)
            local: "Centro",

            // Agente que aplicou a multa
            agente: {
                $arrayElemAt: [
                    ["João", "Maria", "Carlos"],
                    { $floor: { $multiply: [{$rand: {}}, 3] } }
                ]
            },

            // Veículo multado
            veiculo: {
                $arrayElemAt: [
                    ["ABC-1234", "XYZ-9999", "DEF-5678"],
                    { $floor: { $multiply: [{$rand: {}}, 3] } }
                ]
            },

            // Tipo de infração
            infracao: {
                $arrayElemAt: [
                    ["Excesso de velocidade", "Sem cinto"],
                    { $floor: { $multiply: [{$rand: {}}, 2] } }
                ]
            },

            // Cidade onde ocorreu
            cidade: {
                $arrayElemAt: [
                    ["Limeira", "Campinas"],
                    { $floor: { $multiply: [{$rand: {}}, 2] } }
                ]
            }
        }
    },

    { $limit: 10 },

    { $out: "multa" }

]);