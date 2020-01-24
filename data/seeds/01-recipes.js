exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { id: 1, name: 'Sweet and Sour Chicken' },
    { id: 2, name: 'Crispy Garlic' },
    { id: 3, name: 'Macaroni and Cheese' }
  ]);
};