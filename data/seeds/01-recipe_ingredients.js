exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 3},
    { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 1.6},
    { id: 3, recipe_id: 1, ingredient_id: 3, quantity: 7},
    //
    { id: 4, recipe_id: 2, ingredient_id: 4, quantity: 4.3},
    { id: 5, recipe_id: 2, ingredient_id: 5, quantity: 1},
    { id: 6, recipe_id: 2, ingredient_id: 6, quantity: 8},
//
    { id: 7, recipe_id: 3, ingredient_id: 7, quantity: 30},
    { id: 8, recipe_id: 3, ingredient_id: 8, quantity: 2},
    { id: 9, recipe_id: 3, ingredient_id: 9, quantity: 0.392}
  ])
}