db.veiculos_rascunho.aggregate([

    {
        $project: {
            _id: 0,

            // Gera uma placa aleatória
            placa: {
                $concat: [
                    { $toUpper: { $substr: [{$toString: {$rand: {}}}, 2, 3] } },
                    "-",
                    { $toString: { $floor: { $multiply: [{$rand: {}}, 9999] } } }
                ]
            },

            // Data de cadastro aleatória
            cadastro: {
                $add: [
                    new Date("2018-01-01"),
                    { $multiply: [
                        { $rand: {} },
                        (new Date() - new Date("2018-01-01"))
                    ]}
                ]
            },

            // Proprietário fictício
            proprietario: {
                $arrayElemAt: [
                    ["João", "Maria", "Carlos", "Ana", "Lucas"],
                    { $floor: { $multiply: [{$rand: {}}, 5] } }
                ]
            },

            // Cor EMBUTIDA no veículo
            cor: {
                $arrayElemAt: [
                    ["Preto", "Branco", "Prata", "Vermelho", "Azul"],
                    { $floor: { $multiply: [{$rand: {}}, 5] } }
                ]
            },

            // Modelo do veículo
            modelo: {
                $arrayElemAt: [
                    ["Corolla", "Civic", "Onix", "Gol", "Fiesta"],
                    { $floor: { $multiply: [{$rand: {}}, 5] } }
                ]
            }
        }
    },

    { $limit: 10 },

    { $out: "veiculo" }

]);