db.modelo_rascunho.aggregate([

    {
        $project: {
            _id: 0,

            // Nome do modelo
            nome: {
                $arrayElemAt: [
                    ["Corolla", "Civic", "Onix", "Gol", "Fiesta"],
                    { $floor: { $multiply: [{$rand: {}}, 5] } }
                ]
            },

            // Marca associada (simples)
            marca: {
                $arrayElemAt: [
                    ["Toyota", "Honda", "Chevrolet", "Volkswagen", "Ford"],
                    { $floor: { $multiply: [{$rand: {}}, 5] } }
                ]
            }
        }
    },

    { $limit: 5 },

    { $out: "modelo" }

]);