// EXEMPLOS 

// ========== ATUALIZAÇÃO DE DOCS (MÉTODO UPDATE e REPLACEONE) ========== // 
 // updateOne
db.users.updateOne(
    {username: "joao"},
    {$set: {age: 25}}
);
 // Usuário João agr tem 25 anos 

 // updateMany
 db.users.updateOne(
    {active: true},
    {$set: {premium: true}}
);
 // Todos os usuários agr são premium 


// SUBSTITUI UM DOC INTEIRO POR UM NOVO 
 // replaceOne
db.users.replaceOne(
    {username: "Maria"}, 
    {_id: 2, username: "Maria", age: 31, active: true, premium: false, hobbies: []}
);
 // "maria" foi completamente substituida e perdeu suas tasks 



// ========== MODIFICAÇÃO DE CAMPOS ($SET, $UNSET, $RENAME) ========== //
 // $set define ou altera um campo especifico 
db.users.updateOne(
    {username: "joao"}, 
    {$set: {premium: true}}
); 
 // joao agr é premium


 // $unset remove um campo 
db.users.updateOne(
    {username: "carlos"}, 
    {$unset: {premium: ""}}
);  
 // remove o campo premium do usuário carlos


 // $rename renomeia um campo 
db.users.updateOne(
    {username: "carlos"}, 
    {$rename: {"age": "yearsOld"}}
);  
 // O campo age foi renomeado para yearsOld para maria




// ========== OPERAÇÕES MATEMÁTICAS ($INC, $MUL, $MIN, $MAX) ========== //

 // $inc incrementa um valor 
db.users.updateOne(
    {username: "joao"}, 
    {$inc: {age: 1}}
); 
 // a idade de joao aumenta em 1 


 // $mul multiplica um valor
db.users.updateOne(
    {username: "carlos"}, 
    {$mul: {age: 2}}
); 
 // idade de carlos dobra


 // $min 
db.users.updateOne(
    {username: "carlos"}, 
    {$min: {age: 23}}
); 
 // se a idade de joao for maior que 23, ela é reduzida para 23


 // $max 
db.users.updateOne(
    {username: "maria"}, 
    {$max: {yearsOld: 35}}
); 
 // se a idade de maria for menor que 35, ela é aumentada para 35 




// ========== OPERAÇÕES EM ARRAYS ($PUSH, $POP, $PULL, $ADDTOSET, $EACH) ========== //

 // $push Adiciona um elemento no array 
db.users.updateOne(
    {username: "joao"}, 
    {$push: {hobbies: "Guitar"}}
);  
 // Guitar é adicionado ao array de hobbies de joao

 // $pop Remove o primeiro ou ultimo elemento   
db.users.updateOne(
    {username: "maria"}, 
    {$pop: {hobbies: -1}}
);  
 // Remove o primeiro item do array hobbies de maria


 // $pull Remove elementos especificos
db.users.updateOne(
    {username: "carlos"}, 
    {$pull: {hobbies: "gaming"}}
);  
 // Remove gaming do array de hobbies de carlos


 // $addToSet Adiciona um item se ele não existir   
db.users.updateOne(
    {username: "joao"}, 
    {$addToSet: {hobbies: "chess"}}
);  
 // Chess só será add ao array hobbies se ainda nao existir


  // $each Adiciona multiplos elementos  
db.users.updateOne(
    {username: "joao"}, 
    {$push: {hobbies: {$each: ["coding", "music"] } } }
);  
 // coding e music são adicionados a hobbies


// FALTA OS EXERCICIOS