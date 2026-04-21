db.pessoas_rascunho.aggregate([
    {
        $project: {
            _id: 0,
            nome: 1,

            cpf: {
                $concat: [
                    { $toString: { $floor: { $multiply: [{ $rand: {} }, 1000] } } },
                    ".",
                    { $toString: { $floor: { $multiply: [{ $rand: {} }, 1000] } } },
                    ".",
                    { $toString: { $floor: { $multiply: [{ $rand: {} }, 1000] } } },
                    "-",
                    { $toString: { $floor: { $multiply: [{ $rand: {} }, 100] } } }
                ]
            }
        },

        sexo: {
            $arrayElemAt: [
                ["Masculino", "Feminino"],
                { $floor: { $multiply: [{ $rand: {} }, 2] } }
            ]
        },

        endereco: {
            logradouro: "Rua exemplo",
            numero: { $floor: { $multiply: [{ rand: {} }, 1000] } },
            bairro: "Centro",
            cidade: "Jaú",
            cep: {
                $concat: [
                    { $toString: { $floor: { $multiply: [{ $rand: {} }, 100000] } } },
                    "-",
                    { $toString: { $floor: { $multiply: [{ $rand: {} }, 1000] } } }
                ]
            }
        },

        cadastro: {
            $add: [
                new Date("2026-01-01"),
                {
                    $multiply: [
                        { $rand: {} },
                        (new Date() - new Date("2026-01-01"))
                    ]
                }
            ]
        }

    },

    { $limit: 10 },
    { $out: "Proprietário" }
]); 