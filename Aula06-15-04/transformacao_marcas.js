db.marcas_rascunho.aggregate([

    {
        $project: {
            _id: 0,

            // Seleciona uma marca aleatória
            nome: {
                $arrayElemAt: [
                    ["Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen"],
                    { $floor: { $multiply: [{$rand: {}}, 5] } }
                ]
            }
        }
    },

    { $limit: 5 },

    { $out: "marca" }

]);