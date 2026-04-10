                                        // ========== ATIVIDADE ========== // 

// Exercicio 1 

db.heroes.insertMany([
    { _id: 1, name: "Spider-Man", city: "New York", power: ["Agility", "Web-Shooting"], defeatedVillains: 50 },
    { _id: 2, name: "Batman", city: "Gotham", power: ["Martial Arts", "Detective Skills"], defeatedVillains: 200 },
    { _id: 3, name: "Wonder Woman", city: "Themyscira", power: ["Super Strength", "Lasso"], defeatedVillains: 120 }
  ]);

  // Add poder
  db.heroes.updateOne(
    {"name": "Spider-Man"}, 
    {"$push": {"power": "Sentido Aranha aprimorado"}}
  );

  // Incrementa um valor 
  db.heroes.updateOne(
    {"name": "Batman"}, 
    {"inc": {"defeatedVillains": 10}}
  );


  // Atualiza o campo city 
  db.heroes.updateOne(
    {"name": "Wonder Woman"}, 
    {"$set": {"city": "Amazonia"}}
  );


  // Remove um campo 
  db.heroes.updateOne(
    {"name": "Batman"}, 
    {"$unset": {"power": "Detective Skills"}}
  );



  
  // Exercicio 2!!! Menu de Restaurante
  db.menu.insertMany([
    { "_id": 1, "dish": "Pizza", "ingredients": ["Dough", "Tomato Sauce", "Cheese"], "price": 30 },
    { "_id": 2, "dish": "Sushi", "ingredients": ["Rice", "Fish", "Seaweed"], "price": 40 },
    { "_id": 3, "dish": "Taco", "ingredients": ["Tortilla", "Beef", "Cheese"], "price": 15 }
  ]);

  // Todos os pratos aumentaram o valor em 10% 
  db.menu.updateMany(
    {},
    {"$mul": {"price": 1.1}}
  );

  // ADICIONANDO O INGREDIENTE GUACAMOLE 
  db.menu.updateOne(
    {"dish": "Taco"},
    {"$push": {"ingredients": "Guacamole"}}
  );


  // Atualizar preço do sushi para R$35,00 
  db.menu.updateOne(
    { dish: "Sushi" },
    { $set: { price: 35 } }
  );


  // Trocar "Beef" por "Chicken" no Taco
  db.menu.updateOne(
    { dish: "Taco" },
    { $set: { "ingredients.$[elem]": "Chicken" } },
    { arrayFilters: [{ elem: "Beef" }] }
  );