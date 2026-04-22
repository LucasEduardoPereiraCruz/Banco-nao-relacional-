db.cidades.aggregate([
    //Passo 1: Desconstroi o array principal "estados"
    {
        $unwind: "$estados"
    },
    //Passo 2: Desconstroi o array  "cidades" que está dentro de cada estado
    {
        $unwind: "$estados.cidades"
    },
    //Passo 3: Define a estrutura final (projetando apneas os campos que você quer) 
    {
       $project: {
        _id: 0, // 0 remove o  _id . Mude para 1 se quiser mantê-lo.
        nome_cidade: "$estados.cidades",
        estado: "$estados.sigla",
        nome_estado: "$estados.nome" //Nota: usar esses espaços e chaves JSON pode dar dor de cabeça no futuro. Recomendo
       }
    },
    //Passo 4 Grava a estrutura gerada no estágio anterior em uma nova coleção
    {
        $out: "cidades_certo"
    }
]);