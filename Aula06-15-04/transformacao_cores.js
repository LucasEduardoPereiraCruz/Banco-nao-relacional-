db.cores_rascunho.aggregate([

    // Define os campos do documento final
    {
        $project: {
            _id: 0,

            // Escolhe uma cor aleatória de uma lista
            nome: {
                $arrayElemAt: [
                    ["Preto", "Branco", "Prata", "Vermelho", "Azul"],
                    { $floor: { $multiply: [{$rand: {}}, 5] } }
                ]
            }
        }
    },

    // Limita a quantidade de registros
    { $limit: 5 },

    // Salva na coleção final
    { $out: "cor" }

]);