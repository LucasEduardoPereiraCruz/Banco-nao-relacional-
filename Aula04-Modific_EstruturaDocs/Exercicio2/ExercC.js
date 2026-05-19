db.menu.insertMany([
    {_id: 1, dish: "Pizza", ingredientes: ["Dough", "Tomato Sauce", "Cheese"], price: 30},
    {_id: 2, dish: "Sushi", ingredientes: ["Rice", "Fish", "Seaweed"], price: 40},
    {_id: 3, dish: "Taco", ingredientes: ["Tortilla", "Beef", "Cheese"], price: 15}
]); 

// Sushi teve um reajuste e custa 35 agora. Atualize
db.restaurante.updateOne(
    {dish: "Sushi"},
    {$set: {preco: 35}}
);