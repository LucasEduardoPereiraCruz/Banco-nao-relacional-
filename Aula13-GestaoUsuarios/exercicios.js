/*1) Crie um usuário chamado cidadao no banco Detran com senha 1234 que
tenha apenas permissão de leitura neste banco.*/

db.createUser({
    user: "cidadao",
    pwd: "1234",
    roles: [ {role: "read",
                db: "Detran"}]
})

/*2) Crie um usuário chamado agente no banco Detran com senha abc123 e
permissões de leitura e escrita.*/

db.createUser({
    user: "agente",
    pwd: "abc123",
    roles: [ {role: "readWrite",
                db: "Detran"}]
})

/*3) Crie um usuário chamado adminGoverno no banco Detran, com senha
admin321, com permissão para gerenciar usuários neste banco.*/

db.createUser({
    user: "adminGoverno",
    pwd: "admin321",
    roles: [ {role: "userAdmin",
                db: "Detran"}]
})


/*4) Liste todos os usuários criados no banco Detran. Depois, use outro
comando para obter as informações completas de um usuário específico.*/
db.getUsers(); // consulta todos os usuários 

db.getUser("Joao"); // consulta de uma usuário em especifico 


/*5) Altere a senha do usuário cidadao para novaSenha456.*/
db.changeUserPassword("cidadao", "novaSenha456"); 


/*6) Crie uma role chamada visualizadorProdutos no banco PetShop que permita apenas o comando
find na coleção produtos.*/

db.createRole({
    role: "visualizadorProdutos",
    privileges : [
        {
            resource: {db: "Petshop", collection: "produtos" }, // É o local onde a permissão vale. 
            // As permissões só valem para a coleção produtos do banco PetShop.
            actions: ["find"] // São os comandos permitidos.
        }
    ], 
    roles:[]
})


/*7) Conceda a role visualizadorProdutos ao usuário balconista do banco de dados PetShop.*/

db.grantRolesToUser("balconista", 
    [
        {role: "visualizadorProdutos", db: "Petshop"}
    ]
)


/*8) Altere a role visualizadorProdutos para também permitir o uso do comando count na coleção produtos.*/
db.updateRole(
   "visualizadorProdutos",
   {
      privileges: [ // conjunto de privilégios da role.
         {
            resource: {
               db: "PetShop",
               collection: "produtos"
            },
            actions: [ "find", "count" ]
         }
      ],
      roles: []
   }
)



/*9) Altere a role visualizadorProdutos para também permitir o uso do comando count na coleção produtos.*/
db.revokeRolesFromUser("Balconista", 
    [
        {role: "visualizadorProdutos", db: "Petshop"}
    ]
)

// Depois excluir a role 
db.dropRole("visualizadorProdutos")


/*10) Crie um usuário chamado rootUser no banco PetShop com senha super123, com a role root.*/
db.createUser({
    user: "rootUser", 
    pwd: "super123",
    roles: [ // São as roles herdadas por essa role.
        {role: "root", db: "admin"} // Geralmente fica no BD admin - // role (singular) É o nome da role que você está criando ou referenciando.

    ]
})